import './ActionPane.css';
import React from 'react';
import dispatchable from 'actions/dispatchable';
import {selectedBlockSelector} from 'selectors/selectedBlockSelector';
import ToolBox from './ToolBox';
import Editor from './Editor';
import Actions from './Actions';
import Divider from './Divider';

class ActionPane extends React.Component {
    render() {
        let editor = null;
        if (!!this.props.selectedBlock) {
            editor = <Editor />;
        }

        return (
            <div id="actionPane">
                <ToolBox />
                <Divider />
                {editor}
                <div id="actionsContainer">
                    <Divider />
                    <Actions />
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

export default dispatchable(ActionPane, mapStateToProps);