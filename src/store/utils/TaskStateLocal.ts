import { initialStateInterface } from "../TaskSlice/Task";

export const initialState: initialStateInterface = {
  tasks: [
    {
      id: "1",
      title: "Limpiar la casa",
      description: "Limpiar la casa de arriba abajo",
      complete: false,
      time: "1 hora",
      category: "Hogar",
    },

    {
      id: "3",
      title: "Hacer ejercicio",
      description: "Hacer ejercicio en el gimnasio por 1 hora",
      complete: false,
      time: 60,
      category: "Hogar",
    },
    {
      id: "4",
      title: "Trabajar en proyecto",
      description: "Trabajar en el proyecto de la empresa por 4 horas",
      complete: false,
      time: 240,
      category: "Hogar",
    },

    {
      id: "6",
      title: "Leer un libro",
      description: "Leer un libro durante 2 horas antes de dormir",
      complete: false,
      time: 120,
      category: "Entretenimiento",
    },
    {
      id: "7",
      title: "Ver una película",
      description: "Ver una película en el cine",
      complete: false,
      time: "2 horas",
      category: "Entretenimiento",
    },
    {
      id: "8",
      title: "Jugar videojuegos",
      description: "Jugar videojuegos por 3 horas",
      complete: false,
      time: 180,
      category: "Entretenimiento",
    },
    {
      id: "9",
      title: "Salir con amigos",
      description: "Salir con amigos a tomar un café",
      complete: false,
      time: "1 hora",
      category: "Relajación",
    },
    {
      id: "10",
      title: "Meditar",
      description: "Meditar por 30 minutos para relajarse",
      complete: false,
      time: 30,
      category: "Relajación",
    },
  ],
  categories: ["Hogar", "Entretenimiento", "Relajación"],
  categorySelected: "",
  pop: false,
};
