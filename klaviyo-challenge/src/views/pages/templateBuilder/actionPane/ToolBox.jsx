import './ToolBox.css';
import React, { Component } from 'react';
import dispatchable from 'actions/dispatchable';
import {createTextBlock, createImageBlock, createDividerBlock} from 'factories/blockFactory';
import {addBlock, selectBlock} from 'actions/templateActions';
import Header from './Header';
import {Container, Row, Col} from 'reactstrap';

class ToolBox extends Component {
    createTextBlock() {
        const block = createTextBlock();
        this.addBlock(block);
    }
    
    createImageBlock() {
        const block = createImageBlock();
        this.addBlock(block);
    }
    
    createDividerBlock() {
        const block = createDividerBlock();
        this.addBlock(block);
    }

    addBlock(block) {
        this.props.dispatch(addBlock(block));
        this.props.dispatch(selectBlock(Object.keys(block)[0]));
    }

    render() {
        return (
            <div>
                <Header>Toolbox</Header>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <div className="toolPicker" onClick={()=>this.createTextBlock()}>Text</div>
                        </Col>
                        <Col xs={4}>
                            <div className="toolPicker" onClick={()=>this.createImageBlock()}>Image</div>
                        </Col>
                        <Col xs={4}>
                            <div className="toolPicker" onClick={()=>this.createDividerBlock()}>Divider</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default dispatchable(ToolBox);
