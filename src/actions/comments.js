export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid,
        votes: 0,
        text
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export function thumbUp(id) {
    return {
        type: THUMB_UP,
        id
    }
}

export function ThumbDown(id) {
    return {
        type: THUMB_DOWN,
        id
    }
}
