import './TemplateBuilder.css';
import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import ActionPane from './actionPane/ActionPane';
import TemplateCanvas from './canvas/TemplateCanvas';

class TemplateBuilder extends Component {
    render() {
        return (
            <Row id="templateBuilderContainer">
                <div id="leftCol">
                    <ActionPane />
                </div>
                <Col sm="9" id="rightCol">
                    <Container>
                        <Col sm={{size: 8, offset: 2}}>
                            <TemplateCanvas />
                        </Col>
                    </Container>
                </Col>
            </Row>
        );
    }
}

export default TemplateBuilder;
