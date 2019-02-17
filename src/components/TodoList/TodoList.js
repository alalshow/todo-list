import React, {Component} from 'react';
import TodoItem from '../TodoItem';

export default class TodoList extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map( todo => 
            <TodoItem 
                key={todo.id}
                done={todo.done}
                onRemove={()=> onRemove(todo.id)}
                onToggle={()=> onToggle(todo.id)}> 
                {todo.text} 
            </TodoItem>
        );
        return(
            <div> 
                {todoList}
            </div>
        )
    }
}