import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class TodoRow extends PureComponent {

    onCheckboxChange(event) {
        const rowId = event.target.attributes.id.value,
            isChecked = event.target.checked;
        let payload;
        payload = {
            id: rowId,
            isChecked: isChecked,
        };
        this.props.checkTodoItem(payload);
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

function mapStateToProps(state) {
    return {
        todoItems: state.todoItems,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checkTodoItem: (payload) => dispatch({ type: 'CHECK_TODO_ITEM', payload: payload}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoRow);
