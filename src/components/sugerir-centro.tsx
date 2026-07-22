import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { REGIONES } from "@/lib/acopio-data";

type CentroSugerido = {
  id: string;
  nombre: string;
  region: string;
  comuna: string;
  direccion: string;
  horario: string;
  contacto: string | null;
  necesita: string;
  enviado_por: string | null;
};

const empty = {
  nombre: "",
  region: REGIONES[0]?.nombre ?? "",
  comuna: "",
  direccion: "",
  horario: "",
  contacto: "",
  necesita: "",
  enviado_por: "",
};

export function SugerirCentro() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [aprobados, setAprobados] = useState<CentroSugerido[]>([]);

  useEffect(() => {
    void cargar();
  }, []);

  async function cargar() {
    const { data } = await supabase
      .from("centros_sugeridos")
      .select("*")
      .eq("aprobado", true)
      .order("created_at", { ascending: false })
      .limit(20);
    if (data) setAprobados(data as CentroSugerido[]);
  }

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    // Validación mínima
    if (
      !form.nombre.trim() ||
      !form.comuna.trim() ||
      !form.direccion.trim() ||
      !form.horario.trim() ||
      !form.necesita.trim()
    ) {
      setStatus("error");
      setErrorMsg("Completa los campos obligatorios.");
      return;
    }

    const { error } = await supabase.from("centros_sugeridos").insert({
      nombre: form.nombre.trim().slice(0, 120),
      region: form.region,
      comuna: form.comuna.trim().slice(0, 80),
      direccion: form.direccion.trim().slice(0, 200),
      horario: form.horario.trim().slice(0, 120),
      contacto: form.contacto.trim().slice(0, 60) || null,
      necesita: form.necesita.trim().slice(0, 300),
      enviado_por: form.enviado_por.trim().slice(0, 80) || null,
      aprobado: false,
    });

    if (error) {
      setStatus("error");
      setErrorMsg("No pudimos enviar tu sugerencia. Intenta de nuevo.");
      return;
    }
    setStatus("ok");
    setForm(empty);
  }

  return (
    <section id="sugerir" className="mx-auto max-w-6xl px-5 py-16">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold">
          Sugerir un centro de acopio
        </h2>
        <p className="mt-2 text-muted-foreground">
          ¿Sabes de un punto activo que no aparece? Envíalo y, tras una revisión
          rápida, lo publicaremos aquí para toda la comunidad.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre del centro *">
              <input
                required
                value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                className={inputCls}
                placeholder="Ej: Gimnasio Municipal"
              />
            </Field>
            <Field label="Región *">
              <select
                value={form.region}
                onChange={(e) => update("region", e.target.value)}
                className={inputCls}
              >
                {REGIONES.map((r) => (
                  <option key={r.id} value={r.nombre}>
                    {r.nombre}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Comuna *">
              <input
                required
                value={form.comuna}
                onChange={(e) => update("comuna", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Dirección *">
              <input
                required
                value={form.direccion}
                onChange={(e) => update("direccion", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Horario *">
              <input
                required
                value={form.horario}
                onChange={(e) => update("horario", e.target.value)}
                className={inputCls}
                placeholder="Lun a Vie, 09:00 – 18:00"
              />
            </Field>
            <Field label="Teléfono de contacto">
              <input
                value={form.contacto}
                onChange={(e) => update("contacto", e.target.value)}
                className={inputCls}
                placeholder="+56 9 …"
              />
            </Field>
            <Field label="¿Qué se necesita? *" className="sm:col-span-2">
              <textarea
                required
                value={form.necesita}
                onChange={(e) => update("necesita", e.target.value)}
                className={`${inputCls} min-h-[80px] resize-y`}
                placeholder="Frazadas, agua, pañales, botas de agua…"
              />
            </Field>
            <Field label="Tu nombre u organización" className="sm:col-span-2">
              <input
                value={form.enviado_por}
                onChange={(e) => update("enviado_por", e.target.value)}
                className={inputCls}
                placeholder="Opcional"
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "sending" ? "Enviando…" : "Enviar sugerencia"}
          </button>

          {status === "ok" && (
            <p className="mt-3 text-sm text-primary">
              ¡Gracias! Tu sugerencia quedó pendiente de revisión.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-urgent">{errorMsg}</p>
          )}
        </form>

        <aside>
          <h3 className="font-display text-xl font-semibold">
            Sugerencias recientes de la comunidad
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Centros aportados por usuarios y verificados por el equipo.
          </p>
          <ul className="mt-5 space-y-3">
            {aprobados.length === 0 && (
              <li className="rounded-lg border border-dashed border-border p-5 text-sm text-muted-foreground">
                Aún no hay sugerencias aprobadas. ¡Sé la primera persona en aportar!
              </li>
            )}
            {aprobados.map((c) => (
              <li
                key={c.id}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="text-xs font-medium uppercase tracking-wider text-primary">
                  {c.region} · {c.comuna}
                </div>
                <div className="mt-1 font-display text-base font-semibold">
                  {c.nombre}
                </div>
                <div className="text-sm text-muted-foreground">{c.direccion}</div>
                <div className="mt-2 text-sm">
                  <span className="text-muted-foreground">Horario: </span>
                  {c.horario}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Necesita: {c.necesita}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
