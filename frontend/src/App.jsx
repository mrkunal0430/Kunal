import React from "react";

// Import components for fetch and axios versions

import TodoAxios from './TodoAxios';

function App() {
  return (
    <div>


      {/* Section using Axios */}
      <h1>Todo App</h1>
      <TodoAxios />
    </div>
  );
}

export default App;

