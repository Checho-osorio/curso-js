import './styles.css';

import { Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';

 export const todoList = new TodoList();

 todoList.todos.forEach( crearTodoHtml ); // esto es igual a todo => crearTodoHtml( todo )  cuando solo recibe un parametro

 console.log('todos: ', todoList.todos);

