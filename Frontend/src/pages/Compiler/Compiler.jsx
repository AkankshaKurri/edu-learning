import React from 'react';
import { useState, useRef } from 'react';
import Editor from "@monaco-editor/react";
import CodeOutput from "../../components/Compiler/CodeOutput";
import LanguageSelector from "../../components/Compiler/LanguageSelector";
import styles from "../Compiler/Compiler.module.css";
import {CODE_SNIPPETS}  from '../../pages/Compiler/constants';


const Compiler = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS["java"]);
  const [language, setLanguage] = useState("java");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const onSelect = (language)=>{
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  }


  return <>
      <div className={styles.language}>
        <LanguageSelector language={language} onSelect={onSelect}/>
      </div>
      <div className="row m-2">
        <div className="col code">
          <Editor
            height="80vh"
            width = "50vw"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            onMount={onMount}
          /> 
        </div>
        <div className={`col ${styles.output}`}>
           <CodeOutput editorRef={editorRef} language={language}/>
        </div>
      </div>
  </>
}

export default Compiler;
