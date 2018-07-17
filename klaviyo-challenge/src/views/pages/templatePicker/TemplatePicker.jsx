import './TemplatePicker.css';
import React, { Component } from 'react';
import dispatchable from 'actions/dispatchable';
import {Row, Col, Container, ListGroup, ListGroupItem} from 'reactstrap';
import {loadTemplate, getTemplateNames} from 'services/saveService';
import {setTemplate} from 'actions/templateActions';
import {withRouter} from 'react-router';
import {getTemplate} from 'templates/sampleTemplates';

class TemplatePicker extends Component {
    pickTemplate(name) {
        const template = loadTemplate(name);
        this.props.dispatch(setTemplate(template));
        this.props.history.push("/TemplateBuilder");
    }

    pickSampleTemplate(name) {
        const template = getTemplate(name);
        this.props.dispatch(setTemplate(template));
        this.props.history.push("/TemplateBuilder");
    }

    render() {
        const savedTemplateNames = getTemplateNames();
        const savedTemplates = savedTemplateNames.map(name => {
            return (
                <ListGroupItem className="templateOption" onClick={()=>this.pickTemplate(name)}>{name}</ListGroupItem>
            );
        });

        const sampleTemplateNames = ["gallery", "scratch"];
        const sampleTemplates = sampleTemplateNames.map(name => {
            return (
                <ListGroupItem className="templateOption" onClick={()=>this.pickSampleTemplate(name)}>{name}</ListGroupItem>
            );
        });

        return (
            <div id="templatePickerPage">
                <Container id="templatePickerContainer">
                    <Row>
                        <Col sm={{size: 8, offset: 2}}>
                            <h2 id="templatePickerTitle">Pick a template</h2>
                            <h4 className="templatePickerHeader">Saved Templates:</h4>
                            <ListGroup>
                                {savedTemplates}
                            </ListGroup>
                            <h4 className="templatePickerHeader">Sample Templates:</h4>
                            <ListGroup>
                                {sampleTemplates}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(dispatchable(TemplatePicker));
