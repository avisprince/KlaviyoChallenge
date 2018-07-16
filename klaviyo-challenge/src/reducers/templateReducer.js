import {UPDATE_TEMPLATE, ADD_BLOCK} from 'actions/templateActions';

export const templateReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_TEMPLATE: {
            const layout = {};

            action.template.forEach(block => {
                layout[block.i] = Object.assign({}, state[block.i], block);
            });

            return Object.assign({}, state, layout);
        }
        case ADD_BLOCK: {
            return Object.assign({}, state, action.block);
        }
        default: {
            return state;
        }
    }
}