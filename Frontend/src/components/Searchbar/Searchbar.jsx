import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import styles from './Searchbar.module.css';

const Searchbar = () => {
  const [searchQuery , setSearchQuery] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const API_KEY = "AIzaSyAHmlIhVeKXKnasgUq4a-PYsEKF1Dg1Fn0";

  const handleSearch = async () => {
      if(!searchQuery) return;

      setLoading(true);
      setError("");
      setVideoData([]);

      //perform api request to youtube data api v3

      try{
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${API_KEY}&type=video`);
        const data = await response.json();
        console.log(data);
        setVideoData(data.items);
      }catch(error){
        setError(error)
      }finally{
        setLoading(false);
      }
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
                        <img src={video.snippet.thumbnails.medium.url} alt="{video.snippet.title}"/>
                   </div>
                   <div className="search_result_title_description">
                      <h3 className={styles.title}>{video.snippet.title}</h3>
                      <p className={styles.description}>{video.snippet.description}</p>
                      <button className={`${styles.button} bg-primary rounded-4 border border-1`}><a 
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                      >Watch Video</a></button>
                   </div>     
                </div>
           ))}

       </div>

    </section>
  );
}

export default Searchbar;
