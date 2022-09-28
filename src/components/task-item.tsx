import React from 'react'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import { Text } from 'react-native'
import {
  Box, HStack, Pressable,
} from 'native-base'

interface Props {
  isDone: boolean,
  onToggleCheckbox?:()=> void
}

const TaskItem = (props: Props) => {
  const { isDone,  onToggleCheckbox} = props

  return (<HStack>
  <Box width={30} height={30} mr={2}>
    <Pressable onPress={onToggleCheckbox}>
      <AnimatedCheckbox
        highlightColor="#4444ff"
        checkmarkColor="#ffffff"
        boxOutlineColor="#4444ff"
        checked={isDone}
      />
    </Pressable>
  </Box>
  <Text>Task item</Text>
  </HStack>)

}

export default TaskItem