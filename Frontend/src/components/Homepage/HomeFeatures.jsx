import { SiCompilerexplorer } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { IoChatbubbleOutline } from "react-icons/io5";
import { SiChatbot } from "react-icons/si";
import { FaRegPenToSquare } from "react-icons/fa6";
import { PiVideoLight } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import styles from '../Homepage/HomeFeatures.module.css'

const Features = () => {
  return (
  <div className="container px-4 py-5" id="hanging-icons">
  <h2 className="pb-2 border-bottom text-center mb-5 fw-bold" style={{ fontSize: '2.5rem' }}>Why Choose Us?</h2>
  <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
    <div className="col">
      <div className={`${styles.card} text-center border-0 shadow-lg rounded-3 h-100`}>
        <div className="icon d-inline-flex align-items-center justify-content-center fs-4 p-3">
          <BiSolidVideos />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Free Learning Resources</h5>
          <p className="card-text">Access courses without any cost.</p>
          <a href="#" className="btn btn-primary">Browse Free Courses</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className={`${styles.card} text-center border-0 shadow-lg rounded-3 h-100`}>
        <div className="icon d-inline-flex align-items-center justify-content-center fs-4 p-3">
          <GrCertificate />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Quiz & Certification</h5>
          <p className="card-text">Validate your skills and earn recognized certificates.</p>
          <a href="#" className="btn btn-success mb-4">Earn Your Certificate</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className={`${styles.card} text-center border-0 shadow-lg rounded-3 h-100`}>
        <div className="icon d-inline-flex align-items-center justify-content-center fs-4 p-3">
          <IoChatbubbleOutline />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Discussion Forum</h5>
          <p className="card-text">Collaborate and learn with a thriving community.</p>
          <a href="#" className="btn btn-warning">Join the Discussion</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className={`${styles.card} text-center border-0 shadow-lg rounded-3 h-100`}>
        <div className="icon d-inline-flex align-items-center justify-content-center fs-4 p-3">
          <PiVideoLight />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Content Sharing</h5>
          <p className="card-text">Be a creator, upload videos, and share knowledge.</p>
          <a href="#" className="btn btn-info">Upload Your Content</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className={`${styles.card} text-center border-0 shadow-lg rounded-3 h-100`}>
        <div className="icon d-inline-flex align-items-center justify-content-center fs-4 p-3">
          <LiaCertificateSolid />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Gamified Experience</h5>
          <p className="card-text">Earn badges as you learn and grow.</p>
          <a href="#" className="btn btn-danger">Track Your Progress</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className={`${styles.card} text-center border-0 shadow-lg rounded-3 h-100`}>
        <div className="icon d-inline-flex align-items-center justify-content-center fs-4 p-3">
          <SiCompilerexplorer />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Code Anywhere</h5>
          <p className="card-text">Access an integrated online compiler.</p>
          <a href="#" className="btn btn-dark">Try Online Compiler</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className={`${styles.card} text-center border-0 shadow-lg rounded-3 h-100`}>
        <div className="icon d-inline-flex align-items-center justify-content-center fs-4 p-3">
          <FaRegPenToSquare />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Note-Taking Made Easy</h5>
          <p className="card-text">Take and save notes directly on the platform.</p>
          <a href="#" className="btn btn-secondary mb-4">Start Taking Notes</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className={`${styles.card} text-center border-0 shadow-lg rounded-3 h-100`}>
        <div className="icon d-inline-flex align-items-center justify-content-center fs-4 p-3">
          <SiChatbot />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Chatbot Support</h5>
          <p className="card-text">Instant help, whenever you need it.</p>
          <a href="#" className="btn btn-primary mb-4">Ask for Help</a>
        </div>
      </div>                
    </div>
  </div>
  </div>
  );
}

export default Features;