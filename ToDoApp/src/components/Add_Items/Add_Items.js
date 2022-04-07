import React from 'react';
import { View,TextInput,TouchableHighlight,Text } from 'react-native';
import styles from './Add_Items.style';
const AddItem = (props) =>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.addItemInput} value={props.value} onChangeText={props.onChangeText} placeholder='Add a task to your to do list...' placeholderTextColor='#d1d0cf'></TextInput>
            <TouchableHighlight onPress={props.onPress} style={styles.addItemButton}><Text style={styles.addItemButtonText}>Add</Text></TouchableHighlight>
        </View>

    )
}
export default AddItem;