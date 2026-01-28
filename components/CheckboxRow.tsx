import { useTheme } from '@/context/themeContext';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

import { Text, View } from 'react-native';

interface ListItem {
    id: number;
    checkBox: boolean;
    text: string;
}
export default function CheckboxRow({ item }: { item: ListItem }) {
    const { colors } = useTheme();
    const [isChecked, setChecked] = useState(item.checkBox);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? colors.secondary : undefined}
            />
            <Text style={{ color: colors.textPrimary }}> {item.text} </Text>
        </View>
    );
} 
