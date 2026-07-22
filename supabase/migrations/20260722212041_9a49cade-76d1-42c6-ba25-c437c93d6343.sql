
CREATE TABLE public.centros_sugeridos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  region TEXT NOT NULL,
  comuna TEXT NOT NULL,
  direccion TEXT NOT NULL,
  horario TEXT NOT NULL,
  contacto TEXT,
  necesita TEXT NOT NULL,
  enviado_por TEXT,
  aprobado BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.centros_sugeridos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.centros_sugeridos TO authenticated;
GRANT ALL ON public.centros_sugeridos TO service_role;

ALTER TABLE public.centros_sugeridos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede sugerir un centro"
  ON public.centros_sugeridos FOR INSERT
  TO anon, authenticated
  WITH CHECK (aprobado = false);

CREATE POLICY "Todos pueden ver centros aprobados"
  ON public.centros_sugeridos FOR SELECT
  TO anon, authenticated
  USING (aprobado = true);
