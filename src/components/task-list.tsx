import { Box, Center, FlatList } from 'native-base'
import React, { useCallback, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { PanGestureHandlerProps, TouchableWithoutFeedback } from 'react-native-gesture-handler'

import TaskItem from './task-item'

interface TaskItemData {
    id: string
    subject: string
    done: boolean
}
interface TaskListProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
    initialData: Array<TaskItemData>
  }
  const initialData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      subject: 'First Item',
      done: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      subject: 'Second Item',
      done: true,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      subject: 'Third Item',
      done: false,
    },
  ];
export default function TaskList() {
      
  const [data, setData] = useState(initialData);
    const renderItem = ({ item }: any) => (
        
        <TouchableWithoutFeedback onPress={() =>{
            setData(prevData => {
                const newData = [...prevData]
                const index = prevData.findIndex(rec => rec.id === item.id);
                newData[index] = {
                  ...item,
                  done: !item.done
                }
                return newData
              })
        }}>
        <TaskItem  key={item.id} subject={item.subject} isDone={item.done} />
        </TouchableWithoutFeedback>
    );

    return (
        <Box
            flex={1}>
            <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </Box>
    );
}