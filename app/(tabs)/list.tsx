import Notes from '@/components/notes';
import { ScrollView } from 'react-native';

const nota = [
  { id: 1, title: "Pasta ráida", date: "2/3/2025", time: "15 min", difficulty: "Facil", image: '../assets/images/ensalada.png' },
  { id: 2, title: "Ensalada fresca", date: "19/5/2025", time: "10 min", difficulty: "Dificil" },
  { id: 3, title: "Sopa de verduras", date: "10/1/2025", time: "25 min", difficulty: "Facil" },
  { id: 4, title: "Arroz con pollo", date: "15/2/2025", time: "40 min", difficulty: "Media" },
  { id: 5, title: "Tortilla española", date: "8/3/2025", time: "20 min", difficulty: "Facil" },
  { id: 6, title: "Hamburguesa casera", date: "22/4/2025", time: "30 min", difficulty: "Media" },
  { id: 7, title: "Pizza margarita", date: "5/5/2025", time: "50 min", difficulty: "Dificil" },
  { id: 8, title: "Pescado al horno", date: "12/6/2025", time: "35 min", difficulty: "Media" },
  { id: 9, title: "Crema de calabaza", date: "18/7/2025", time: "30 min", difficulty: "Facil" },
  { id: 10, title: "Tacos de carne", date: "2/8/2025", time: "25 min", difficulty: "Media" },
  { id: 11, title: "Pollo al curry", date: "14/9/2025", time: "45 min", difficulty: "Dificil" },
  { id: 12, title: "Brownies de chocolate", date: "30/10/2025", time: "35 min", difficulty: "Facil" }

]
  ;

export default function List() {
  return (
    <ScrollView>
      {
        nota.map((item) => (
          <Notes key={item.id} {...item} />
        ))
      }
    </ScrollView >
  );
}