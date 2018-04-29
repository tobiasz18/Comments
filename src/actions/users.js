export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export function addUser(name) {
    return {
        type: ADD_USER,
        id: uuid,
        name,
    }
}

export function removeUser(id) {
    return {
        type: ADD_USER,
        id
    }
}
