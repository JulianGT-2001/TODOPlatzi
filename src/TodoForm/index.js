import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm()
{
    const {
        setAbrirModal,
        agregarTodo
    } = React.useContext(TodoContext);
    
    const [todoNuevo, setTodoNuevo] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        agregarTodo(todoNuevo);
        setAbrirModal(false);
    };

    const onCancel = () => {
        setAbrirModal(false);
    };

    const onChange = (event) => {
        setTodoNuevo(event.target.value);
    };

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <h1 className="TodoForm-titulo">Escribe tu nuevo TODO</h1>
            <textarea className="TodoForm-textArea" placeholder='Hacer los trabajos de la universidad' value={todoNuevo} onChange={onChange}/>
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button TodoForm-button--cancel' type="button" onClick={onCancel}>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add' type="submit">Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm };