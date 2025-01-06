import React, { useState } from 'react'
import uploadvideo from '../assets/uploadvideo.png';
import uploadthumbnail from '../assets/uploadthumbnail.png';

const UploadVideo = () => {
  //For title and decription
  const [meta , setmetaData] = useState({
     title:" ",
     description: " ",
  })
  // file selection 
  const [selectedFile, setSelectedFile] = useState(null);
  //checking progress
  const [progress , setProgress] = useState(0);
  // //checking uploaded the file or not, if not then initial state is false
  const [uploading, setUploading] = useState(false);
  // //for displaying message
  const [message , setMessage] = useState("");

  function handleFileChange(event){
    //console.log(event.target.files[0])
    setSelectedFile(event.target.files[0])
  }

  function formFieldChange(event){
    // console.log(event.target.name);
    // console.log(event.target.value);
    setmetaData({
      ...meta ,
      [event.target.name] : event.target.value,
    })
  }

  function handleForm(formEvent){
    formEvent.preventDefault();
    // console.log(formEvent.target.title.value);
    // console.log(formEvent.target.description.value);
    console.log(meta);

     //submit the file to server
     saveVideoToServer(selectedFile, meta)

  }

   //submit the file to server
   async function saveVideoToServer(video, videoMetaData ){
       setUploading(true);
       //api call
   }

  return (
    <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-lg-5" tabIndex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
        <form onSubmit={handleForm}>
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Video Upload Form</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body p-5 pt-0">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="Enter video title" onChange={formFieldChange}/>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter video description" onChange={formFieldChange}></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="formFileLg" className="form-label">Upload Thumbnail</label>
                <div className="mb-3 d-flex">
                  <img src={uploadthumbnail} alt="upload thumbnail image" width={50} style={{marginRight:'6px'}} />
                  <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
              </div>

              <div className="mb-3">
                    <label htmlFor="formFileLg" className="form-label">Upload Video File</label>
                    <div className="d-flex">
                       <img src={uploadvideo} alt="upload video image" width={50} style={{marginRight:'6px'}}/>
                       <input name="videofile" className="form-control form-control-lg" id="formFileLg" type="file" onChange={handleFileChange}/>
                   </div>
              </div>

              <div className="col-12 text-center">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
          </div>
         </form>
        </div>
      </div>
    </div>   
  )
}

export default UploadVideo;
