import './Block.css';
import React, { Component } from 'react';
import dispatchable from 'actions/dispatchable';
import {selectBlock, addBlock, deleteBlock} from 'actions/templateActions';
import {cloneBlock} from 'factories/blockFactory';

class Block extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMouseInside: false
        };
    }

    onMouseEnter() {
        this.setState({isMouseInside: true});
    }

    onMouseLeave() {
        this.setState({isMouseInside: false});
    }

    selectBlock(blockId) {
        this.props.dispatch(selectBlock(blockId));
    }

    deleteBlock() {
        this.props.dispatch(deleteBlock(this.props.block.i));
    }

    cloneBlock() {
        const clonedBlock = cloneBlock(this.props.block);
        this.props.dispatch(addBlock(clonedBlock));
        this.props.dispatch(selectBlock(Object.keys(clonedBlock)[0]));
    }

    render() {
        const block = this.props.block;
        
        let hoverMenu = null;
        if (this.state.isMouseInside) {
            hoverMenu = (
                <div className="hoverMenu">
                    <div className="hoverMenuItem" onClick={()=>this.deleteBlock()}>
                        <i className="fa fa-trash" />
                    </div>
                    <div className="hoverMenuDivider" />
                    <div className="hoverMenuItem" onClick={()=>this.cloneBlock()}>
                        <i className="fa fa-clone" />
                    </div>
                </div>
            );
        }

        return (
            <div className="block" onMouseLeave={()=>this.onMouseLeave()}>
                {hoverMenu}
                <div className="blockContent" style={block.style} onMouseEnter={()=>this.onMouseEnter()} onClick={()=>this.selectBlock(block.i)}>{block.data}</div>
            </div>
        );
    }
}

export default dispatchable(Block);
