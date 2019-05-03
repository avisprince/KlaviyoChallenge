import {createSelector} from 'reselect';

export const templateSelector = createSelector(
    state => state.template,
    (template) => {
        return Object.values(template);
    }
);