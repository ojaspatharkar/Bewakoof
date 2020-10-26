import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotesEditor extends Component {

    onEditTitle = (e) =>{

    }

    onEditContent = (e)=>{

    }
    render() {
        let {selectedNote} = this.props
        if(!selectedNote){
            return null
        }
        return (
            <div>
                <input value={selectedNote.title} onBlur={this.onEditTitle}/>
                <textarea value={selectedNote.content} onBlur={this.onEditContent}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.NotesReducer.Notes)
    return {
        Notes: state.NotesReducer.Notes
    }
}

function mapDispatchToProps() {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesEditor);