import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoContador.css';

function TodoContador() {
    const {
      todosTotales,
      todosCompletados
    } = React.useContext(TodoContext);
    return (
      <h1>
        Has Completado <span>{todosCompletados}</span> de <span>{todosTotales}</span> TODOS
      </h1>
    );
  }

  export { TodoContador };