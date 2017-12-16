import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavDropdown, NavItem, Nav, MenuItem, Navbar } from 'react-bootstrap';

class ContentHeader extends PureComponent {

    render() {
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
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>Action</MenuItem>
                            <MenuItem eventKey={2.2}>Another action</MenuItem>
                            <MenuItem eventKey={2.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        // surfLocations:
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // getAllLocations:
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentHeader);
