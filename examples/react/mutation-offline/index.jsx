import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';

import { createMutation } from 'floppy-disk';

const createUser = async ({ name, role }) => {
  const res = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, role }),
    mode: 'cors',
  });
  const resJson = await res.json();
  if (res.ok) return resJson;
  throw resJson;
};

const mutationQueue = [];

const resumeMutation = () => {
  if (mutationQueue.length) {
    useCreateUserMutation.get().mutate(mutationQueue[0]);
  } else {
    window.removeEventListener('online', resumeMutation);
  }
};

const useCreateUserMutation = createMutation(
  ({ offlineQueue, ...variables }) => {
    if (!navigator.onLine) {
      if (!offlineQueue) mutationQueue.push({ ...variables, offlineQueue: true });
      window.addEventListener('online', resumeMutation);
      return Promise.reject('offline');
    }
    return createUser(variables);
  },
  {
    onSuccess: (response, variables) => {
      if (variables.offlineQueue) {
        mutationQueue.shift();
        resumeMutation();
      }
    },
    onError: (error, variables) => {
      if (variables.offlineQueue && error !== 'offline') {
        mutationQueue.shift();
        resumeMutation();
      }
    },
  },
);

function App() {
  const { mutate, isWaiting, error } = useCreateUserMutation();
  const nameRef = useRef();
  const roleRef = useRef();

  return (
    <main>
      <h1>💾 Floppy Disk - Offline Mutation</h1>

      <input type="text" ref={nameRef} placeholder="Name" />
      <input type="text" ref={roleRef} placeholder="Role" />
      <div>Error: {JSON.stringify(error)}</div>

      <button
        disabled={isWaiting}
        onClick={() => {
          mutate({ name: nameRef.current.value, role: roleRef.current.value }).then(
            ({ response, error }) => {
              console.log('Mutated!', response, error);
            },
          );
        }}
      >
        Create User {isWaiting && '⏳'}
      </button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
