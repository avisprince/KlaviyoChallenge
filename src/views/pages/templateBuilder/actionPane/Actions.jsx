import './Actions.css';
import React from 'react';
import dispatchable from 'actions/dispatchable';
import {templateSelector} from 'selectors/templateSelector';
import {Container, Col, Row, Button, Input} from 'reactstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {saveTemplate} from 'services/saveService';
import {withRouter} from 'react-router';

class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
    }

    onSave() {
        const templateName = document.getElementById("templateNameInput").value;
        if (!templateName || !templateName.trim()) {
            return;
        }

        saveTemplate(templateName, this.props.template);
        this.toggleModal();
    }

    onLoad() {
        this.props.history.push("/");
    }

    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen});
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
                            <Button color="primary" onClick={()=>this.toggleModal()} block><i className="fa fa-save" /> Save</Button>
                        </Col>
                    </Row>
                </Container>
                <Modal isOpen={this.state.isModalOpen} toggle={()=>this.toggleModal()}>
                    <ModalHeader toggle={()=>this.toggleModal()}>Save Template</ModalHeader>
                    <ModalBody>
                        <Input type="text" name="templateName" id="templateNameInput" placeholder="Template Name" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={()=>this.toggleModal()}>Cancel</Button>
                        <Button color="primary" onClick={()=>this.onSave()}>Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        template: templateSelector(state)
    };
}

export default withRouter(dispatchable(Actions, mapStateToProps));