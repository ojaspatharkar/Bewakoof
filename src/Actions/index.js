
export function CreateNote(noteObj){
    return{
        type : "CREATE_NOTE",
        payload : noteObj
    }
}

export function SelectNote(id){
    return{
        type : "SELECT_NOTE",
        payload : id
    }
}

export function UpdateNote(noteObj){
    return{
        type : "UPDATE_NOTES",
        payload : noteObj
    }
}

export function DeleteNte(){

}