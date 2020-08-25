import React, { Component } from 'react'
import * as NoteActions from '../NotesActions'

export default class Note extends Component {
    constructor(props) {
        super()
    
        this.state = {
             
        }
    }
    removeNote = (id) =>{
        console.log(id)
        NoteActions.deleteNote(id);
    }
    render() {
        const { id, note } = this.props
        console.log(this.props)
        // const note = this.props.note
        return (
           <li>{note}<button onClick={()=>this.removeNote(id)}>X</button></li>
        )
    }
}

