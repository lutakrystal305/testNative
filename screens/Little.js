import React, { useState, useEffect, useContext } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { CartContext } from '../context/Cart.Context';

export default Little = ({ route }) => {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get('https://amber-api.herokuapp.com/products?page=1')
            .then((res) => {
                if (res.data) {
                    setProducts(res.data.products);
                    setLoading(false);
                }
            })
    },[]);
    const Product = ({ x }) => {
        return <View style={styles.wrapper}>
            <View style={styles.cart}>
                <Image  style={{width: 120, height: 120, marginLeft: 'auto', marginRight: 'auto'}} source={{ uri: x.image }} />
                <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10, paddingLeft: 5}}>{x.name}</Text>
                <View style={{marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: 5}}>
                    <Text>Price: {x.price}</Text>
                    <Button onPress={() => addToCart(x)} color="#f194ff" title="Add" ></Button>
                </View>
            </View>
        </View>
    }
    return <View style={styles.container}>
        {products.length > 0 ?
            <FlatList 
            data={products}
            numColumns={2}
            renderItem={({ item }) => <Product x={item} />}
            keyExtractor={item => `${item._id}`}
            />
            : <ActivityIndicator size='large' color='#00ff00' />
        }
    </View>
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    },
    cart: {
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        overflow: 'hidden'
    }
})