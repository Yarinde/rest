import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Row, Col, ProgressBar } from 'react-bootstrap';

class CurrentForecast extends PureComponent {
    render() {
        const { selectedLocation, selectedLocationForecast } = this.props;
        return (
            <Jumbotron>
                {selectedLocationForecast && (
                    <div>
                        <Row>
                            <Col xs={12} md={2}>
                                <img style={{ borderRadius: '50%', height: '150px', width: '150px' }}
                                     src="http://slcharts01.cdn-surfline.com/charts/global/natl/wht/natl_wht_1.gif" />
                            </Col>
                            <Col xs={12} md={10}><h1>SURF FORECAST</h1>
                            </Col>
                            <Col xs={12} md={10}><h2>{selectedLocationForecast ? selectedLocationForecast.city : ""}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={10} xsOffset={2}><b>Surf Height {selectedLocationForecast.surfHeight}</b></Col>
                            <Col xs={12} md={10} xsOffset={2}><b>Surf Units </b>{selectedLocationForecast.surfUnits}</Col>
                            {/* TODO:: need to add condition param */}
                            <Col xs={12} md={10} xsOffset={2}><b>Condition in %</b></Col>
                            <Col xs={12} md={10} xsOffset={2}>
                                <ProgressBar active now={selectedLocationForecast.windSpeed}
                                             label={`${selectedLocationForecast.windSpeed}%`} bsStyle="info" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={10} xsOffset={2}>Wind Speed
                                - {selectedLocationForecast.windSpeed}</Col>
                            <Col xs={12} md={10} xsOffset={2}>Wind Units
                                - {selectedLocationForecast.windUnit}</Col>
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
        selectedLocationForecast: state.selectedLocation,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForecast);