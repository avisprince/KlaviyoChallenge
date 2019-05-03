import './Editor.css';
import React from 'react';
import dispatchable from 'actions/dispatchable';
import {selectedBlockSelector} from 'selectors/selectedBlockSelector';
import Header from './Header';
import {updateTemplate} from 'actions/templateActions';
import {Button, ButtonGroup, ButtonToolbar, Input} from 'reactstrap';
import { Col, Form, FormGroup, Label, InputGroup, InputGroupAddon } from 'reactstrap';

class Editor extends React.Component {
    onTextUpdated(value) {
        const selectedBlock = this.props.selectedBlock;
        selectedBlock.data = value;

        this.props.dispatch(updateTemplate([selectedBlock]));
    }

    updateBlock(prop, deactivateProp) {
        const selectedBlock = this.props.selectedBlock;

        const key = Object.keys(prop)[0];
        if (selectedBlock.style[key] === prop[key] && !!deactivateProp) {
            selectedBlock.style = Object.assign({}, selectedBlock.style, deactivateProp);
        } else {
            selectedBlock.style = Object.assign({}, selectedBlock.style, prop);
        }

        this.props.dispatch(updateTemplate([selectedBlock]));
    }

    render() {
        const selectedBlock = this.props.selectedBlock;

        if (selectedBlock.type !== "text") {
            return (
                <div>
                    <Header>Editor</Header>
                    <div id="comingSoon">Coming Soon!</div>
                </div>
            );
        }

        return (
            <div>
                <Header>Editor</Header>
                <div id="editTextArea">
                    <ButtonToolbar id="textButtons">
                        <ButtonGroup size="sm" className="textButtonGroup">
                            <Button onClick={()=>this.updateBlock({fontWeight: 'bold'}, {fontWeight: 'normal'})} active={selectedBlock.style.fontWeight === "bold"}><i className="fa fa-bold" /></Button>
                            <Button onClick={()=>this.updateBlock({fontStyle: 'italic'}, {fontStyle: 'normal'})} active={selectedBlock.style.fontStyle === "italic"}><i className="fa fa-italic" /></Button>
                            <Button onClick={()=>this.updateBlock({textDecoration: 'underline'}, {textDecoration: 'none'})} active={selectedBlock.style.textDecoration === "underline"}><i className="fa fa-underline" /></Button>
                        </ButtonGroup>
                        <ButtonGroup size="sm" className="textButtonGroup">
                            <Button onClick={()=>this.updateBlock({textAlign: 'left'})} active={selectedBlock.style.textAlign === "left"}><i className="fa fa-align-left" /></Button>
                            <Button onClick={()=>this.updateBlock({textAlign: 'center'})} active={selectedBlock.style.textAlign === "center"}><i className="fa fa-align-center" /></Button>
                            <Button onClick={()=>this.updateBlock({textAlign: 'right'})} active={selectedBlock.style.textAlign === "right"}><i className="fa fa-align-right" /></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <Form>
                        <FormGroup row>
                            <Label for="fontSize" sm={4}>Font Size</Label>
                            <Col sm={8}>
                                <InputGroup id="fontSizeInputGroup" size="sm">
                                    <InputGroupAddon addonType="prepend">
                                        <Button onClick={()=>this.updateBlock({fontSize: parseInt(selectedBlock.style.fontSize, 10)-1})}>
                                            <i className="fa fa-minus" />
                                        </Button>
                                    </InputGroupAddon>
                                    <Input type="text" id="fontSizeInput" value={selectedBlock.style.fontSize} />
                                    <InputGroupAddon addonType="append">
                                        <Button onClick={()=>this.updateBlock({fontSize: parseInt(selectedBlock.style.fontSize, 10)+1})}>
                                            <i className="fa fa-plus" />
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                    <Input type="textarea" value={selectedBlock.data} onChange={(e)=>this.onTextUpdated(e.target.value)} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedBlock: selectedBlockSelector(state)
    };
}

export default dispatchable(Editor, mapStateToProps);