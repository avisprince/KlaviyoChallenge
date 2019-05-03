import {SET_TEMPLATE, UPDATE_TEMPLATE, ADD_BLOCK, DELETE_BLOCK} from 'actions/templateActions';

export const templateReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_TEMPLATE: {
            const layout = {};

            action.template.forEach(block => {
                layout[block.i] = Object.assign({}, block);
            });

            return Object.assign({}, layout);
        }
        case UPDATE_TEMPLATE: {
            const layout = {};

            action.template.forEach(block => {
                layout[block.i] = Object.assign({}, state[block.i], block);
            });

            return Object.assign({}, state, layout);
        }
        case ADD_BLOCK: {
            const newState = Object.assign({}, state, action.block);
            const newBlockId = Object.keys(action.block)[0];
            const newBlockHeight = action.block[newBlockId].h;

            Object.values(newState).forEach(block => {
                if (block.i !== newBlockId) {
                    block.y += newBlockHeight;
                }
            });

            return newState;
        }
        case DELETE_BLOCK: {
            return Object.keys(state).reduce((result, key) => {
                if (key !== action.blockId) {
                    result[key] = state[key];
                }

                return result;
            }, {});
        }
        default: {
            return state;
        }
    }
}