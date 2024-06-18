import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext =  React.createContext();

function TodoProvider({ children }) 
{
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [abrirModal, setAbrirModal] = React.useState(false);

  const todosCompletados = todos.filter(todo => !!todo.completed).length;
  const todosTotales = todos.length;

  const todosFiltrados = todos.filter((todo) => {
    const textoTodo = todo.text.toLowerCase();
    const textoBuscado = searchValue.toLowerCase();
    return textoTodo.includes(textoBuscado);
  });

  const agregarTodo = (texto) => {
    const todosNuevos = [...todos];
    console.log(texto);
    todosNuevos.push({
      text: texto,
      completed: false
    })
    console.log(todosNuevos);
    saveTodos(todosNuevos);
  };

  const todoCompletado = (texto) => {
    const todosNuevos = [...todos];
    const todoIndex = todosNuevos.findIndex(
      (todo) => todo.text === texto
    );
    todosNuevos[todoIndex].completed = true;
    saveTodos(todosNuevos);
  }

  const todoEliminado= (texto) => {
    const todosNuevos = [...todos];
    const todoIndex = todosNuevos.findIndex(
      (todo) => todo.text === texto
    );
    todosNuevos.splice(todoIndex, 1);
    saveTodos(todosNuevos);
  }

    return(
        <TodoContext.Provider value={{
            todosCompletados, 
            todosTotales, 
            searchValue, 
            setSearchValue, 
            todosFiltrados, 
            todoCompletado, 
            todoEliminado, 
            loading, 
            error,
            abrirModal,
            setAbrirModal,
            agregarTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };

// const defaultTodos = [
//   {
//     text: 'Cortar cebolla',
//     completed: false
//   },
//   {
//     text: 'Ver una pelicula',
//     completed: true
//   },
//   {
//     text: 'Lavar la loza',
//     completed: true
//   }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');