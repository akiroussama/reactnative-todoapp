import { View, Text } from 'react-native';
import { Center, Box } from 'native-base';
import React, { useCallback, useState } from 'react';
import TaskItem from '../components/task-item';

export default function MainScreen() {
  const [checked, setChecked] = useState(false);
  const [subject, setSubject] = useState('task item');
  const handleToggleCheckbox = useCallback(() => {
  }, [])
  return (
    <Center

      flex={1}>
      <Box>
        <Text>main-screen</Text>
        <TaskItem isDone={checked} onToggleCheckbox={handleToggleCheckbox}
          subject={subject}></TaskItem>
        <TaskItem isDone={checked} onToggleCheckbox={handleToggleCheckbox} subject={subject}></TaskItem>
        <TaskItem isDone={checked} onToggleCheckbox={handleToggleCheckbox} subject={subject}></TaskItem>
      </Box>
    </Center>
  )
}