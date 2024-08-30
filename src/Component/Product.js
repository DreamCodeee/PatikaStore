import React from "react";
import { Image, Text, View } from "react-native";
import styles from'./Product_style';

const productCard = ({product}) => {
    return(
        <View style = {styles.inner_container}>
            <Image style={styles.image} source={{uri : product.imgURL}}/>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            {product.inStock==false ? <Text style={styles.stock}>STOKTA YOK</Text> : ""}
        </View>
    )
}

export default productCard;