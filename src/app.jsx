import ReactDOM from 'react-dom/client'
import React from 'react';

function App() {
    return <h1>Hello React!</h1>
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<App />);