export const UPDATE_TEMPLATE = "UPDATE-TEMPLATE";
export const ADD_BLOCK = "ADD-BLOCK";

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