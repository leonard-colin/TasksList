import React, {useState} from 'react'
import { Text, FlatList } from 'react-native'

import Header from '../../components/Header'
import TaskForm from './TaskForm'
import TaskTile from './TaskTile'

export default function TasksScreen() {
  // Liste de tâches
  // State pour garder en mémoire les tâches.
  const [tasks, setTasks] = useState([
    {title: "Hello world!", isCompleted: false},
    {title: "Once again, Hello! ", isCompleted: false}
  ])

  // item = {title: "Hello world!", isCompleted: false}
  const renderItem = ({item}) => {
    return <TaskTile task={item}/>
  }
  // asyncStorage si on veut garder l'état dans la mémoire du téléphone
 
  // 2 TasksCounter => props nb & title
  // TasksList => return FlatList => TaskTile
  return (
    <FlatList
      ListHeaderComponent={
        <>
        <Header />
        <TaskForm /> 
        </>
    }
      contentContainerStyle={{flex:1}}
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  )
}
