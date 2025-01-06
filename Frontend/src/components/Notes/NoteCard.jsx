import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import styles from "../../components/Notes/NoteCard.module.css"

const NoteCard = () => {
  return (
    <div className={styles.noteCardContainer}>

       <div className={styles.noteCardWrapper}>
          <h2 className={styles.cardTitle}>Lorem ipsum dol</h2>

          <p className='cardBody'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam cupiditate recusandae rem, laborum unde repellendus voluptate itaque expedita deserunt dolor mollitia porro. Laboriosam doloribus excepturi porro consequatur temporibus praesentium fuga, aliquam nemo quae! At eos earum suscipit illo reprehenderit quisquam necessitatibus minima exercitationem?</p>

          <span className='card-details'>Read More</span>

          <div className='cardFooter'>
             <span>{new Date().toString()}</span>

             <div className='cardActions'>
                  <div className='actionItem'>
                    <FiEdit />
                  </div>
                  <div className='actionItem'>
                    <MdDelete />
                  </div>
             </div>
          </div>

       </div>
    </div>
  )
}

export default NoteCard;
