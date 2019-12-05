import React from 'react';
import Table from './components/Table'
import FileUpload from './components/FileUpload'
import Search from './components/Search'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:[],
      filteredData:[],
      msg:false
    }
  }
  handleData=(data)=>{
    this.setState({data,filteredData:data})
  }
  handleFilteredData=(data)=>{
    this.setState({filteredData:data})
  }
  handleUploadMsg=(data)=>{
    this.setState({msg:data})
  }
  render(){
  return (
    <div align="center">
      <h2>Order Management Dashboard</h2>
      <br/>
      <FileUpload handleData={this.handleData} handleUploadMsg={this.handleUploadMsg}/>
      <br/>
      {(this.state.msg)?<h4>The File is being Processed,Please Wait..</h4>:null}
      {(this.state.data.length>0)? <Search handleFilteredData={this.handleFilteredData} jsonData={this.state.data}/>:null}
      <br/> <br/>
      {this.state.filteredData.length>0?<p>Showing {this.state.filteredData.length}  out of {this.state.data.length} orders</p>:null}
      {(this.state.data.length>0)?<Table jsonData={this.state.filteredData}/>:null}
    </div>
  );
  }
}

export default App; 
