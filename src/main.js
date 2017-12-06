import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, FormControl, FormGroup } from 'react-bootstrap';

class ContentHeader extends PureComponent {

    inputChanged(event) {
        event.preventDefault();
        debugger;
        let text = this.inputNode.value;
        if (text) {
            this.props.createNewTodo(text);
            this.inputNode.value = '';
        }
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">To Do List</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <form onSubmit={this.inputChanged.bind(this)}>
                    <FormGroup>
                        <FormControl type="text" placeholder="What do you want to do?"
                                     inputRef={node => this.inputNode = node} />
                        <Button type="submit">Submit</Button>
                    </FormGroup>
                </form>
            </Navbar>
        );
    }
}

class TodoRow extends PureComponent {

    onCheckboxChange(event) {
        const rowId = event.target.attributes.id.value,
            isChecked = event.target.checked;
        this.props.onTodoCheck(isChecked, rowId);
    }

    render() {
        const { content, isChecked, id } = this.props;
        return (
            <div>
                {
                    isChecked ? (
                            <div>
                                <input type="checkbox" id={id} defaultChecked={isChecked}
                                       onChange={this.onCheckboxChange.bind(this)} />
                                <del><span>{content}</span></del>
                            </div>
                        ) :
                        (
                            <div>
                                <input type="checkbox" id={id} defaultChecked={isChecked}
                                       onChange={this.onCheckboxChange.bind(this)} />
                                <span>{content}</span>
                            </div>
                        )
                }
            </div>
        );
    }
}

const TodosList = ({ todosList, ...props }) => (
    <div>
        {
            todosList && todosList.map(function (item, index) {
                return <TodoRow content={item.content} isChecked={item.isChecked} id={index} key={index} {...props} />;
            })
        }
    </div>
);


class TodoApp extends PureComponent {
    constructor() {
        super();
        this.state = {
            todoItems: [
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
            ],
        };
    }

    createNewTodo(text) {
        let todoItems = this.state.todoItems.slice();
        todoItems.push({
            content: text,
            isChecked: false,
        });
        this.setState({ todoItems: todoItems });
    }

    checkTodoRow(isChecked, rowId) {
        const todoCheckedItems = this.state.todoItems.slice();
        todoCheckedItems[rowId].isChecked = isChecked;
        this.setState({ todoItems: todoCheckedItems });
    }

    render() {
        return (
            <div>
                <ContentHeader createNewTodo={this.createNewTodo.bind(this)} />
                <TodosList todosList={this.state.todoItems} onTodoCheck={this.checkTodoRow.bind(this)} />
            </div>
        );
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('todoApp'),
);