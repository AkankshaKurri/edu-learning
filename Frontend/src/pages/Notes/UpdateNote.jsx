import React from 'react';
import styles from '../../pages/Notes/UpdateNote.module.css';

const UpdateNote = ({setOpen}) => {
  return (
    <div className={`${styles.updateNote} modal modal-sheet position-fixed d-block p-4 py-md-5`} tabindex="-1" role="dialog" id="modalSheet">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">Add Note</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setOpen(false)}></button>
          </div>
        
        <form className="updateForm">
          <div className="modal-body py-2">
            <div class="mb-3">
              <label htmlFor="exampleFormControlInput1" class="form-label">Title</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Title"/>
            </div>
  
            <div class="mb-3">
              <label htmlFor="exampleFormControlTextarea1" class="form-label">Content</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="10">Enter your Note</textarea>
            </div>
          </div>
    
          <div className="modal-footer d-flex flex-row align-items-center justify-content-center gap-2 pb-3 border-top-0">
              <button type="button" className="btn btn-lg btn-secondary">Clear</button>
              <button type="button" className="btn btn-lg btn-primary" data-bs-dismiss="modal">Save</button>
          </div>    
        </form>  
       </div>
      </div>
    </div>
  );
};

export default UpdateNote;