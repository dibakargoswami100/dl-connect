CREATE TABLE public.job_applications (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  qualification text NOT NULL,
  experience text NOT NULL,
  position text NOT NULL,
  linkedin text,
  message text,
  resume_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.job_applications TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.job_applications TO authenticated;
GRANT ALL ON public.job_applications TO service_role;

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
ON public.job_applications FOR INSERT TO anon, authenticated
WITH CHECK (
  length(trim(full_name)) BETWEEN 2 AND 100
  AND length(trim(email)) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(phone)) BETWEEN 6 AND 20
  AND length(trim(location)) BETWEEN 2 AND 100
  AND length(trim(qualification)) BETWEEN 2 AND 100
  AND length(trim(experience)) BETWEEN 1 AND 20
  AND length(trim(position)) BETWEEN 1 AND 100
  AND (linkedin IS NULL OR length(linkedin) <= 255)
  AND (message IS NULL OR length(message) <= 1000)
  AND (resume_url IS NULL OR length(resume_url) <= 500)
);

CREATE POLICY "Admins can view applications"
ON public.job_applications FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update applications"
ON public.job_applications FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete applications"
ON public.job_applications FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_job_applications_updated_at
BEFORE UPDATE ON public.job_applications
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();