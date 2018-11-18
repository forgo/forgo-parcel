import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';

// import 'brace/mode/java';
import 'brace/mode/javascript';
// import 'brace/theme/github';
import 'brace/theme/monokai';

import MonacoEditor from 'react-monaco-editor'

export default class MyAceEditor extends React.Component {

  handleChange = (newValue) => {
    console.log('change', newValue);
  }

  render(){
    return (
      <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={this.handleChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{$blockScrolling: true}}
      />
    )
  }
}
