import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class ContentHeader extends PureComponent {

    inputChanged(event) {
        event.preventDefault();
        let text = this.refs.newTodoText.value;
        if (text) {
            this.props.createNewTodo(text);
            this.refs.newTodoText.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.inputChanged.bind(this)}>
                <input type="text" placeholder="What do you want to do?" ref="newTodoText" />
                <button type="submit">Submit</button >
            </form >
        )
    }
}

const TodoRow = ({ content, isChecked }) => (
    <div >
        <input type="checkbox" checked={isChecked} onChange={function () {
            console.log('change!')
        }} />
        <span >{content}</span >
    </div >
);

const TodosList = ({ todosList }) => (
    <div >
        {
            todosList && todosList.map(function (item, index) {
                return <TodoRow content={item.content} isChecked={item.isChecked} key={index} />
            })
        }
    </div >
);


class TodoApp extends PureComponent {
    constructor() {
        super();
        this.state = {
            todoItems: [],
        }
    }

    createNewTodo(text){
        debugger;
        this.state.todoItems.push({
            content: text,
            isChecked: false,
        });
        console.log(this.state);
        this.setState({todoItems: this.state.todoItems});

    }

    render() {
        const defaultTodos = [
            {
                content: 'yarin needs to learn react',
                isChecked: false,
            },
            {
                content: 'yarin needs to calm down',
                isChecked: false,
            },
            {
                content: 'yarin needs to create GOOD toDo list',
                isChecked: false,
            },
            {
                content: 'yarin needs to schedule interview',
                isChecked: true,
            },
        ];
        return (
            <div >
                <ContentHeader createNewTodo={this.createNewTodo.bind(this)}/>
                <TodosList todosList={this.state.todoItems.todoItems} />
                {console.log(this.state.todoItems)}
            </div >
        );
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('todoApp'),
);