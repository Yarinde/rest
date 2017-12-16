import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavDropdown, NavItem, Nav, MenuItem, Navbar } from 'react-bootstrap';

class ContentHeader extends PureComponent {

    changeLocation(e) {
        let locationId = e.currentTarget.dataset.id;
        this.props.changeLocationById(locationId);
    }

    render() {
        const { locations } = this.props;
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Surf-With-Ohana</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="Select Location">
                            {locations && locations.map((item) => {
                                return <MenuItem key={item.id} data-id={item.id} onClick={this.changeLocation}>{item.name}</MenuItem>
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeLocationById: (payload) => dispatch({ type: 'CHANGE_LOCATION', payload: payload}),
};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentHeader);
