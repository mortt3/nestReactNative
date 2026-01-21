import { Color } from '@/constants/color';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Text, View } from 'react-native';

interface ListItem {
    id: number;
    checkBox: boolean;
    text: string;
}
export default function CheckboxRow({ item }: { item: ListItem }) {
    const [isChecked, setChecked] = useState(item.checkBox);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? Color.secondary : undefined}
            />
            <Text> {item.text} </Text>
        </View>
    );
}
