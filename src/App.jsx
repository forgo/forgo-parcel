import React from 'react'

import MyMonacoEditor from './MyMonacoEditor'
import MyAceEditor from './MyAceEditor'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <MyAceEditor />
      </div>
    )
  }
}
