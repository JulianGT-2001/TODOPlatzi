import { TodoContador } from '../TodoContador';
import { TodoBusqueda } from '../TodoBusqueda';
import { TodoLista } from '../TodoLista';
import { TodoItem } from '../TodoItem';
import { TodoBotonCrear } from '../TodoBotonCrear';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import React from 'react';

function AppUI() 
{
    const {
        loading,
        error,
        todosFiltrados,
        todoCompletado,
        todoEliminado,
        abrirModal
    } = React.useContext(TodoContext);

    return (<>

        <TodoContador />
        <TodoBusqueda />

        <TodoLista>
            {loading && (
                <>
                    <TodoLoading />
                    <TodoLoading />
                    <TodoLoading />
                </>
            )}
            {error && <TodoError/>}
            {(!loading && todosFiltrados.length === 0) && <TodoEmpty/>}
            {todosFiltrados.map(todo => (
                <TodoItem key={todo.text} texto={todo.text} completado={todo.completed} onComplete={() => {todoCompletado(todo.text)}} onDelete={() => {todoEliminado(todo.text)}}/>
            ))}
            {/* {defaultTodos.map(todo => (
                <TodoItem key={todo.text} texto={todo.text} completado={todo.completed} />
            ))} */}
        </TodoLista>

        <TodoBotonCrear />

        {abrirModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
    </>)
}

export { AppUI };