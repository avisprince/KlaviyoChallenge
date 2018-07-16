import './Editor.css';
import React from 'react';
import dispatchable from 'actions/dispatchable';
import {selectedBlockSelector} from 'selectors/selectedBlockSelector';
import Header from './Header';
import {Input} from 'reactstrap';
import {updateTemplate} from 'actions/templateActions';
import {Button, ButtonGroup, ButtonToolbar} from 'reactstrap';

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

        let editTextArea = <div id="comingSoon">Coming Soon!</div>;
        if (selectedBlock.type === "text") {
            editTextArea = (
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
                    <Input type="textarea" value={selectedBlock.data} onChange={(e)=>this.onTextUpdated(e.target.value)} />
                </div>
            );
        }

        return (
            <div>
                <Header>Editor</Header>
                {editTextArea}
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