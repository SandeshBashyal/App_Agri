import React, {useState, useEffect} from 'react'
//React hooks { }
const NotesListPage = () => {

    let [notes,setNotes] =useState([])  
    useEffect(() =>{
        getNotes()
    }, [])

    let getNotes = async () =>{
        let response = await fetch('http://127.0.0.1:8000/api/notes/')
        let data = await response.json()
        console.log('Data: ', data)
        setNotes(data)
    }

    return (
        <div>
            Notes
        </div>
  )
}

export default NotesListPage