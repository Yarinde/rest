import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Navbar, FormControl, FormGroup } from 'react-bootstrap';

class ContentHeader extends PureComponent {

    inputChanged(event) {
        event.preventDefault();
        let text = this.inputNode.value, rowId, payload;
        if (text) {
            rowId = this.props.todoItems.length;
            payload =  {
                id: rowId,
                content: text,
                isChecked: false,
            };
            this.props.createTodo(payload);
            this.inputNode.value = '';
        }
    }

    disableAllTodos() {
        // store.dispatch({
        //     type: 'DISABLE_ALL_TODOS',
        // });
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

function mapStateToProps(state) {
    return {
        todoItems: state.todoItems,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createTodo: (payload) => dispatch({ type: 'CREATE_NEW_TODO', payload: payload}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentHeader);
