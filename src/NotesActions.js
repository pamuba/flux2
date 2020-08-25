import dispatcher from './dispatcher'

export function createNote(note){
    dispatcher.dispatch({type:"CREATE_NOTE", note});
}

export function deleteNote(noteId){
    dispatcher.dispatch({type: "DELETE_NOTE", noteId});
}