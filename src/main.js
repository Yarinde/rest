import React, { PureComponent } from 'react';
import TodosList from './Components/TodosList';
import ContentHeader from './Components/ContentHeader';
import { connect } from 'react-redux';

export class TodoApp extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let payload = [
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
                ];
        this.props.getDefaultTodos(payload);
    }

    render() {
        return (
            <div>
                <ContentHeader />
                {console.log(this.props.todoItems)}
                <TodosList todosList={this.props.todoItems} filter={this.props.filter} />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        todoItems: state.todoItems,
        filter: state.filter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefaultTodos: (payload) => dispatch({ type: 'GET_DEFAULT_TODOS', payload: payload}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
