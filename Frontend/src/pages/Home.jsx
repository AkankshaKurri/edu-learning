import React from 'react';
import Features from '../components/Homepage/Features.jsx';
import Heroes from '../components/Homepage/Heroes.jsx';


const Home = () => {
  return <>
    <div className="content">  
          <Heroes/>
          <Features/>
    </div>
  </>
}

export default Home;
