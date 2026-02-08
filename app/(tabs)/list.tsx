import Notes from '@/components/notes';
import { NOTAS_DATA } from '@/constants/data';
import { useTheme } from '@/context/themeContext';
import { createGlobalStyles } from '@/styles/global-styles';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, TextInput } from 'react-native';

export default function List() {
  const [search, setSearch] = useState('');
  const filterNotes = NOTAS_DATA.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const navigation = useNavigation();

  const { colors } = useTheme();
  const globalStyles = createGlobalStyles(colors);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TextInput placeholder="Buscar..."
          placeholderTextColor={colors.textSecondary}
          value={search}
          onChangeText={setSearch}
          style={globalStyles.headerSearch}
        />
      ),
    });
  }, [search, navigation, colors]);

  return (                                                                                
      <FlatList data={filterNotes} renderItem={({item}) => <Notes{...item}/> }
        //extraer el id a tex por react (evitar comportamientos raros como si ide fura 0 que en js = false)
        keyExtractor={item=>item.id.toString()} 
        style={{ backgroundColor: colors.background }}
      />
  );
}
