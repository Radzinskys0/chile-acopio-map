import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroImg from "@/assets/hero-acopio.jpg";
import {
  REGIONES,
  ESTADO_META,
  ULTIMA_ACTUALIZACION,
  type Region,
} from "@/lib/acopio-data";
import { SugerirCentro } from "@/components/sugerir-centro";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acopio Chile · Emergencia Meteorológica Julio 2026" },
      {
        name: "description",
        content:
          "Directorio actualizado de centros de acopio en todo Chile para la emergencia meteorológica de julio 2026. Encuentra dónde donar y qué se necesita en cada región.",
      },
      { property: "og:title", content: "Acopio Chile · Emergencia Julio 2026" },
      {
        property: "og:description",
        content:
          "Centros de acopio por región para la emergencia meteorológica de julio 2026 en Chile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FILTROS: { id: "todos" | Region["estado"]; label: string }[] = [
  { id: "todos", label: "Todas las regiones" },
  { id: "critico", label: "Crítico" },
  { id: "alerta", label: "Alerta" },
  { id: "monitoreo", label: "Monitoreo" },
];

function Index() {
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]["id"]>("todos");
  const [query, setQuery] = useState("");

  const regionesFiltradas = useMemo(() => {
    const q = query.trim().toLowerCase();
    return REGIONES.filter((r) => filtro === "todos" || r.estado === filtro)
      .map((r) => ({
        ...r,
        centros: q
          ? r.centros.filter(
              (c) =>
                c.nombre.toLowerCase().includes(q) ||
                c.comuna.toLowerCase().includes(q) ||
                c.direccion.toLowerCase().includes(q),
            )
          : r.centros,
      }))
      .filter((r) => r.centros.length > 0);
  }, [filtro, query]);

  const totalCentros = REGIONES.reduce((a, r) => a + r.centros.length, 0);
  const criticas = REGIONES.filter((r) => r.estado === "critico").length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display font-bold">
              A
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">Acopio Chile</div>
              <div className="text-xs text-muted-foreground">Emergencia meteorológica</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#regiones" className="hover:text-foreground">Regiones</a>
            <a href="#que-donar" className="hover:text-foreground">Qué donar</a>
            <a href="#sugerir" className="hover:text-foreground">Sugerir</a>
            <a href="#emergencias" className="hover:text-foreground">Emergencias</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Voluntarios en un centro de acopio durante temporal en Chile"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.04_250/0.85)] via-[oklch(0.2_0.05_245/0.7)] to-[oklch(0.18_0.04_250/0.9)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-warm" />
            Actualizado · {ULTIMA_ACTUALIZACION}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-6xl">
            Dónde llevar ayuda durante el temporal de julio 2026.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Un directorio abierto de centros de acopio activos en todo Chile.
            Encuentra el más cercano, revisa qué se necesita hoy y evita
            saturar los puntos ya cubiertos.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-lg">
            <Stat value={REGIONES.length.toString()} label="regiones" />
            <Stat value={totalCentros.toString()} label="centros activos" />
            <Stat value={criticas.toString()} label="en estado crítico" />
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section id="regiones" className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold">Centros por región</h2>
            <p className="mt-1 text-muted-foreground">
              De Arica a Magallanes. Verifica horarios antes de acudir.
            </p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar comuna, dirección o centro…"
            className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm shadow-[var(--shadow-soft)] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-80"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {FILTROS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filtro === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {regionesFiltradas.length === 0 && (
            <p className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
              No hay centros que coincidan con la búsqueda.
            </p>
          )}
          {regionesFiltradas.map((region) => {
            const meta = ESTADO_META[region.estado];
            return (
              <article key={region.id}>
                <header className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {region.nombre}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                      {region.resumen}
                    </p>
                  </div>
                  <span
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${meta.className}`}
                  >
                    <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                    {meta.label}
                  </span>
                </header>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {region.centros.map((c) => (
                    <div
                      key={c.nombre}
                      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
                    >
                      <div className="text-xs font-medium uppercase tracking-wider text-primary">
                        {c.comuna}
                      </div>
                      <h4 className="mt-1 font-display text-lg font-semibold leading-snug">
                        {c.nombre}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground">{c.direccion}</p>

                      <dl className="mt-4 space-y-1.5 text-sm">
                        <div className="flex gap-2">
                          <dt className="text-muted-foreground">Horario:</dt>
                          <dd>{c.horario}</dd>
                        </div>
                        {c.contacto && (
                          <div className="flex gap-2">
                            <dt className="text-muted-foreground">Tel:</dt>
                            <dd>
                              <a
                                href={`tel:${c.contacto.replace(/\s/g, "")}`}
                                className="text-primary hover:underline"
                              >
                                {c.contacto}
                              </a>
                            </dd>
                          </div>
                        )}
                      </dl>

                      <div className="mt-4 border-t border-dashed border-border pt-3">
                        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Necesita hoy
                        </div>
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {c.necesita.map((n) => (
                            <li
                              key={n}
                              className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                            >
                              {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Qué donar */}
      <section id="que-donar" className="border-y border-border bg-[var(--gradient-warm)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold">
              Qué donar (y qué evitar)
            </h2>
            <p className="mt-2 text-muted-foreground">
              Una donación útil es la que llega en buen estado, es funcional en
              invierno y responde a lo que hoy se pide en terreno.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-xl font-semibold text-primary">Sí ayuda</h3>
              <ul className="mt-4 grid gap-2 text-sm">
                {[
                  "Frazadas nuevas o en buen estado",
                  "Ropa de abrigo impermeable",
                  "Botas de agua adulto y niño/a",
                  "Alimentos no perecibles sellados",
                  "Agua embotellada",
                  "Pañales, leche en polvo, artículos de higiene",
                  "Parafina, velas y linternas con pilas",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-urgent/20 bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-xl font-semibold text-urgent">Mejor no</h3>
              <ul className="mt-4 grid gap-2 text-sm">
                {[
                  "Ropa mojada, rota o muy usada",
                  "Alimentos preparados o refrigerados",
                  "Medicamentos vencidos o abiertos",
                  "Colchones en mal estado",
                  "Electrodomésticos que no funcionen",
                  "Juguetes rotos o incompletos",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-urgent" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergencias */}
      <SugerirCentro />

      {/* Emergencias */}
      <section id="emergencias" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold">Teléfonos de emergencia</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "SENAPRED", t: "137" },
            { n: "Bomberos", t: "132" },
            { n: "Carabineros", t: "133" },
            { n: "SAMU", t: "131" },
          ].map((e) => (
            <a
              key={e.n}
              href={`tel:${e.t}`}
              className="rounded-xl border border-border bg-card p-5 transition hover:border-primary"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {e.n}
              </div>
              <div className="mt-1 font-display text-3xl font-semibold text-primary">
                {e.t}
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted-foreground">
          <p>
            Información compilada desde municipios y SENAPRED. Verifica antes
            de acudir: los centros pueden cerrar o cambiar sus necesidades
            durante el día.
          </p>
          <p className="mt-2">Última actualización: {ULTIMA_ACTUALIZACION}</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
      <div className="font-display text-3xl font-semibold">{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/70">{label}</div>
    </div>
  );
}
