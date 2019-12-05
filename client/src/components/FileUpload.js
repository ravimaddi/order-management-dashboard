import React from 'react'
import axios from '../config/axios'

export default class FileUpload extends React.Component{

    constructor(props){
        super(props)
        this.state={
            file:''
        }
    }

    handleFile=(e)=>{
        const file = e.target.files
        this.setState({file:file[0]})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append('file',this.state.file)
        axios.post('/upload',formData)
        .then((response)=>{
            const data=response.data
            this.props.handleData(data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label><strong>Upload-File:</strong>
                <input type="file" onChange={this.handleFile}/>
                </label>
                <input type="submit" className="btn btn-primary"/>
            </form>
            </>
        )
    }

}