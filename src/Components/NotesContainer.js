import React, { Component } from 'react';
import {connect} from 'react-redux'
import EditBar from './EditBar';
import NotesEditor from './NotesEditor';
import NotesList from './NotesList';
class NotesContainer extends Component {

    componentDidMount() {
        
    }
    
    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    <div className="col-12">Notes</div>
                </div>
                <div className="row">
                    <EditBar/>
                </div>
                <div className="row">
                    <div className="col-3">
                        <NotesList/>
                    </div>
                    <div className="col-9">
                        <NotesEditor/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(){
    return{}
}

function mapDispatchToProps(dispatch){
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);