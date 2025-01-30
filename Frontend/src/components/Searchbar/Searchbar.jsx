import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import styles from './Searchbar.module.css';

const Searchbar = () => {
  const [searchQuery , setSearchQuery] = useState("css");
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModel , setShowModal] = useState(false);
  const [selectedVideoId , setSelectedVideoId] = useState();

  const API_KEY = "AIzaSyAHmlIhVeKXKnasgUq4a-PYsEKF1Dg1Fn0";

  const handleSearch = async () => {
      if(!searchQuery) return;

      setLoading(true);
      setError("");
      setVideoData([]);

      //perform api request to youtube data api v3
      // videoCategoryId=27 for educational content ke liye
      // videoDuration=long for long VideoColorSpace, shorts exclude karne liye

      try{
        const query = `${searchQuery} education`
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=45&q=${query}&key=${API_KEY}&type=video&videoCategoryId=27&videoDuration=long`);
        const data = await response.json();
        setVideoData(data.items);
      }catch(error){
        setError(error)
      }finally{
        setLoading(false);
      }
  }   
  
  const openModal = (videoId) => {
     setSelectedVideoId(videoId);
     setShowModal(true);
  }

 const closeModal = () => {
    setShowModal(false);
    setSelectedVideoId(" ");
 }


  return (
    <section className={`${styles.searchSection}`}>
       <div className={styles.searchInputDiv}>
           <input
             type="text"
             placeholder="Search...."
             className={styles.searchInput}
             autoComplete="off"
             value={searchQuery}
             onChange={(e)=>setSearchQuery(e.target.value)}
           />
          <button 
            className={`text-bg-secondary border border-black ${styles.searchButton}`} 
            onClick={handleSearch}
            disabled={loading}
          >
            <FaSearch/> {loading ? "Searching..." : "Search"}
          </button>
       </div>

       <div className={styles.searchResultDiv}>
           {error && <div className="alert alert-danger">{error}</div>} 
      
           {videoData.map((video) => (
                <div className={`${styles.courseCard} shadow-sm p-3 bg-body-tertiary rounded border border-1`} key={video.id.VideoId}>
                   <div className="search_result_img">
                        <img 
                           src={video.snippet.thumbnails.medium.url} 
                           alt={video.snippet.title}
                           onClick={() => openModal(video.id.VideoId)}
                        />
                   </div>
                   <div className="search_result_title_description">
                      <h3 className={styles.title}>{video.snippet.title}</h3>
                      <p className={styles.description}>{video.snippet.description}</p>
                      <button className={`${styles.button} bg-primary rounded-4 border border-1`} onClick={() => openModal(video.id.videoId)}>Watch video</button>
                   </div>     
                </div>
           ))}


           {showModel && (
              <div className={styles.modalContainer}>
                 <div className={styles.videoPlayer}>
                 <button className={styles.closeModalButton} onClick={closeModal}>X</button>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                 </div>
              </div>
           )}
       </div>
    </section>
  );
}

export default Searchbar;
