import React from 'react';
import {executeCode} from '../../pages/Compiler/api';
import {useState} from 'react';

const CodeOutput = ({editorRef, language}) => {
  const [output, setOutput] = useState(null);

  const runCode = async () => {
      const sourceCode = editorRef.current.getValue();
      if (!sourceCode) return;
      try {
        const {run: result} = await executeCode(language, sourceCode);
        setOutput(result.output);
      } 
      catch(error){
      console.error("Error:",error);
      }
  }


  return <>
    <button className="btn btn-outline-success" onClick={runCode}>Run code</button>
    <div className="output">
      <pre>{output ? output: 'Click "Run Code" to see the output here'}</pre>
    </div>  
  </>
};

export default CodeOutput;