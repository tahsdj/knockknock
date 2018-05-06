import React from 'react'
import QrReader from 'react-qr-scanner'
import './scanner-page.sass'
 
export default class ScannerPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: '100vh',
      width: '100vw',
      objectFit: 'fill'
    }
 
    return(
      <div id="qrcode-scanner-container">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
        <div id="qr-code-outline">
          <div className="left-up"></div>
          <div className="right-up"></div>
          <div className="right-down"></div>
          <div className="left-down"></div>
        </div>
      </div>
    )
  }
}