export type Centro = {
  nombre: string;
  direccion: string;
  comuna: string;
  horario: string;
  contacto?: string;
  necesita: string[];
};

export type Region = {
  id: string;
  nombre: string;
  estado: "critico" | "alerta" | "monitoreo";
  resumen: string;
  centros: Centro[];
};

export const ULTIMA_ACTUALIZACION = "22 de julio de 2026, 09:30 hrs";

export const REGIONES: Region[] = [
  {
    id: "valparaiso",
    nombre: "Región de Valparaíso",
    estado: "critico",
    resumen:
      "Sistema frontal con lluvia intensa y marejadas. Comunas de San Antonio, Quilpué y Villa Alemana con anegamientos severos.",
    centros: [
      {
        nombre: "Municipalidad de Valparaíso",
        direccion: "Av. Argentina 864",
        comuna: "Valparaíso",
        horario: "Lun a Dom, 09:00 – 21:00",
        contacto: "+56 32 293 9000",
        necesita: ["Frazadas", "Agua embotellada", "Ropa de abrigo adulto", "Pañales"],
      },
      {
        nombre: "Gimnasio Municipal Quilpué",
        direccion: "Av. Los Carrera 892",
        comuna: "Quilpué",
        horario: "Lun a Dom, 08:00 – 22:00",
        necesita: ["Colchonetas", "Alimentos no perecibles", "Artículos de higiene"],
      },
      {
        nombre: "Estadio Municipal San Antonio",
        direccion: "Av. Barros Luco 1851",
        comuna: "San Antonio",
        horario: "24 horas",
        contacto: "+56 35 220 8000",
        necesita: ["Botas de agua", "Impermeables", "Leche en polvo", "Linternas"],
      },
    ],
  },
  {
    id: "metropolitana",
    nombre: "Región Metropolitana",
    estado: "alerta",
    resumen:
      "Precipitaciones sobre lo normal en zona precordillerana. Cortes de suministro en Puente Alto, San Bernardo y Colina.",
    centros: [
      {
        nombre: "Estadio Nacional – Puerta 8",
        direccion: "Av. Grecia 2001",
        comuna: "Ñuñoa",
        horario: "Lun a Dom, 09:00 – 20:00",
        contacto: "+56 2 2238 8102",
        necesita: ["Frazadas nuevas", "Ropa de niño/a", "Alimentos no perecibles"],
      },
      {
        nombre: "Movistar Arena",
        direccion: "Av. Beaucheff 1204",
        comuna: "Santiago",
        horario: "Lun a Vie, 10:00 – 19:00",
        necesita: ["Artículos de aseo", "Pañales", "Leche"],
      },
      {
        nombre: "Municipalidad de Puente Alto",
        direccion: "Concha y Toro 1820",
        comuna: "Puente Alto",
        horario: "Lun a Sáb, 09:00 – 18:00",
        necesita: ["Colchones", "Frazadas", "Agua embotellada"],
      },
    ],
  },
  {
    id: "ohiggins",
    nombre: "Región de O'Higgins",
    estado: "critico",
    resumen:
      "Desborde del río Cachapoal. Familias evacuadas en Rancagua, Machalí y Doñihue.",
    centros: [
      {
        nombre: "Medialuna Monumental de Rancagua",
        direccion: "Av. España 1090",
        comuna: "Rancagua",
        horario: "24 horas",
        contacto: "+56 72 220 0000",
        necesita: ["Frazadas", "Ropa de abrigo", "Alimentos no perecibles", "Botas"],
      },
      {
        nombre: "Gimnasio Municipal Machalí",
        direccion: "Manuel Rodríguez 750",
        comuna: "Machalí",
        horario: "Lun a Dom, 08:00 – 22:00",
        necesita: ["Agua", "Pañales", "Leche en polvo"],
      },
    ],
  },
  {
    id: "maule",
    nombre: "Región del Maule",
    estado: "alerta",
    resumen:
      "Aislamiento en sectores rurales de Colbún y San Clemente por caída de puentes.",
    centros: [
      {
        nombre: "Municipalidad de Talca",
        direccion: "1 Poniente 1234",
        comuna: "Talca",
        horario: "Lun a Vie, 08:30 – 20:00",
        contacto: "+56 71 220 0000",
        necesita: ["Alimentos no perecibles", "Frazadas", "Velas"],
      },
      {
        nombre: "Estadio Fiscal de Talca",
        direccion: "Av. San Miguel 2100",
        comuna: "Talca",
        horario: "Lun a Dom, 09:00 – 19:00",
        necesita: ["Ropa de abrigo", "Colchonetas"],
      },
    ],
  },
  {
    id: "biobio",
    nombre: "Región del Biobío",
    estado: "critico",
    resumen:
      "Vientos sobre 100 km/h y anegamientos en Concepción, Talcahuano y Los Ángeles.",
    centros: [
      {
        nombre: "SurActivo Concepción",
        direccion: "Av. Jorge Alessandri 3177",
        comuna: "Concepción",
        horario: "Lun a Dom, 10:00 – 21:00",
        contacto: "+56 41 220 0000",
        necesita: ["Frazadas", "Ropa de abrigo", "Pañales", "Artículos de aseo"],
      },
      {
        nombre: "Gimnasio Municipal Los Ángeles",
        direccion: "Villagrán 350",
        comuna: "Los Ángeles",
        horario: "24 horas",
        necesita: ["Agua embotellada", "Alimentos no perecibles", "Botas de agua"],
      },
    ],
  },
  {
    id: "araucania",
    nombre: "Región de La Araucanía",
    estado: "alerta",
    resumen:
      "Nevadas intensas en cordillera. Comunidades aisladas en Lonquimay y Curacautín.",
    centros: [
      {
        nombre: "Municipalidad de Temuco",
        direccion: "Prat 650",
        comuna: "Temuco",
        horario: "Lun a Vie, 08:30 – 18:00",
        contacto: "+56 45 297 3000",
        necesita: ["Leña", "Parafina", "Frazadas térmicas", "Alimentos"],
      },
      {
        nombre: "Municipalidad de Curacautín",
        direccion: "Yungay 285",
        comuna: "Curacautín",
        horario: "Lun a Dom, 09:00 – 20:00",
        necesita: ["Ropa de abrigo", "Alimento para animales", "Pañales"],
      },
    ],
  },
  {
    id: "loslagos",
    nombre: "Región de Los Lagos",
    estado: "monitoreo",
    resumen:
      "Precipitaciones dentro de rangos estacionales. Se mantiene monitoreo preventivo.",
    centros: [
      {
        nombre: "Municipalidad de Puerto Montt",
        direccion: "Antonio Varas 415",
        comuna: "Puerto Montt",
        horario: "Lun a Vie, 09:00 – 17:30",
        contacto: "+56 65 226 1000",
        necesita: ["Ropa de abrigo", "Frazadas"],
      },
    ],
  },
];

export const ESTADO_META: Record<
  Region["estado"],
  { label: string; className: string; dot: string }
> = {
  critico: {
    label: "Estado crítico",
    className: "bg-urgent/10 text-urgent border-urgent/30",
    dot: "bg-urgent",
  },
  alerta: {
    label: "Alerta amarilla",
    className: "bg-warm/15 text-warm-foreground border-warm/40",
    dot: "bg-warm",
  },
  monitoreo: {
    label: "En monitoreo",
    className: "bg-secondary text-secondary-foreground border-border",
    dot: "bg-muted-foreground",
  },
};
