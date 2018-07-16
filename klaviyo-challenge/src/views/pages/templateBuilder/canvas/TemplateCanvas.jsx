import './TemplateCanvas.css';
import React, { Component } from 'react';
import dispatchable from 'actions/dispatchable';
import GridLayout from 'react-grid-layout';
import Hoverable from './blocks/Hoverable';
import Block from './blocks/Block';
import {templateSelector} from 'selectors/templateSelector';
import {selectedBlockSelector} from 'selectors/selectedBlockSelector';
import {updateTemplate} from 'actions/templateActions';
import {selectBlock} from 'actions/blockActions';

class TemplateCanvas extends Component {
    onLayoutChange(template) {
        this.props.dispatch(updateTemplate(template));
    }

    selectBlock(blockId) {
        this.props.dispatch(selectBlock(blockId));
    }
    
    render() {
        const gridItems = this.props.template.map(block => {
            const gridItemClassName = (!!this.props.selectedBlock && this.props.selectedBlock.i === block.i)
                ? "gridItem selected"
                : "gridItem";

            return (
                <Hoverable key={block.i}>
                    <div key={block.i} className={gridItemClassName} onClick={()=>this.selectBlock(block.i)}>
                        <Block block={block} />
                    </div>
                </Hoverable>
            );
        });

        return (
            <div id="templateCanvas">
                <GridLayout className="layout" layout={this.props.template} rowHeight={10} width={710} margin={[0, 0]} onLayoutChange={(layout)=>this.onLayoutChange(layout)}>
                    {gridItems}
                </GridLayout>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        template: templateSelector(state),
        selectedBlock: selectedBlockSelector(state)
    };
}

export default dispatchable(TemplateCanvas, mapStateToProps);
