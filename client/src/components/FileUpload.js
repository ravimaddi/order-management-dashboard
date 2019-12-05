import React from 'react'
import axios from '../config/axios'

export default class FileUpload extends React.Component{

    constructor(props){
        super(props)
        this.state={
            file:'',
            isFormat:false
        }
    }

    handleFile=(e)=>{
        this.props.handleUploadMsg(false)
        if(e.target.files.length>0){
            if(e.target.files[0].type.includes('csv')){
            const file = e.target.files
            this.setState({file:file[0],isFormat:false})
            }
            else{
                this.props.handleUploadMsg(true,{err:'File Format must be CSV'})
                this.setState({isFormat:true})
            }  
        }
        else{
            this.setState({file:''})
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.isFormat){
            this.props.handleUploadMsg(true,{err:'File Format must be CSV'})  
        }
        else if(this.state.file===''){
            this.props.handleUploadMsg(true,{err:'Please upload a File.'}) 
        }
        else{
            this.props.handleUploadMsg(true,{err:'Please wait,The file is being processed.'})
            const formData=new FormData()
            formData.append('file',this.state.file)
            axios.post('/upload',formData)
            .then((response)=>{
                const data=response.data
                this.props.handleData(data)
                this.props.handleUploadMsg(false)
            })
            .catch((err)=>{
                this.props.handleUploadMsg(true,{err:`${err},File is not Supported.`}) 
            })
        }

    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label><strong>Upload-File:</strong>
                <input type="file" onChange={this.handleFile}/>
                </label>
                <input type="submit" className="btn btn-primary"disabled={this.state.isFormat} />
            </form>
            </>
        )
    }

}