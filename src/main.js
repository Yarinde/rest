import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, FormControl, FormGroup } from 'react-bootstrap';
import { createStore } from 'redux';

let store = createStore(todoReducer);

function todoReducer(state = [], action) {
    debugger;
    switch (action.type) {
        case('CREATE_NEW_TODO'):
            return {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    {
                        id: action.payload.id,
                        content: action.payload.content,
                        isChecked: false,
                    },
                ],
            };
        case('CHECK_TODO_ITEM'):
            return {
                ...state,
                todoItems: state.todoItems.map(todo =>
                    (parseInt(todo.id) === parseInt(action.payload.id))
                        ? { ...todo, isChecked: !todo.isChecked }
                        : todo,
                ),
            };
        case('GET_DEFAULT_TODOS'):
            return {
                ...state,
                todoItems: [
                    ...state,
                    ...action.payload
                ],
            };
        case ('DISABLE_ALL_TODOS'):
            return {
                ...state,
                todoItems: state.todoItems.map(function (todo) {
                    todo.isChecked = false;
                    return todo;
                }),
            };
        case('SET_FILTER'):
            return {
                ...state,
                filter: action.filter,
            };
        default:
            return state;
    }
}


class ContentHeader extends PureComponent {

    inputChanged(event) {
        event.preventDefault();
        debugger;
        let text = this.inputNode.value, rowId;
        if (text) {
            rowId = store.getState().todoItems.length;
            store.dispatch({
                type: 'CREATE_NEW_TODO',
                payload: {
                    id: rowId,
                    content: text,
                    isChecked: false,
                },
            });
            this.inputNode.value = '';
        }
    }

    disableAllTodos() {
        store.dispatch({
            type: 'DISABLE_ALL_TODOS',
        });
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
                <Button onClick={this.disableAllTodos.bind(this)}>Disable All</Button>
            </Navbar>
        );
    }
}

class TodoRow extends PureComponent {

    onCheckboxChange(event) {
        const rowId = event.target.attributes.id.value,
            isChecked = event.target.checked;
        store.dispatch({
            type: 'CHECK_TODO_ITEM',
            payload: {
                id: rowId,
                isChecked: isChecked,
            },
        });
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

class TodosList extends PureComponent {

    changeFilter(filterType) {
        store.dispatch({
            type: 'SET_FILTER',
            filter: filterType,
        });
    }

    componentDidMount() {
        debugger;
        store.dispatch({
            type: 'SET_FILTER',
            filter: 'ALL',
        });
    }

    render() {
        const { todosList, filter, ...props } = this.props;
        return (
            <div>
                <div>
                    <span>Filters :</span>
                    <span onClick={this.changeFilter.bind(this, 'ACTIVE')}>Pending</span>
                    <span onClick={this.changeFilter.bind(this, 'DONE')}>Done</span>
                    <span onClick={this.changeFilter.bind(this, 'ALL')}>All</span>
                </div>
                <div>
                    {
                        filter === 'ALL' ? (
                            todosList && todosList.map(function (item, index) {
                                return <TodoRow content={item.content} isChecked={item.isChecked} id={index}
                                                key={index} {...props} />;
                            })
                        ) : (
                            filter === 'ACTIVE' ? (
                                todosList && todosList.map(function (item, index) {
                                    return !item.isChecked && <TodoRow content={item.content} isChecked={item.isChecked} id={index}
                                                    key={index} {...props} />;
                                })
                            ) : (
                                todosList && todosList.map(function (item, index) {
                                    return item.isChecked && <TodoRow content={item.content} isChecked={item.isChecked} id={index}
                                                    key={index} {...props} />;
                                })
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}


class TodoApp extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.dispatch({
            type: 'GET_DEFAULT_TODOS',
            payload: [
                {
                    id: 0,
                    content: 'yarin needs to learn react',
                    isChecked: false,
                },
                {
                    id: 1,
                    content: 'yarin needs to calm down',
                    isChecked: false,
                },
                {
                    id: 2,
                    content: 'yarin needs to create GOOD toDo list',
                    isChecked: false,
                },
                {
                    id: 3,
                    content: 'yarin needs to schedule interview',
                    isChecked: true,
                },
            ],
        });
    }

    render() {
        return (
            <div>
                <ContentHeader />
                {console.log(this.props.store)}
                <TodosList todosList={this.props.store.todoItems} filter={this.props.store.filter} />
            </div>
        );
    }
}


const render = () => {
    ReactDOM.render(
        <TodoApp store={store.getState()} />,
        document.getElementById('todoApp'),
    );
};

store.subscribe(render);
render();