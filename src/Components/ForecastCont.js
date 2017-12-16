import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Jumbotron, Row, Col, ProgressBar } from 'react-bootstrap';

class CurrentForecast extends PureComponent {
    render() {
        const { locationName, precentCondition, windDirection, windCondition, seaTemp, airTemp } = this.props;
        const now = 60;
        return (
            <Jumbotron>
                <Row>
                    <Col xs={12} md={2}>
                        <img style={{ borderRadius: '50%' , height: '150px', width: '150px'}}
                             src="http://slcharts01.cdn-surfline.com/charts/global/natl/wht/natl_wht_1.gif" />
                        {/*https://chart-1.msw.ms/wave/750/21-1513231200-1.gif*/}
                    </Col>
                    <Col xs={12} md={10} ><h1>{'ASHDOD'} SURF FORECAST</h1></Col>
                </Row>
                <Row>
                    <Col xs={12} md={10} xsOffset={2}><b>Height 2.1</b></Col>
                    <Col xs={12} md={10} xsOffset={2}><b>Condition in %</b></Col>
                    <Col xs={12} md={10} xsOffset={2}>
                        <ProgressBar active now={now} label={`${now}%`} bsStyle="info" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={10} xsOffset={2}>Wind Direction - NW</Col>
                    <Col xs={12} md={10} xsOffset={2}>Wind Condition - 20</Col>
                </Row>
                <Row>
                    <Col xs={12} md={10} xsOffset={2}>Sea Temp - 12</Col>
                    <Col xs={12} md={10} xsOffset={2}>Air Temp - 12</Col>
                </Row>
            </Jumbotron>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForecast);