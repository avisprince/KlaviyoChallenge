import './ToolBox.css';
import React, { Component } from 'react';
import dispatchable from 'actions/dispatchable';
import {createTextBlock, createImageBlock, createDividerBlock} from 'factories/blockFactory';
import {addBlock} from 'actions/templateActions';
import Header from './Header';

class ToolBox extends Component {
    createTextBlock() {
        const block = createTextBlock();
        this.props.dispatch(addBlock(block));
    }
    
    createImageBlock() {
        const block = createImageBlock();
        this.props.dispatch(addBlock(block));
    }
    
    createDividerBlock() {
        const block = createDividerBlock();
        this.props.dispatch(addBlock(block));
    }

    render() {
        return (
            <div>
                <Header>Toolbox</Header>
                <div className="toolPicker" onClick={()=>this.createTextBlock()}>Text</div>
                <div className="toolPicker" onClick={()=>this.createImageBlock()}>Image</div>
                <div className="toolPicker" onClick={()=>this.createDividerBlock()}>Divider</div>
            </div>
        );
    }
}

export default dispatchable(ToolBox);
