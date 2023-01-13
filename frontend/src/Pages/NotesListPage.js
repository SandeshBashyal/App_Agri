import React, {useState, useEffect} from 'react'
//React hooks { }
const NotesListPage = () => {

    //3. Updated the state
    let [notes,setNotes] =useState([])  
    //2. called in useEffect
    useEffect(() =>{
        getNotes()
    }, [])

    //1. made a call
    let getNotes = async () =>{
        let response = await fetch('http://127.0.0.1:8000/api/notes/')
        let data = await response.json()
        setNotes(data)
    }
        //4. rendered the data
    return (
        <div>
            <div className='notes-list'>
                {notes.map((note, index)=>{
                    <h3 key ={index}>{note.body}</h3>
                })}
            </div>
        </div>
  )
}

export default NotesListPage