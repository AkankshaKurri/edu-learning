import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import styles from '../../pages/Notes/NoteDetails.module.css';

const NoteDetails = ({setView}) => {
  return (
    <div className="noteDetails d-flex justify-content-center align-items-center position-fixed w-100 h-100 top-0 start-0">
      <div className="detailsWrapper shadow-sm p-3 mb-5 bg-body-tertiary rounded border border-1 w-25">

        <div className={styles.backButton} onClick={()=> setView(false)}>
           <IoArrowBack />
        </div>
         
        <h2 className="detailsTitle">Lorem ipsum dol</h2>

         <div className="detailsTimeline mb-3">
            <span>{new Date().toDateString()}</span>
         </div>
      
         <p className="detailsBody">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam cupiditate recusandae rem, laborum unde repellendus voluptate itaque expedita deserunt dolor mollitia porro. Laboriosam doloribus excepturi porro consequatur temporibus praesentium fuga, aliquam nemo quae! At eos earum suscipit illo reprehenderit quisquam necessitatibus minima exercitationem?</p>

      </div>
    </div>
  );
};

export default NoteDetails;