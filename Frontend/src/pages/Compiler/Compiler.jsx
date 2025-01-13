import React from 'react';
import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import styles from "../Compiler/Compiler.module.css";

const files = {
  "script.py":{
     name: "script.py",
     language:"python",
     value:`print(hello world)`
  },

  "index.html":{
    name: "index.html",
    language: "html",
    value: "<div> </div>"
  },

  "index.cpp":{
    name: "index.cpp",
    language: "cpp",
    value: `#include <iostream>
int main() {
  std::cout << "Hello, C++ World!" << std::endl;
  return 0;
}`
  },

  "index.c":{
    name: "index.c",
    language: "c",
    value: `#include <stdio.h>
int main() {
  printf("Hello, C World!\\n");
  return 0;
}`
  }
}


const Compiler = () => {
  const [fileName , setFileName] = useState("script.py");
  const file = files[fileName]
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco){
    editorRef.current = editor;
  }


  return <>
      <div className={styles.language}>
        <div className={styles.text}>
          <h5 className={styles.langText}>Language</h5>
          <h5 className={styles.outputText}>Output</h5>
        </div>
          <button onClick={() => setFileName("script.py")} className="btn btn-outline-info m-2">Python</button>
          <button onClick={() => setFileName("index.html")} className="btn btn-outline-info m-2">HTML</button>
          <button onClick={() => setFileName("index.cpp")} className="btn btn-outline-info m-2">C++</button>
          <button onClick={() => setFileName("index.c")} className="btn btn-outline-info m-2">C</button>
          <button className={`${styles.runBtn} btn btn-outline-success`}>Run code</button>
      </div>

      <div className="row m-2">
        <div className="col code">
          <Editor
            height="80vh"
            width = "50vw"
            theme="vs-dark"
            path={file.name}
            onMount={handleEditorDidMount}
            defaultLanguage={file.language}
            defaultValue={file.value}
          />
        </div>
        <div className={`col ${styles.output}`}>
            <h3>Output</h3>
        </div>
      </div>
  </>
}

export default Compiler;
