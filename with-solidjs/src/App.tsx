import type { Component } from 'solid-js';

import styles from './App.module.css';
const handleClick = () => {
  (window as any)["trackdesk"]?.("robocop", "conversion", {
    "conversionType": "sale"
  });
}

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
        A click is tracked if the source ID is in the URL.
        </p>
        <button
          class={styles.link}
          onClick={handleClick}
        >
          Track a conversion
        </button>
      </header>
    </div>
  );
};

export default App;
