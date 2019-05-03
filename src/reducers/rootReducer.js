import {combineReducers} from 'redux';
import {templateReducer} from 'reducers/templateReducer';
import {selectedBlockReducer} from 'reducers/selectedBlockReducer';

const rootReducer = combineReducers({
    template: templateReducer,
    selectedBlock: selectedBlockReducer
});

export default rootReducer;