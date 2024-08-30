import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from './Component/Product';
import SearchBar from './Component/searchbar';
import Product_Data from './patika.json';

function App () {

  interface key {
    id:number;
  }

const keyExtractor = (item:key)=>item.id.toString();


  return(
    <View>
      
      <FlatList
      ListHeaderComponent={
        <View>
          <Text style = {styles.header}>PATIKASTORE</Text>
          <SearchBar/>
        </View>
      }
        data={Product_Data}
        renderItem={({item}) => {
          if (item.id === "last") {
            return (
              <View style={styles.last_child}>
                <ProductCard product={item} />
              </View>
            );
          } else {
            return (
              <ProductCard product={item} />
            );
          }
        }}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  last_child:{
    marginBottom:10,
  },
  header:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    color:"purple"
  }
})

export default App;