import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import NoteCard from "../../components/Notes/NoteCard";
import styles from '../../pages/Notes/Notes.module.css';

const Notes = () => {
  return (
    <div className={styles.wrapperContainer}>

      <div className={styles.notesNavbar}>
          <div className="logo">Notes</div>
          <div className={styles.navPlusIcon}>
             <FaPlus />
          </div>
      </div>

      <div className="notesContainer">

          <div className={styles.searchWrapper}>
              <input type='text' placeholder='Search notes' className={styles.searchInput}></input>
              <button type="button" className={styles.searchButton}><IoSearchSharp /></button>
          </div>

          <div className={styles.notesWrapper}>
             <NoteCard/>
             <NoteCard/>
             <NoteCard/>
             <NoteCard/>
             <NoteCard/>
             <NoteCard/>
             <NoteCard/>
          </div>
      </div>

    </div>
  )
}

export default Notes;