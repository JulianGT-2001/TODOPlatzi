import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoBusqueda.css';

function TodoBusqueda() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    return (
      <input type='text' placeholder="Hacer el almuerzo"
        value={searchValue} 
        onChange={(event) => {
          setSearchValue(event.target.value);
      }}/>
    );
}

export { TodoBusqueda };