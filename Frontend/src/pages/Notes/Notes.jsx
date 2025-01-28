import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import NoteCard from "../../components/Notes/NoteCard";
import styles from '../../pages/Notes/Notes.module.css';
import UpdateNote from "../../pages/Notes/AddNote";
import NoteDetails from "../../pages/Notes/NoteDetails";
import { useState } from 'react';

const Notes = () => {
  const [onCreateNote , setOnCreateNote] = useState(false);
  const [onViewNote , setOnViewNote] = useState(false);

  return (
    <div className={styles.wrapperContainer}>

      <div className={`${styles.notesNavbar} shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <div className="logo">Notes</div>
          <div className={styles.navPlusIcon} onClick={()=>setOnCreateNote(true)}>
             <FaPlus />
          </div>
      </div>

      <div className="notesContainer">

          <div className={styles.searchWrapper}>
              <input type='text' placeholder='Search notes' className={styles.searchInput}></input>
              <button type="button" className={styles.searchButton}><IoSearchSharp /></button>
          </div>

          <div className={styles.notesWrapper}>
             <NoteCard setView={setOnViewNote}/>
          </div>
          { onCreateNote && <UpdateNote setOpen={setOnCreateNote}/> } 
          { onViewNote && <NoteDetails setView={setOnViewNote}/>}
      </div>

    </div>
  )
}

export default Notes;