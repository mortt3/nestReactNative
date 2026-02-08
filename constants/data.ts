interface ListItem {
  id: number;
  checkBox: boolean;
  text: string;
}
interface IconListItem {
  id: number;
  icon: string;
  text: string;
}

interface Note {
  type: number;
  id: number;
  title: string;
  date: string;
  time?: string;
  difficulty?: string;
  text?: string;
  imageUrl?: number;
  list?: ListItem[];
  iconList?: IconListItem[];
}

export const NOTAS_DATA: Note[] = [ //tipo 1: hogar; tipo 2: recetas; tipo 3: listas; tipo 4: Notas personales; 
  {
    type: 1, id: 1, title: "Consejos del hogar", date: "4/1/202", iconList: [{ id: 1, icon: "༄", text: "ventila tu casa 10 minutos" },
    { id: 2, icon: "🛏️", text: "Haz la cama 15min despues de levantarte" },
    { id: 3, icon: "🧹", text: "Limpia los cristales con vinagre blanco" }

    ]
  },
  {
    type: 1,
    id: 2,
    title: "Rutina de limpieza",
    date: "05/01/2026",
    iconList: [
      { id: 1, icon: "🛏️", text: "Haz la cama" },
      { id: 2, icon: "🧼", text: "Lava los platos" },
      { id: 3, icon: "🗑️", text: "Saca la basura" },
    ],
  },

  {
    type: 2,
    id: 3,
    title: "Pasta rápida",
    date: "02/03/2025",
    time: "15 min",
    difficulty: "Fácil",
    imageUrl: require("../assets/images/pasta.png"),
  },

  {
    type: 2,
    id: 4,
    title: "Tostadas francesas",
    date: "10/01/2026",
    time: "10 min",
    difficulty: "Fácil",
    imageUrl: require("../assets/images/tostadas.png"),
  },

  {
    type: 2,
    id: 5,
    title: "Ensalada saludable",
    date: "12/01/2026",
    time: "8 min",
    difficulty: "Fácil",
    imageUrl: require("../assets/images/ensalada.png"),
  },

  {
    type: 3,
    id: 6,
    title: "Lista de compras",
    date: "16/01/2026",
    list: [
      { id: 1, checkBox: false, text: "Leche" },
      { id: 2, checkBox: true, text: "Pan" },
      { id: 3, checkBox: false, text: "Huevos" },
    ],
  },

  {
    type: 3,
    id: 7,
    title: "Supermercado",
    date: "18/01/2026",
    list: [
      { id: 1, checkBox: false, text: "Arroz" },
      { id: 2, checkBox: false, text: "Pollo" },
      { id: 3, checkBox: true, text: "Verduras" },
    ],
  },

  {
    type: 3,
    id: 8,
    title: "Tareas pendientes",
    date: "19/01/2026",
    list: [
      { id: 1, checkBox: false, text: "Llamar al médico" },
      { id: 2, checkBox: false, text: "Enviar correo" },
      { id: 3, checkBox: true, text: "Pagar recibo" },
    ],
  },

  {
    type: 4,
    id: 9,
    title: "Contraseñas",
    date: "02/01/2023",
    text: "Correo: ejemplo@gmail.com → contraseña: ********",
  },

  {
    type: 4,
    id: 10,
    title: "Idea de app",
    date: "03/01/2026",
    text: "App de notas con filtros por tipo y fecha.",
  },

  {
    type: 4,
    id: 11,
    title: "Recordatorio personal",
    date: "05/01/2026",
    text: "Beber más agua durante el día.",
  },

  {
    type: 1,
    id: 12,
    title: "Cocina limpia",
    date: "06/01/2026",
    iconList: [
      { id: 1, icon: "🍽️", text: "Lava los platos al terminar" },
      { id: 2, icon: "🧽", text: "Limpia la encimera" },
      { id: 3, icon: "🧴", text: "Desinfecta el fregadero" },
    ],
  },

  {
    type: 2,
    id: 13,
    title: "Batido de frutas",
    date: "07/01/2026",
    time: "5 min",
    difficulty: "Fácil",
    imageUrl: require("../assets/images/batido.png"),
  },

  {
    type: 3,
    id: 14,
    title: "Viaje",
    date: "08/01/2026",
    list: [
      { id: 1, checkBox: false, text: "Pasaporte" },
      { id: 2, checkBox: false, text: "Cargador" },
      { id: 3, checkBox: false, text: "Ropa" },
    ],
  },

  {
    type: 4,
    id: 15,
    title: "Meta del mes",
    date: "01/01/2026",
    text: "Ahorrar un 20% del sueldo.",
  },

  {
    type: 1,
    id: 16,
    title: "Dormitorio",
    date: "09/01/2026",
    iconList: [
      { id: 1, icon: "🛏️", text: "Cambiar sábanas" },
      { id: 2, icon: "🪟", text: "Abrir ventanas" },
      { id: 3, icon: "🧺", text: "Ordenar ropa" },
    ],
  },

  {
    type: 2,
    id: 17,
    title: "Sándwich mixto",
    date: "10/01/2026",
    time: "6 min",
    difficulty: "Fácil",
    imageUrl: require("../assets/images/sandwich.png"),
  },

  {
    type: 3,
    id: 18,
    title: "Películas por ver",
    date: "11/01/2026",
    list: [
      { id: 1, checkBox: false, text: "Inception" },
      { id: 2, checkBox: false, text: "Interstellar" },
      { id: 3, checkBox: true, text: "Matrix" },
    ],
  },

  {
    type: 4,
    id: 19,
    title: "Frase",
    date: "12/01/2026",
    text: "La constancia vence al talento.",
  },

  {
    type: 1,
    id: 20,
    title: "Baño",
    date: "13/01/2026",
    iconList: [
      { id: 1, icon: "🚿", text: "Limpia la ducha" },
      { id: 2, icon: "🪥", text: "Ordena el lavabo" },
      { id: 3, icon: "🧻", text: "Revisa papel higiénico" },
    ],
  },

  {
    type: 2,
    id: 21,
    title: "Huevos revueltos",
    date: "14/01/2026",
    time: "7 min",
    difficulty: "Fácil",
    imageUrl: require("../assets/images/huevos.png"),
  },

  {
    type: 3,
    id: 22,
    title: "Compras online",
    date: "15/01/2026",
    list: [
      { id: 1, checkBox: false, text: "Auriculares" },
      { id: 2, checkBox: false, text: "Funda móvil" },
    ],
  },

  {
    type: 4,
    id: 23,
    title: "Notas del trabajo",
    date: "16/01/2026",
    text: "Preparar presentación para el lunes.",
  },

  {
    type: 1,
    id: 24,
    title: "Consejos rápidos",
    date: "17/01/2026",
    iconList: [
      { id: 1, icon: "⏰", text: "Organiza tu día la noche anterior" },
      { id: 2, icon: "📦", text: "Guarda lo que no uses" },
    ],
  },

  {
    type: 4,
    id: 25,
    title: "Ideas",
    date: "18/01/2026",
    text: "Añadir modo oscuro a la app.",
  },
]
