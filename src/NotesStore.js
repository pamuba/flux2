import { EventEmitter } from 'events';

import dispatcher from './dispatcher';

class NotesStore extends EventEmitter {
    constructor(){
        super()
        this.notes = [
            {
                id:1,
                note:"first note"
            },
            {
                id:2,
                note:"second note"
            },
            {
                id:3,
                note:"third note"
            }
        ]
    }
    createNote(note){
        const id = Date.now()
        this.notes.push({id, note})
        this.emit("change")
    }
    deleteNote(noteId){
        //delete note
        this.notes.splice(this.notes.findIndex(e=>e.id === noteId),1);
        this.emit("change");
    }

    getAll(){
        return this.notes;
    }
    _handleActions = (action) =>{
        console.log(action);
        switch(action.type){
            case "CREATE_NOTE":
                this.createNote(action.note)
                break;
            case "DELETE_NOTE":
                    this.deleteNote(action.noteId)
                    break;
            default:
        }
    }
}
const notesStore = new NotesStore();
dispatcher.register(notesStore._handleActions)
window.notesStore = notesStore;
export default notesStore