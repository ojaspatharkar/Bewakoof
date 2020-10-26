import React, { Component } from 'react';
import {connect} from 'react-redux'
import {CreateNote} from '../Actions'

class EditBar extends Component {
    constructor(props){
        super(props);
        this.onCreate = this.onCreate.bind(this);
    }

    onCreate(){
        let emptyNote = {
                id : 0,
                title : "",
                timeStamp : new Date().getTime(),
                content : "",
                isSelected : true
            }
        if(this.props.CreateNote){
            this.props.CreateNote(emptyNote)
        }
    }
    render() {
        return (
            <div>
                    <button className="btn btn-outline-primary" onClick={this.onCreate}>Create New</button>
                    <button className="btn btn-outline-danger">Delete</button>
            </div>
        );
    }
}


function mapStateToProps(){
    return{}
}

function mapDispatchToProps(dispatch){
    return{
        CreateNote(note){
            dispatch(CreateNote(note))
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBar);