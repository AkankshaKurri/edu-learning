import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import styles from './Searchbar.module.css';

const Searchbar = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    
  }

  return (
    <section className={styles.searchSection}>
       <div className={styles.searchInputDiv}>
           <input
             type="text"
             placeholder="Search...."
             className={styles.searchInput}
             autoComplete="off"
             onChange={handleChange}
             value={search}
           ></input>
            <div className={styles.searchButton}>
              <FaSearch />
            </div>
       </div>

       <div className="search_result_div">
          <a href="#" target='_blank' className="search_result">Suggestion line 1</a>
       </div>

    </section>
  )
}

export default Searchbar
