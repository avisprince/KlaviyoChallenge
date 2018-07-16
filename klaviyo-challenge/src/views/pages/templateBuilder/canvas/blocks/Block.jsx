import './Block.css';
import React, { Component } from 'react';

class Block extends Component {
    render() {
        const block = this.props.block;

        return (
            <div className="block">
                <div style={block.style}>{block.data}</div>
            </div>
        );
    }
}

export default Block;
