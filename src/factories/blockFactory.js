import {generateId} from 'factories/idMaker';

export function createTextBlock() {
    const id = generateId();

    return {
        [id]: {
            i: id,
            x: 0,
            y: 0,
            w: 12,
            h: 4,
            data: "This is a text block. Click here to edit it...",
            type: "text",
            style: {
                fontSize: '12px',
                padding: '10px'
            },
        }
    }
}

export function createImageBlock() {
    const id = generateId();

    return {
        [id]: {
            i: id,
            x: 0,
            y: 0,
            w: 12,
            h: 10,
            data: "Drop an image here.",
            type: "image",
            style: {
                position: 'absolute',
                top: '10px',
                left: '10px',
                right: '10px',
                bottom: '10px',
                fontSize: '14px',
                textAlign: 'center',
                paddingTop: '25px',
                backgroundColor: '#eee'
            },
        }
    }
}

export function createDividerBlock() {
    const id = generateId();

    return {
        [id]: {
            i: id,
            x: 0,
            y: 0,
            w: 12,
            h: 1,
            type: "divider",
            style: {
                height: '100%',
                backgroundColor: '#222'
            },
        }
    }
}

export function cloneBlock(block) {
    const id = generateId();
    const clonedBlock = Object.assign({}, block, {i: id, y: 0});

    return { [id]: clonedBlock };
}