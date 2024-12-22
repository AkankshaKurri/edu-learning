import React from 'react';
import Features from '../components/Features.jsx';
import Heroes from '../components/Heroes.jsx';


const Home = () => {
  return <>
    <div className="content">  
          <Heroes/>
          <Features/>
    </div>
  </>
}

export default Home;
