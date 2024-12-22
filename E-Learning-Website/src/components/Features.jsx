import { SiCompilerexplorer } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { IoChatbubbleOutline } from "react-icons/io5";
import { SiChatbot } from "react-icons/si";
import { FaRegPenToSquare } from "react-icons/fa6";
import { PiVideoLight } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";

const Features = () => {
  return (
  <div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom">Why Choose Us ?</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><BiSolidVideos /><use xlinkHref="#toggles2"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Free Learning Resources</h3>
          <p>Access courses without any cost.</p>
          <a href="#" className="btn btn-primary">
          Browse Free Courses
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><GrCertificate /><use xlinkHref="#cpu-fill"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Quiz & Certification</h3>
          <p>Validate your skills and earn recognized certificates.</p>
          <a href="#" className="btn btn-primary">
          Earn Your Certificate
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><IoChatbubbleOutline /><use xlinkHref="#tools"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Discussion Forum</h3>
          <p> Collaborate and learn with a thriving community.</p>
          <a href="#" className="btn btn-primary">
          Join the Discussion
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><PiVideoLight /><use xlinkHref="#tools"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Content Sharing</h3>
          <p> Be a creator, upload videos, and share knowledge.</p>
          <a href="#" className="btn btn-primary">
          Upload Your Content
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><LiaCertificateSolid /><use xlinkHref="#tools"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Gamified Experience</h3>
          <p> Earn badges as you learn and grow</p>
          <a href="#" className="btn btn-primary">
          Track Your Progress
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><SiCompilerexplorer /><use xlinkHref="#tools"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Code Anywhere</h3>
          <p>Access an integrated online compiler.</p>
          <a href="#" className="btn btn-primary">
          Try Online Compiler
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><FaRegPenToSquare /><use xlinkHref="#tools"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Note-Taking Made Easy</h3>
          <p>Take and save notes directly on the platform</p>
          <a href="#" className="btn btn-primary">
          Start Taking Notes
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><SiChatbot /><use xlinkHref="#tools"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Chatbot Support</h3>
          <p> Instant help, whenever you need it.</p>
          <a href="#" className="btn btn-primary">
          Ask for Help
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Features;