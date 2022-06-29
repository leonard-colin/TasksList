import React, {useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {deleteTask, toggleTask} from '../../redux/actions';
import {getTasks} from '../../redux/selectors';
import Header from '../../components/Header';
import TaskForm from './TaskForm';
import TaskTile from './TaskTile';
import FloatingBtn from '../../components/FloatingBtn';
import Counter from '../../components/Counter';

export default function TasksScreen() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  // Liste de tâches
  // State pour garder en mémoire les tâches.
  // const [tasks, setTasks] = useState([])

  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  // item = {title: "Hello world!", isCompleted: false}
  const renderItem = ({item}) => {
    return (
      <TaskTile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };

  // TIPS: asyncStorage si on veut garder l'état dans la mémoire du téléphone

  // // Ajouter une fonction pour ajouter une tâche au state
  // // Passer cette fonction à notre formulaire
  // const onAddTask = (title) => {
  //   setTasks([...tasks, {
  //     id: Date.now(),
  //     title,
  //     isCompleted: false
  //   }])
  // }

  const onUpdateTask = id => {
    dispatch(toggleTask(id));
  };

  const onDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const _toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // 2x TasksCounter => props nb & title
  // TasksList => return FlatList => TaskTile

  // Ajouter un bouton flottant => style absolute
  // / callback => rendu conditionnel Taskform
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm />}
            <View style={styles.container}>
              <Counter nb={tasks.length} title="Tâches crées" />
              <Counter
                nb={tasks.filter(t => t.isCompleted === true).length}
                title="Tâches complétées"
              />
            </View>
          </>
        }
        contentContainerStyle={{flex: 1}}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
