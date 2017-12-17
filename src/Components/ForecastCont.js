import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Jumbotron, Row, Col, ProgressBar } from 'react-bootstrap';

class CurrentForecast extends PureComponent {
    render() {
        const { selectedLocation, selectedLocationForecast } = this.props;
        return (
            <Jumbotron>
                {selectedLocationForecast && (
                    <div>
                        <Row>
                            {console.log(this.props)}
                            <Col xs={12} md={2}>
                                <img style={{ borderRadius: '50%', height: '150px', width: '150px' }}
                                     src="http://slcharts01.cdn-surfline.com/charts/global/natl/wht/natl_wht_1.gif" />
                            </Col>
                            <Col xs={12} md={10}><h1>SURF FORECAST</h1>
                            </Col>
                            <Col xs={12} md={10}><h2>{selectedLocation ? selectedLocation.name : ""}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={10} xsOffset={2}><b>Height {selectedLocationForecast.height}</b></Col>
                            <Col xs={12} md={10} xsOffset={2}><b>Condition in %</b></Col>
                            <Col xs={12} md={10} xsOffset={2}>
                                <ProgressBar active now={selectedLocationForecast.condition}
                                             label={`${selectedLocationForecast.condition}%`} bsStyle="info" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={10} xsOffset={2}>Wind Direction
                                - {selectedLocationForecast.windDirection}</Col>
                            <Col xs={12} md={10} xsOffset={2}>Wind Condition
                                - {selectedLocationForecast.windCondition}</Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={10} xsOffset={2}>Sea Temp - {selectedLocationForecast.seaTemp}</Col>
                            <Col xs={12} md={10} xsOffset={2}>Air Temp - {selectedLocationForecast.AirTemp}</Col>
                        </Row>
                    </div>
                )}
            </Jumbotron>
        );
    }
}

function mapStateToProps(state) {
    return {
        locations: state.locations,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForecast);