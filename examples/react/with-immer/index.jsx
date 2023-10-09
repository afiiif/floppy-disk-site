import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'floppy-disk';
import { produce } from 'immer';

const useTodoStore = createStore(({ set }) => ({
  todos: [
    { title: 'Learn JavaScript', done: true },
    { title: 'Try Immer', done: false },
  ],
  toggleTodo: (index) => {
    set(
      produce(({ todos }) => {
        todos[index].done = !todos[index].done;
      }),
    );
  },
}));

function App() {
  const { todos, toggleTodo } = useTodoStore();
  return (
    <main>
      <h1>💾 Floppy Disk - With Immer</h1>
      <ul>
        {todos.map((todo, i) => (
          <li key={todo.title}>
            <span>{todo.title}</span>
            <input type="checkbox" checked={todo.done} readOnly />
            <button onClick={() => toggleTodo(i)}>Toggle</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
