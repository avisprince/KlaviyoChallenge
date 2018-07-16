import './Hoverable.css';
import React from 'react';
import dispatchable from 'actions/dispatchable';

class Hoverable extends React.Component {
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

    render() {
        let hoverMenu = null;
        if (this.state.isMouseInside) {
            hoverMenu = (
                <div className="hoverMenu">
                    <div className="hoverMenuItem">
                        <i className="fa fa-trash" />
                    </div>
                    <div className="hoverMenuDivider" />
                    <div className="hoverMenuItem">
                        <i className="fa fa-trash" />
                    </div>
                </div>
            );
        }

        return (
            <div onMouseEnter={()=>this.onMouseEnter()} onMouseLeave={()=>this.onMouseLeave()}>
                {hoverMenu}
                {this.props.children}
            </div>
        );
    }
}

export default dispatchable(Hoverable);