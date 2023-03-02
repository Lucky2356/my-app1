import React from 'react';
import './App.css';
import MyName from "./components/MyName/MyName";
import Counter from "./components/Counter/Counter";
import ToDoList from "./components/ToDoList/ToDoList";



function App() {
    return (
        <div className="App">
            {/*<Counter/>*/}
            <ToDoList/>
        </div>
    );
}

export default App;
