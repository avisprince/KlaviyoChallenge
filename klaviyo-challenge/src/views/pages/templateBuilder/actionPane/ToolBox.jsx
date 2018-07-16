import './ToolBox.css';
import React, { Component } from 'react';
import dispatchable from 'actions/dispatchable';
import {createTextBlock, createImageBlock, createDividerBlock} from 'factories/blockFactory';
import {addBlock, selectBlock} from 'actions/templateActions';
import Header from './Header';

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
                <div className="toolPicker" onClick={()=>this.createTextBlock()}>Text</div>
                <div className="toolPicker" onClick={()=>this.createImageBlock()}>Image</div>
                <div className="toolPicker" onClick={()=>this.createDividerBlock()}>Divider</div>
            </div>
        );
    }
}

export default dispatchable(ToolBox);
