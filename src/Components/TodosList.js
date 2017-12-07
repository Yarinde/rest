import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TodoRow from './TodoRow';

class TodosList extends PureComponent {

    changeFilter(filterType) {
        this.props.changeFilter(filterType);
    }

    componentDidMount() {
        let filter = 'ALL';
        this.props.changeFilter(filter);
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

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeFilter: (filter) => dispatch({ type: 'SET_FILTER', filter: filter}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
