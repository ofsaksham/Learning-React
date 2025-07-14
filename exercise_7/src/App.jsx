// Coding Exercise 12: Dynamic List Content

import React from 'react';

import Todo from './todo';


export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];


export default function App() {
  return DUMMY_TODOS.map(todo => <Todo text={todo} />)
}
