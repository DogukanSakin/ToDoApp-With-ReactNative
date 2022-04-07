import React from 'react';
import { View,Text,TextInput } from 'react-native';
import styles from './Header.style';
const Header = (props) =>
{
 
    return(
        <View>
            <View style={styles.innerContainer}>
                <Text style={styles.appTitle}>MY TO DO LIST</Text>
                <Text style={styles.counterText}>{props.taskCounter}</Text>
            </View>
           
        </View>

    )
}
export default Header;