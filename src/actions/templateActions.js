export const SET_TEMPLATE = "SET_TEMPLATE";
export const UPDATE_TEMPLATE = "UPDATE_TEMPLATE";
export const ADD_BLOCK = "ADD_BLOCK";
export const DELETE_BLOCK = "DELETE_BLOCK";
export const SELECT_BLOCK = "SELECT_BLOCK";

export function setTemplate(template) {
    return {
        type: SET_TEMPLATE,
        template
    }
}

export function updateTemplate(template) {
    return {
        type: UPDATE_TEMPLATE,
        template
    }
}

export function addBlock(block) {
    return {
        type: ADD_BLOCK,
        block
    }
}

export function deleteBlock(blockId) {
    return {
        type: DELETE_BLOCK,
        blockId
    }
}

export function selectBlock(blockId) {
    return {
        type: SELECT_BLOCK,
        blockId
    }
}