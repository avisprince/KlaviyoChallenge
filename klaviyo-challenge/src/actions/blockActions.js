export const SELECT_BLOCK = "SELECT-BLOCK";

export function selectBlock(blockId) {
    return {
        type: SELECT_BLOCK,
        blockId
    }
}