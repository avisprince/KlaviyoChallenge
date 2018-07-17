import './TemplateBuilder.css';
import React, { Component } from 'react';
import {Col, Container} from 'reactstrap';
import ActionPane from './actionPane/ActionPane';
import TemplateCanvas from './canvas/TemplateCanvas';

class TemplateBuilder extends Component {
    render() {
        return (
            <div id="templateBuilderContainer">
                <div id="leftCol">
                    <ActionPane />
                </div>
                <div id="rightCol">
                    <Container>
                        <Col sm={{size: 8, offset: 2}}>
                            <TemplateCanvas />
                        </Col>
                    </Container>
                </div>
            </div>
        );
    }
}

export default TemplateBuilder;
