import React, { useContext } from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/Cart.Context';
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';

const Payment = () => {
    const { products, increase, decrease, delProduct } = useContext(CartContext);
    const Card = ({ x }) => {
        let a = parseFloat(x.price.split('').slice(1).join(''));
        let b = a*x.quantity;
        let price ='£' + b.toFixed(2);
        return (
            <View style={styles.card}>
                <Image source={{uri: x.image}} style={{width: 90, height: 90}} />
                <Text style={{color: '#248f17', fontWeight: 'bold'}}>{x.name}</Text>
                <View>
                    <View style={{displya: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => decrease(x)} activeOpacity={0.5} style={{width: 20, height: 20}}><Image source={minus} style={{width: "100%", height: "100%"}}/></TouchableOpacity>
                        <Text style={{color: '#888'}}>{x.quantity}</Text>
                        <TouchableOpacity onPress={() => increase(x)} activeOpacity={0.5} style={{width: 20, height: 20}}><Image source={plus} style={{width: "100%", height: "100%"}}/></TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 11, color: '#CCC'}}>{price}</Text>
                </View>
            </View>
        )
    }
    return <View style={styles.container}>
        {products.length > 0 ?
            <FlatList data={products} renderItem={({ item }) => <Card x={item} />} keyExtractor={(item) => `${item._id}`} />
            : <Text>None</Text>
        }
    </View>
}
const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        paddingHorizontal: 8,
        flex: 1,
    },
    card: {
        width: '100%',
        backgroundColor: '#FFF',
        paddingVertical: 8,
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    }
})
export default Payment;