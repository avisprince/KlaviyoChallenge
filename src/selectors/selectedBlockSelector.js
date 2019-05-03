import {createSelector} from 'reselect';

export const selectedBlockSelector = createSelector(
    state => state.template,
    state => state.selectedBlock,
    (template, selectedBlockId) => {
        if (!selectedBlockId || !template[selectedBlockId]) {
            return null;
        }
        
        return Object.assign({}, template[selectedBlockId]);
    }
);