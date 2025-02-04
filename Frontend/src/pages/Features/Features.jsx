import React from 'react';
import styles from '../Features/Features.module.css'

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Free Learning Resources</h5>
          <p className="card-text">Our platform offers a wide range of high-quality learning resources, all available for free. Whether you’re a beginner or an experienced learner, you can access courses on various topics without spending a time. We believe that education should be accessible to everyone, and that’s why we provide free resources to help you develop new skills and knowledge at your own pace. No subscriptions, no hidden fees—just valuable content at your fingertips. Start learning today and make progress towards your goals!</p>
      </div>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Quiz & Certification</h5>
          <p className="card-text">Once you’ve completed a course or learned a new concept, take quizzes to test your understanding. Our quizzes are designed to help you assess your knowledge and improve in areas where needed. On top of that, you can earn certifications that validate your skills. These certificates are a great addition to your resume or portfolio, showcasing your hard work and achievements. With recognized certifications, you can stand out in a competitive job market or demonstrate your expertise in specific areas.</p>
      </div>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Discussion Forum</h5>
          <p className="card-text">Learning is not just about consuming content—it’s about interacting with others, sharing ideas, and collaborating. Our discussion forum brings learners together to exchange knowledge and help each other grow. Whether you need clarification on a topic, want to share your thoughts, or have questions, the forum is the place to engage with a community of like-minded individuals. Learn from others, contribute to discussions, and be part of a supportive learning environment.</p>
      </div>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Content Sharing</h5>
          <p className="card-text">If you have valuable knowledge or insights to share, our content-sharing feature allows you to upload your own educational videos. Whether you're teaching a skill, explaining a concept, or creating a tutorial, you can share your expertise with the community. Content creators can help others by contributing resources that can aid in the learning journey. Plus, sharing your content is a great way to build your personal brand and establish yourself as an expert in your field.</p>
      </div>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Gamified Experience</h5>
          <p className="card-text">Learning doesn’t have to be boring! Our platform offers a gamified experience that makes learning fun and engaging. As you complete courses, quizzes, and challenges, you’ll earn badges and rewards that track your progress. These achievements not only motivate you to keep learning but also provide a sense of accomplishment as you move through the platform. With our gamified elements, you’ll stay motivated and see your progress in real-time, making learning more interactive and enjoyable.</p>
      </div>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Code Anywhere</h5>
          <p className="card-text">For budding programmers and developers, coding is a vital skill that requires practice. Our online platform includes an integrated compiler that allows you to write, compile, and run code directly within the platform. Whether you’re learning a new programming language or testing your code, you don’t need to worry about installing or configuring compilers. Simply log in, start coding, and get instant feedback. You can code anywhere—whether you're on the go, at home, or in class.</p>
      </div>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Note-Taking Made Easy</h5>
          <p className="card-text">Organize your learning with our seamless note-taking feature. Take notes directly on the platform while you're watching a course or reading through material. Your notes are stored securely and are easy to access whenever you need to reference them. This eliminates the need for external tools or apps to manage your notes. Stay organized, keep all your notes in one place, and never lose track of important information again.</p>
      </div>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Chatbot Support</h5>
          <p className="card-text">Get instant support whenever you need it with our 24/7 AI-powered chatbot. Whether you have a technical issue, a question about course material, or need guidance on using the platform, our chatbot is here to assist you. It’s available anytime, ensuring that you never have to wait long for help. With AI-backed responses, the chatbot provides accurate and quick solutions to your inquiries, making your learning experience smooth and hassle-free.</p>
      </div>
      <div className={`${styles.cardBody} border border-1 p-3 w-20 shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <h5 className={styles.cardTitle}>Progress Tracker</h5>
          <p className="card-text">Stay on top of your learning with our intuitive progress tracker. You’ll be able to see exactly how much you’ve completed, track your milestones, and identify areas that need more attention. The tracker gives you a clear overview of your progress, motivating you to continue learning and achieve your goals. Whether you're working through a single course or multiple, you’ll always know where you stand and what comes next in your journey.</p>
      </div>
    </div>
  )
}

export default Features;
