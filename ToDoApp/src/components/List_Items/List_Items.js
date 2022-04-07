import React from 'react';
import { View,Text,TouchableWithoutFeedback } from 'react-native';
import styles from './List_Items.style';
const ListItems = (props) =>{
    return(
       props.completed ?

       <View style={styles.completedContainer}>
            <TouchableWithoutFeedback onLongPress={props.onLongPress}>
                <Text style={styles.completedText}>{props.items.title}</Text>    
            </TouchableWithoutFeedback>
       </View> 
        : 
        <View style={styles.container}>
            <TouchableWithoutFeedback onLongPress={props.onLongPress}>
                <Text style={styles.itemText}>{props.items.title}</Text>   
            </TouchableWithoutFeedback>
        </View>
        

    )
}
export default ListItems;