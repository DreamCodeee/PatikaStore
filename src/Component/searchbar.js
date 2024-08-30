import React from "react";
import { SafeAreaView, TextInput } from "react-native";

import styles from "./searchbar_style";

const SearchBar = () => {
    return (
        <TextInput placeholder = "Ara..." style = {styles.searchArea}/>
    ) 
}

export default SearchBar;