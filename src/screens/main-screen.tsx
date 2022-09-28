import { View, Text } from 'react-native';
import { Center, Box } from 'native-base';
import React, { useCallback, useState } from 'react';
import TaskItem from '../components/task-item';
import TaskList from '../components/task-list';

export default function MainScreen() {
  const [checked, setChecked] = useState(false);
  const [subject, setSubject] = useState('task item');
 
  return (
    <Center

      flex={1}>
      <Box>
        <Text>main-screen</Text>
        <TaskList/>
        {/* <TaskItem isDone={checked} onToggleCheckbox={handleToggleCheckbox}
          subject={subject}></TaskItem>
        <TaskItem isDone={checked} onToggleCheckbox={handleToggleCheckbox} subject={subject}></TaskItem>
        <TaskItem isDone={checked} onToggleCheckbox={handleToggleCheckbox} subject={subject}></TaskItem> */}
      </Box>
    </Center>
  )
}