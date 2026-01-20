import { StyleSheet, Text, View } from 'react-native';

export default function Finance() {
  return (
      <View style={styles.container}>
        <Text>Tab finanzas</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

