import './Actions.css';
import React from 'react';
import dispatchable from 'actions/dispatchable';
import {templateSelector} from 'selectors/templateSelector';
import {Button} from 'reactstrap';

class Actions extends React.Component {
    onSave() {
        localStorage.setItem("SavedTemplate", JSON.stringify(this.props.template));
    }

    render() {
        return (
            <div id="actions">
                <Button color="primary" block onClick={()=>this.onSave()}>Save</Button>
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