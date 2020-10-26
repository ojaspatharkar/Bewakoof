import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotesList extends Component {
    render() {
        console.log(this.props.Notes)
        let {Notes, selectedId} = this.props
        return (
            <div style={{ width: 200, paddingTop: 10 }}>
                {
                    Notes.map((note, idx) => {
                        let date = new Date(+note.timeStamp)
                        
                        return (
                            <div key={idx} className='list-item' style={note.id == selectedId ? { backgroundColor:'orange', color:'black' } : null}>
                                <div><span style={{ fontSize: 20 }}>{note.title}</span></div>
                                <div>
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

function mapDispatchToProps() {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);