import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { conditions } from '../weaherCondition';

const Screen = ({ weather, temperature }) => {
    const condition = conditions[weather];
    const styles = useStyles({
        backgroundColor:condition.bgColor,
        color: condition.color
    });
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <MaterialCommunityIcons name={condition.icon} size={60} color={condition.color} />
                <Text style={styles.title}>{temperature}°</Text>
            </View>
            <View style={styles.tail}>
                <Text style={styles.title}>{weather}</Text>
                <Text style={styles.subtitle}>{condition.subtitle}</Text>
            </View>
        </View>
    );
}

const useStyles = ({backgroundColor,color}) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor
    },
    head: {
        alignItems: 'center'
    },
    tail: {
        alignSelf: 'flex-start'
    },
    title: {
        fontSize: 56,
        color
    },
    subtitle: {
        fontSize: 24,
        opacity: 0.8,
        color
    },
});
 
export default Screen;