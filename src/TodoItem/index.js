import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css';

function TodoItem({ texto, completado, onComplete, onDelete }) {
    return (
      <li className='TodoItem'>
        <CompleteIcon completed={completado} onComplete={onComplete}/>
        <p className={`TodoItem-p ${completado && 'TodoItem-p--complete'}`}>{ texto }</p>
        <DeleteIcon onDelete={onDelete}/>
      </li>
    );
}

export { TodoItem };