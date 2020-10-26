let defaultState = {
    Notes : [],
    selectedNote : null
  }
  
  
  const NotesReducer = function(state = defaultState, action){

    switch (action.type) {
        case "CREATE_NOTE":
            let newNote = action.payload
            let newNotesList = state.Notes
            newNotesList.forEach((note)=>{
                note.isSelected = false
            })
            newNote.id = state.Notes && state.Notes.length ? state.Notes[state.Notes.length-1].id + 1 : 1
            newNotesList.push(newNote)
            return {...state, Notes : [...newNotesList] }
        case 'SELECT_NOTE':
            let selectedNote = null
            state.Notes.forEach((note)=>{
                note.isSelected = false
                if(note.id == action.payload){
                    note.isSelected = true
                    selectedNote = note
                }
            })
            return{...state, Notes : [...state.Notes], selectedNote : selectedNote}
        case "UPDATE_NOTES":
            return {...state}
        case "DELETE_NOTE":
            return {...state}
        default:
            return defaultState;
    }
}

export default NotesReducer;