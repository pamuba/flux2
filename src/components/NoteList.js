import React, { Component } from "react";

import Note from "./Note";
import NotesStore from "../NotesStore";
import * as NoteActions from '../NotesActions';

export default class NoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: NotesStore.getAll(),
    };
  }
  getTodos = () => {
    console.log("onChange@NoteList");
    this.setState({
      notes: NotesStore.getAll(),
    });
  };

  componentDidMount() {
    NotesStore.on("change", this.getTodos);
  }

  createNote = () =>{
    NoteActions.createNote(Date.now())
  }

  render() {
    const { notes } = this.state;
    const NoteComponents = notes.map((n) => {
      return <Note key={n.id} id={n.id} note={n.note}></Note>;
    });
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={this.createNote}>Add Note!</button>
        <ul>{NoteComponents}</ul>
      </div>
    );
  }
}
