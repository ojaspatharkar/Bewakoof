import React, { Component } from 'react';
import { connect } from 'react-redux';
import {UpdateNote} from '../Actions'
class NotesEditor extends Component {
    state = {
        title : "",
        content : ""
    }
    

    onEditTitle = (e) =>{
        let {selectedNote, UpdateNote} = this.props
        this.setState({title : e.target.value}, ()=>{
            selectedNote.title = this.state.title
            UpdateNote(selectedNote)
        })
    }

    onEditContent = (e)=>{
        let {selectedNote, UpdateNote} = this.props
        selectedNote.content = e.target.value
        UpdateNote(selectedNote)
    }
    render() {
        let {selectedNote} = this.props
        if(!selectedNote){
            return null
        }
        return (
            <div>
                <input value={selectedNote.title} onChange={this.onEditTitle}/>
                <textarea value={selectedNote.content} onChange={this.onEditContent}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.NotesReducer.Notes)
    return {
        Notes: state.NotesReducer.Notes,
        selectedNote : state.NotesReducer.selectedNote
    }
}

function mapDispatchToProps(dispatch) {
    return {    
        UpdateNote(note){
            dispatch(UpdateNote(note))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesEditor);