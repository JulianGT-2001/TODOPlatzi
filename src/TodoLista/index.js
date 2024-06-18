import './TodoLista.css';

function TodoLista({ children }) {
    return (
      <ul>
        {children}
      </ul>
    );
  }

export { TodoLista };