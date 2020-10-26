import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SelectNote} from '../Actions'

class NotesList extends Component {

    onSelect(note){
        this.props.SelectNote(note.id)
    }

    render() {
        console.log(this.props.Notes)
        let {Notes} = this.props
        return (
            <div style={{ width: 200, paddingTop: 10 }}>
                {
                    Notes.map((note, idx) => {
                        let date = new Date(+note.timeStamp)
                        
                        return (
                            <div onClick={()=>{this.onSelect(note)}} key={idx} className='list-item' style={note.isSelected ? { backgroundColor:'orange', color:'black' } : null}>
                                <div style={{height:20}}><span style={{ fontSize: 20 }}>{note.title}</span></div>
                                <div style={{height:30}}>
                                    <span style={{ fontSize: 10 }}>{date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</span>
                                    <span style={{ fontSize: 15, paddingLeft: 20 }}>{note.title}</span>
                                </div>
                            </div>
                        )
                    })
                }

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

function mapDispatchToProps(dispatch) {
    return {
        SelectNote(id){
            dispatch(SelectNote(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);