const Heroes = () => {
  return <>
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Learning made simple, engaging, and fun!</h1>
        <p className="lead">Discover free courses, take notes, earn certificates, and connect with a community of learners.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Explore Courses</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn More</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"/>
      </div>
    </div>
    </div>

   <div className="container col-xxl-8 px-4 py-5">
   <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
     <div className="col-10 col-sm-8 col-lg-6">
       <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
     </div>
     <div className="col-lg-6">
       <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Empower Your Learning – For Free!</h1>
       <p className="lead">Explore free courses, create your own notes, practice coding, and earn badges and certificates. Join a thriving community of learners today!</p>
       <div className="d-grid gap-2 d-md-flex justify-content-md-start">
         <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Get Started</button>
         <button type="button" className="btn btn-outline-secondary btn-lg px-4">See Features</button>
       </div>
     </div>
   </div>
   </div>
  </>
}

export default Heroes;