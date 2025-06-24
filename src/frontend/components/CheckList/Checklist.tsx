import React, { useState, useEffect } from 'react';
import { Checkbox, Input, Button, message } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  ChecklistWrapper,
  ChecklistHeader,
  TaskList,
  TaskItem,
  AddTaskSection,
  TaskActions,
  EmptyState
} from './CheckListStyle';
import Header from '../Header/Header';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const Checklist: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('preparationTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
    localStorage.setItem('preparationTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTaskText.trim()) {
      message.warning('Please enter a task');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      completed: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
    message.success('Task added successfully');
  };

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    message.success('Task deleted successfully');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <ChecklistWrapper>
      <Header title="Preparation Checklist" />
      
      <AddTaskSection>
        <Input
          placeholder="Add a new task..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={addTask}
        >
          Add Task
        </Button>
      </AddTaskSection>

      <TaskList>
        {tasks.length === 0 ? (
          <EmptyState>
            No tasks yet. Add some tasks to track your preparation!
          </EmptyState>
        ) : (
          tasks.map(task => (
            <TaskItem key={task.id} completed={task.completed}>
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              >
                {task.text}
              </Checkbox>
              <TaskActions>
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => deleteTask(task.id)}
                  aria-label="Delete task"
                />
              </TaskActions>
            </TaskItem>
          ))
        )}
      </TaskList>
    </ChecklistWrapper>
  );
};

export default Checklist;
