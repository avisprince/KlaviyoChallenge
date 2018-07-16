import {SELECT_BLOCK} from 'actions/blockActions';

export const selectedBlockReducer = (state = null, action) => {
    switch (action.type) {
        case SELECT_BLOCK: {
            return action.blockId
        }
        default: {
            return state;
        }
    }
}