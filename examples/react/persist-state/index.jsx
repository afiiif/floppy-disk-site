import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'floppy-disk';

function App() {
  return (
    <main>
      <h1>💾 Floppy Disk - Persist State</h1>
      <CatAge />
      <CatIsSleeping />
      <CatControl />
      <GetOrSetOutsideComponent />
    </main>
  );
}

const useCatStore = createStore(
  ({ set }) => {
    let savedValue = {};
    try {
      const savedValueString = localStorage.getItem('cat-store');
      // Validate the saved value if necessary, then..
      savedValue = JSON.parse(savedValueString);
    } catch {
      // No saved value, or invalid saved value
    }

    return {
      age: 0,
      isSleeping: false,
      increaseAge: () => set((state) => ({ age: state.age + 1 })),
      reset: () => set({ age: 0, isSleeping: false }),
      ...savedValue,
    };
  },
  {
    intercept: (nextState) => {
      // Save to localStorage whenever state changes
      localStorage.setItem('cat-store', JSON.stringify(nextState));
      return nextState;
    },
  },
);

function CatAge() {
  const { age } = useCatStore((state) => [state.age]);
  return <p>Cat's age: {age}</p>;
}

function CatIsSleeping() {
  const { isSleeping } = useCatStore((state) => [state.isSleeping]);
  return <p>Is sleeping: {String(isSleeping)}</p>;
}

function CatControl() {
  const { increaseAge } = useCatStore(() => []);
  return <button onClick={increaseAge}>Increase cat's age</button>;
}

function GetOrSetOutsideComponent() {
  return (
    <>
      <button onClick={() => useCatStore.set((prev) => ({ isSleeping: !prev.isSleeping }))}>
        Toggle isSleeping
      </button>
      <button
        onClick={() => {
          const catStore = useCatStore.get();
          alert(JSON.stringify(catStore, null, 2));
        }}
      >
        Get value
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
