import React,{useState} from 'react';
import {View,StyleSheet,FlatList,Alert } from 'react-native';
import Header from './components/Header';
import ListItems from './components/List_Items';
import AddItem from './components/Add_Items';



const App = () =>{

  const[toDoList,setToDoList] = useState([]);
  const[taskInputText,setTaskInputText]=useState('');
  const[taskCounter,setCounter]=useState(toDoList.filter((todo) => !todo.completed).length);
  const renderToDoList=({item}) => <ListItems items={item} onLongPress={()=>removeTask(item.id,item.completed)} completed={item.completed}></ListItems>;
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header taskCounter={taskCounter}/>
      </View>
      <View style={styles.listItems}>
        <FlatList data={toDoList}
        renderItem={renderToDoList}>
        </FlatList>
      </View>
        <AddItem onPress={addTask} onChangeText={(text)=>setTaskInputText(text)} value={taskInputText}/>
    </View>

  )

  //Add button function:
  function addTask(){
    const checkDublicateTask=toDoList.find(list=>list.title===taskInputText);
    if(taskInputText==''){
      Alert.alert('Task cannot be empty!');
    }
    else if(checkDublicateTask){
      Alert.alert('This task is already added to your list!');
    }
    else{
      taskInputText.trim();
      console.log(taskInputText);
      const newTask={
        id:toDoList.length+1,
        title:taskInputText,
        completed:false
      }
      setToDoList(toDoList=>[...toDoList,newTask]);
      setTaskInputText('');
    }
    
 
  }

  //Item long press function:
  function removeTask(id,completed){
    if(!completed){
      //First long press checks. Here the task is completed and the task is crossed out.
      const taskIndex=toDoList.findIndex((task => task.id == id))
      toDoList[taskIndex].completed=true;
      setCounter(toDoList.filter((todo) => !todo.completed).length);
    }
    else{
      //The completed task is completely deleted from the list with this long press.
      setToDoList(toDoList.filter(index=> index.id !== id));
   

    }
    

  }

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#1c1b18',
    flex:1,
    padding:10
  },
  header:{
    marginBottom:10,
    
  },
  listItems:{
    marginBottom:10,
    flex:1
  },
 
});
export default App;