import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const Category = ({ img, text }) => {
    return <View style={styles.Category}>
        <Image style={styles.CategoryImage} source={img} />
        <Text>{text}</Text>
    </View>
}
export default Category;

const styles = StyleSheet.create({
    Category: {
        display: 'flex',
        width:'100%',
        height: 150, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#EEE',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        marginBottom: 16
    },
    CategoryImage: {
        width: 64,
        height: 64,
        marginRight: 16
    }
})