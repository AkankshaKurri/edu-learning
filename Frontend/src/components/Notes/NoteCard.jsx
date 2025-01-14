import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import styles from "../../components/Notes/NoteCard.module.css"

const NoteCard = ({setView}) => {
  return (
    <div className={`shadow-sm p-3 mb-5 bg-body-tertiary rounded border border-1 ${styles.noteCardContainer}`}>

       <div className={styles.noteCardWrapper}>
          <h2 className={styles.cardTitle} onClick={()=> setView(true)}>Lorem ipsum dol</h2>

          <p className='cardBody'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam cupiditate recusandae rem, laborum unde repellendus voluptate itaque expedita deserunt dolor mollitia porro. Laboriosam doloribus excepturi porro consequatur temporibus praesentium fuga, aliquam nemo quae! At eos earum suscipit illo reprehenderit quisquam necessitatibus minima exercitationem?</p>

          <span className={styles.cardDetails} onClick={()=> setView(true)}>Read More</span>

          <div className={styles.cardFooter}>
             <span>{new Date().toDateString()}</span>

             <div className={styles.cardActions}>
                  <div className={`${styles.actionItem} ${styles.editIcon}`}>
                    <FiEdit />
                  </div>
                  <div className={`${styles.actionItem} ${styles.deleteIcon}`}>
                    <MdDelete />
                  </div>
             </div>
          </div>

       </div>
    </div>
  )
}

export default NoteCard;
