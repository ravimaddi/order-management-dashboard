import React from 'react'

export default class Search extends React.Component{

    constructor(props){
        super(props)
        this.state={
            pincode:'',
            date:''
        }
    }
    handleDate=(e)=>{
       //const dt=e.target.value
       //const newdt=dt.replace('-','/')
       this.setState({date:e.target.value},()=>this.handleSearch()) 
    }
    handlePincode=(e)=>{
        this.setState({pincode:e.target.value},()=>this.handleSearch())
        
    }
    handleSearch=()=>{
        const{pincode,date}=this.state
        let filterData=this.props.jsonData
        if(pincode){
            filterData=filterData.filter((r)=>{
                return r.deliveryPincode.includes(pincode)
            })
        }
        if(date){
            filterData=filterData.filter((r)=>{
                return r.orderDate.includes(date)
            })
        }
        this.props.handleFilteredData(filterData)
    }
    render(){
        return(
            <>
                <label>Filter by PinCode:
                <input type="text" name="pincode" onChange={this.handlePincode}/>
                </label>
                <label> or by Date:
                <input type="text" name="date" onInput={this.handleDate}/>
                </label>
            </>

        )
    }

}