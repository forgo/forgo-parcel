import React from 'react'
import MonacoEditor from 'react-monaco-editor'

export default class MyMonacoEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '// type your code..\nconst x = 23;',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor)
    editor.focus()
  }
  onChange(newValue, e) {

    console.log('onChange', newValue, e)
  }
  render() {
    const code = this.state.code
    const options = {
      selectOnLineNumbers: true,
      // colorDecorators: true,
      // rulers: [1,13,27],
      // formatOnType: true,
    };

    return (
      <MonacoEditor
        width="800"
        height="600"
        language="css"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    )
  }
}
