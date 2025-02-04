import React from 'react'
import styles from '../About/About.module.css'
import imageeight from '../../../src/assets/imageeight.jpg'
import imagefour from '../../../src/assets/imagefour.jpg'
import imagefive from '../../../src/assets/imagefive.jpg'
import imagesix from '../../../src/assets/imagesix.jpg'
import imageseven from '../../../src/assets/imageseven.jpg'

const About = () => {
  return <>
    <div className={styles.container}>
             
      <section className="image">
         <h1 className={styles.heading}>Welcome to Bright Learning!</h1>
         <img className={`${styles.imageOne} border border-1 shadow p-3 mb-5 bg-body-tertiary rounded`} src={imageeight} alt='imagethree'></img>
         <h3 className={styles.subheading}>At Bright Learning, we are passionate about making education accessible, engaging, and effective for learners all around the world. We believe in the power of knowledge to transform lives and provide opportunities for personal and professional growth. Our platform is designed to support learners of all levels, from beginners to advanced, across a variety of subjects.</h3>
      </section>
      
      <section className="mission">
         <h1 className={styles.heading}>Our Mission</h1>
         <p className={styles.subheading}>Our mission is simple: to provide high-quality, free, and easily accessible learning resources that empower individuals to achieve their goals. Whether you're looking to learn a new skill, enhance your career prospects, or pursue your passion, we’re here to help you every step of the way. We aim to break down the barriers to learning by offering a comprehensive platform that combines education, collaboration, and innovation.</p>
      </section>
  
    <section className={styles.offerings}>
      <h1 className={styles.heading}>What We Offer</h1>
      <div className={`${styles.card} shadow p-3 mb-5 bg-body-tertiary rounded`}>
        <div className="card-body">
        <p><strong>Free Courses and Resources:</strong>We believe in making learning accessible for everyone. That’s why we offer a variety of free courses across multiple disciplines, ensuring that anyone, anywhere can access top-notch educational material without financial constraints.</p>
        <p><strong>Certification:</strong>Upon completing a course, you can earn a certificate to validate your skills. Our certifications are recognized and valued by employers and academic institutions, helping you stand out in a competitive job market.</p>
        <p><strong>Gamified Learning:</strong>Learning doesn’t have to be boring! We’ve incorporated gamified elements like badges, progress tracking, and challenges to make your educational journey more engaging and fun.</p>
        <p><strong>Community Support:</strong>Education is best when shared. Our platform features an interactive discussion forum where you can connect with other learners, ask questions, and collaborate on projects. You are never alone on your learning journey!</p>
        <p><strong>Content Sharing:</strong>We empower learners to contribute to the platform by uploading their own educational content. Whether you’re a content creator or someone with valuable knowledge to share, you can upload videos, tutorials, and other resources to help others learn.</p>
        <p><strong>Code Anywhere:</strong>For aspiring programmers, we provide a built-in code editor so you can practice coding directly on the platform, without the need for external tools or complicated setups. Code anytime, anywhere!</p>
        </div>
      </div>
    </section>
    
    <section className="values">
        <h1 className={styles.heading}>Our Values</h1>
        <div className="row">
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={imagefour}></img>
            <h2 className="fw-normal">Accessibility</h2>
            <p>We believe that everyone should have access to the resources they need to learn and grow. Our platform is designed to be intuitive and accessible to learners of all ages, backgrounds, and abilities.</p>
          </div>
          <div className="col-lg-3">
          <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={imagefive}></img>
            <h2 className="fw-normal">Collaboration</h2>
            <p>Learning is a community effort. We provide spaces where learners can interact, share ideas. Together, we can accomplish more.</p>
          </div>
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={imagesix}></img>
            <h2 className="fw-normal">Innovation</h2>
            <p>We are constantly exploring new ways to improve the learning experience. From interactive courses to AI-powered support, we aim to stay at the forefront of educational technology.</p>
          </div>
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={imageseven}></img>
            <h2 className="fw-normal">Integrity</h2>
            <p>We are committed to providing high-quality, reliable content that helps you succeed. Trust is the foundation of everything we do, and we strive to ensure that your learning experience is always meaningful and valuable.</p>
          </div>
        </div>
    </section>
    

    <section className="accordian">
        <h1 className={styles.heading}>Why Choose Us?</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Free & High-Quality Courses</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              We offer a growing library of free courses across a wide range of subjects. Whether you want to learn coding, design, marketing, or something else, we have resources to help you succeed.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Flexible Learning Paths</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              Our platform allows you to choose your own learning path, whether you're just starting or looking to deepen your knowledge. Learn at your own pace and on your own schedule.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Earn Recognized Certificates</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              We offer certifications for completing courses, which can be shared with potential employers to demonstrate your skills and knowledge.
              </div>
            </div>
          </div>
        </div>
    </section>

    <section className="vision">
       <h1 className={styles.heading}>Our Vision</h1>
       <p className={styles.subheading}>At Bright Learning, our vision is to create a global community of learners who are empowered to achieve their goals and pursue their passions. We see a future where everyone, regardless of their background or location, has the opportunity to access the best educational resources and achieve success on their terms.</p>
    </section>

    <section className="signup">
       <h1 className={styles.heading}>Join Us Today!</h1>
       <p className={styles.subheading}>Are you ready to start your learning journey? Sign up today and explore the wide range of courses and resources available to you. Whether you’re here to learn, share knowledge, or connect with others, we’re excited to have you as part of our community!</p>
    </section>
    
    </div>
  </>
}

export default About;



