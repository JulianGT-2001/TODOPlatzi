import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoBotonCrear.css';

function TodoBotonCrear() {
  const { setAbrirModal } = React.useContext(TodoContext);
    return (
      <button className="ButtonCrear" onClick={() => {
        setAbrirModal(state => !state);
      }}>+</button>
    );
  }

export { TodoBotonCrear };