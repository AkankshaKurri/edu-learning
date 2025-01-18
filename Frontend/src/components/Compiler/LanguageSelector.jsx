import React from 'react';
import { LANGUAGE_VERSIONS } from '../../pages/Compiler/constants';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const languages = Object.entries(LANGUAGE_VERSIONS)

const LanguageSelector = ({language, onSelect}) => {
  return <>
   <div className="dropdown">
     <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       {language}
     </button>
     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
       {
         languages.map(([language, version])=> (
           <a key={language} className="dropdown-item"  onClick={()=> onSelect(language)}>{language}<span>{version}</span></a> 
         ))
       }
     </div>
   </div>
</>
};

export default LanguageSelector;