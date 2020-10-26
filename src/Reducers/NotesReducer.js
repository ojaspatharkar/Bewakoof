let defaultState = {
    Notes : []
  }
  
  
  const NotesReducer = function(state = defaultState, action){

    switch (action.type) {
        case "CREATE_NOTE":
            let newNote = action.payload
            let newNotesList = state.Notes
            newNote.id = state.Notes && state.Notes.length ? state.Notes[state.Notes.length-1].id + 1 : 1
            newNotesList.push(newNote)
            return {...state, Notes : [...newNotesList] }
        case "UPDATE_NOTES":
            return {...state}
        case "DELETE_NOTE":
            return {...state}
        default:
            return defaultState;
    }
}

export default NotesReducer;