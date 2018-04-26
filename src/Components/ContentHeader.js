import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavDropdown, Nav, MenuItem, Navbar, NavItem } from 'react-bootstrap';

class ContentHeader extends PureComponent {

    changeLocation(e) {
        let locationId = e.currentTarget.dataset.id;
        this.props.changeLocationById(locationId);
    }

    componentDidMount() {
        // if(this.props.locations) {
        //     this.props.changeLocationById(this.props.locations[0].id)
        // }
    }

    render() {
        const { locations } = this.props;
        console.log(locations);
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Surf-With-Ohana</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={2} title="Select Location" id="basic-nav-dropdown">
                            {locations && locations.map((item) => {
                                return <MenuItem key={item.id} id={item.id} data-id={item.id}>{item.name}</MenuItem>;
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
        locations: state.locations,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeLocationById: (payload) => dispatch({ type: 'CHANGE_LOCATION', payload: payload }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentHeader);
