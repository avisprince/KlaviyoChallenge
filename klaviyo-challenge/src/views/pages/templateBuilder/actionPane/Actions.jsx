import './Actions.css';
import React from 'react';
import dispatchable from 'actions/dispatchable';
import {templateSelector} from 'selectors/templateSelector';
import {Container, Col, Row, Button} from 'reactstrap';
import {saveTemplate, loadTemplate} from 'services/saveService';
import {setTemplate} from 'actions/templateActions';

class Actions extends React.Component {
    onSave() {
        saveTemplate("saved template", this.props.template);
    }

    onLoad() {
        const loadedTemplate = loadTemplate("saved template");
        this.props.dispatch(setTemplate(loadedTemplate));
    }

    render() {
        return (
            <div>
                <Container id="actions">
                    <Row>
                        <Col>
                            <Button color="default" onClick={()=>this.onLoad()} block><i className="fa fa-folder-open" /> Load</Button>
                        </Col>
                        <Col>
                            <Button color="primary" onClick={()=>this.onSave()} block><i className="fa fa-save" /> Save</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        template: templateSelector(state)
    };
}

export default dispatchable(Actions, mapStateToProps);