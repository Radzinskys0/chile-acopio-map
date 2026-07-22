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
    id: "arica",
    nombre: "Arica y Parinacota",
    estado: "monitoreo",
    resumen:
      "Sin eventos activos. Se mantiene punto de recepción para apoyo a regiones del sur.",
    centros: [
      {
        nombre: "Municipalidad de Arica",
        direccion: "Rafael Sotomayor 306",
        comuna: "Arica",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 58 220 6000",
        necesita: ["Ropa de abrigo nueva", "Frazadas selladas"],
      },
    ],
  },
  {
    id: "tarapaca",
    nombre: "Tarapacá",
    estado: "monitoreo",
    resumen: "Región coordinando envíos solidarios hacia zona centro-sur.",
    centros: [
      {
        nombre: "Municipalidad de Iquique",
        direccion: "Serrano 145",
        comuna: "Iquique",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 57 254 5000",
        necesita: ["Frazadas", "Alimentos no perecibles"],
      },
    ],
  },
  {
    id: "antofagasta",
    nombre: "Antofagasta",
    estado: "monitoreo",
    resumen: "Centros de recolección activos para envío a zonas afectadas.",
    centros: [
      {
        nombre: "Municipalidad de Antofagasta",
        direccion: "Washington 2675",
        comuna: "Antofagasta",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 55 245 1000",
        necesita: ["Ropa de abrigo", "Frazadas", "Alimentos"],
      },
      {
        nombre: "Municipalidad de Calama",
        direccion: "Vicuña Mackenna 2001",
        comuna: "Calama",
        horario: "Lun a Vie, 09:00 – 17:00",
        necesita: ["Frazadas", "Artículos de aseo"],
      },
    ],
  },
  {
    id: "atacama",
    nombre: "Atacama",
    estado: "monitoreo",
    resumen: "Apoyo logístico hacia regiones con emergencia declarada.",
    centros: [
      {
        nombre: "Municipalidad de Copiapó",
        direccion: "Chacabuco 546",
        comuna: "Copiapó",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 52 220 6000",
        necesita: ["Frazadas", "Ropa de abrigo", "Agua"],
      },
    ],
  },
  {
    id: "coquimbo",
    nombre: "Coquimbo",
    estado: "alerta",
    resumen:
      "Precipitaciones sobre lo normal en zona costera. Anegamientos aislados en La Serena y Coquimbo.",
    centros: [
      {
        nombre: "Municipalidad de La Serena",
        direccion: "Arturo Prat 451",
        comuna: "La Serena",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 51 220 6000",
        necesita: ["Frazadas", "Alimentos no perecibles", "Ropa de abrigo"],
      },
      {
        nombre: "Municipalidad de Coquimbo",
        direccion: "Bilbao 348",
        comuna: "Coquimbo",
        horario: "Lun a Vie, 08:30 – 17:30",
        necesita: ["Botas de agua", "Impermeables", "Pañales"],
      },
      {
        nombre: "Municipalidad de Ovalle",
        direccion: "Vicuña Mackenna 441",
        comuna: "Ovalle",
        horario: "Lun a Vie, 09:00 – 17:30",
        necesita: ["Alimentos no perecibles", "Agua embotellada"],
      },
    ],
  },
  {
    id: "valparaiso",
    nombre: "Valparaíso",
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
      {
        nombre: "Municipalidad de Villa Alemana",
        direccion: "Av. Buenos Aires 999",
        comuna: "Villa Alemana",
        horario: "Lun a Sáb, 08:30 – 20:00",
        necesita: ["Frazadas", "Ropa de niño/a", "Comida para mascotas"],
      },
      {
        nombre: "Municipalidad de Viña del Mar",
        direccion: "Arlegui 615",
        comuna: "Viña del Mar",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 32 218 5000",
        necesita: ["Colchones", "Ropa de cama", "Artículos de aseo"],
      },
    ],
  },
  {
    id: "metropolitana",
    nombre: "Metropolitana de Santiago",
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
      {
        nombre: "Municipalidad de San Bernardo",
        direccion: "Arturo Prat 435",
        comuna: "San Bernardo",
        horario: "Lun a Vie, 08:30 – 17:30",
        necesita: ["Ropa de abrigo", "Alimentos no perecibles"],
      },
      {
        nombre: "Municipalidad de Colina",
        direccion: "Chacabuco 15",
        comuna: "Colina",
        horario: "Lun a Vie, 09:00 – 18:00",
        necesita: ["Frazadas", "Agua", "Velas"],
      },
      {
        nombre: "Municipalidad de Maipú",
        direccion: "Av. 5 de Abril 0260",
        comuna: "Maipú",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 2 2677 7000",
        necesita: ["Pañales", "Leche", "Frazadas"],
      },
    ],
  },
  {
    id: "ohiggins",
    nombre: "Libertador General Bernardo O'Higgins",
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
      {
        nombre: "Municipalidad de Doñihue",
        direccion: "Alcalde Solís de Ovando 155",
        comuna: "Doñihue",
        horario: "Lun a Dom, 09:00 – 20:00",
        necesita: ["Colchones", "Frazadas", "Ropa de trabajo"],
      },
      {
        nombre: "Municipalidad de San Fernando",
        direccion: "Manuel Rodríguez 787",
        comuna: "San Fernando",
        horario: "Lun a Vie, 08:30 – 17:30",
        necesita: ["Alimentos", "Agua", "Artículos de higiene"],
      },
    ],
  },
  {
    id: "maule",
    nombre: "Maule",
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
      {
        nombre: "Municipalidad de Curicó",
        direccion: "Estado 402",
        comuna: "Curicó",
        horario: "Lun a Vie, 08:30 – 17:30",
        necesita: ["Frazadas", "Alimentos", "Agua"],
      },
      {
        nombre: "Municipalidad de Linares",
        direccion: "Independencia 604",
        comuna: "Linares",
        horario: "Lun a Vie, 09:00 – 18:00",
        necesita: ["Ropa de abrigo", "Pañales", "Leche en polvo"],
      },
    ],
  },
  {
    id: "nuble",
    nombre: "Ñuble",
    estado: "alerta",
    resumen:
      "Precordillera con nevadas fuertes. Sectores rurales de Coihueco y San Fabián con caminos cortados.",
    centros: [
      {
        nombre: "Municipalidad de Chillán",
        direccion: "18 de Septiembre 510",
        comuna: "Chillán",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 42 220 1000",
        necesita: ["Frazadas", "Parafina", "Alimentos no perecibles"],
      },
      {
        nombre: "Municipalidad de San Carlos",
        direccion: "Av. Argentina 400",
        comuna: "San Carlos",
        horario: "Lun a Vie, 09:00 – 18:00",
        necesita: ["Ropa de abrigo", "Leña", "Agua embotellada"],
      },
    ],
  },
  {
    id: "biobio",
    nombre: "Biobío",
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
      {
        nombre: "Municipalidad de Talcahuano",
        direccion: "Aníbal Pinto 570",
        comuna: "Talcahuano",
        horario: "Lun a Dom, 09:00 – 20:00",
        necesita: ["Frazadas", "Ropa de abrigo", "Comida para mascotas"],
      },
      {
        nombre: "Universidad de Concepción – Casa del Deporte",
        direccion: "Edmundo Larenas 129",
        comuna: "Concepción",
        horario: "Lun a Vie, 09:00 – 19:00",
        necesita: ["Útiles escolares", "Ropa de niño/a", "Leche"],
      },
    ],
  },
  {
    id: "araucania",
    nombre: "La Araucanía",
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
      {
        nombre: "Municipalidad de Villarrica",
        direccion: "Pedro de Valdivia 810",
        comuna: "Villarrica",
        horario: "Lun a Vie, 08:30 – 17:30",
        necesita: ["Frazadas", "Leña", "Alimentos"],
      },
      {
        nombre: "Municipalidad de Lonquimay",
        direccion: "Ignacio Carrera Pinto 540",
        comuna: "Lonquimay",
        horario: "Lun a Dom, 09:00 – 19:00",
        necesita: ["Parafina", "Frazadas térmicas", "Alimentos no perecibles"],
      },
    ],
  },
  {
    id: "losrios",
    nombre: "Los Ríos",
    estado: "monitoreo",
    resumen: "Lluvias dentro de rango. Puntos de acopio activos como apoyo regional.",
    centros: [
      {
        nombre: "Municipalidad de Valdivia",
        direccion: "Av. Arturo Prat 555",
        comuna: "Valdivia",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 63 227 0000",
        necesita: ["Ropa de abrigo", "Frazadas"],
      },
      {
        nombre: "Municipalidad de La Unión",
        direccion: "Arturo Prat 460",
        comuna: "La Unión",
        horario: "Lun a Vie, 09:00 – 17:30",
        necesita: ["Alimentos no perecibles", "Pañales"],
      },
    ],
  },
  {
    id: "loslagos",
    nombre: "Los Lagos",
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
      {
        nombre: "Municipalidad de Osorno",
        direccion: "Manuel A. Matta 556",
        comuna: "Osorno",
        horario: "Lun a Vie, 08:30 – 17:30",
        necesita: ["Frazadas", "Leche"],
      },
      {
        nombre: "Municipalidad de Castro",
        direccion: "Blanco Encalada 273",
        comuna: "Castro",
        horario: "Lun a Vie, 08:30 – 17:00",
        necesita: ["Ropa de abrigo", "Alimentos"],
      },
    ],
  },
  {
    id: "aysen",
    nombre: "Aysén del General Carlos Ibáñez del Campo",
    estado: "monitoreo",
    resumen: "Frío extremo estacional. Punto único de acopio regional.",
    centros: [
      {
        nombre: "Municipalidad de Coyhaique",
        direccion: "Bilbao 357",
        comuna: "Coyhaique",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 67 267 5100",
        necesita: ["Parafina", "Frazadas térmicas", "Ropa de abrigo"],
      },
    ],
  },
  {
    id: "magallanes",
    nombre: "Magallanes y Antártica Chilena",
    estado: "monitoreo",
    resumen: "Sin eventos activos. Apoyo logístico al resto del país.",
    centros: [
      {
        nombre: "Municipalidad de Punta Arenas",
        direccion: "Plaza Muñoz Gamero 745",
        comuna: "Punta Arenas",
        horario: "Lun a Vie, 08:30 – 17:30",
        contacto: "+56 61 220 0000",
        necesita: ["Frazadas térmicas", "Ropa de abrigo"],
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
