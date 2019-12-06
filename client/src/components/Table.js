import React from 'react'

export default class Table extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    static getDerivedStateFromProps(props, state){
        state.data=props.jsonData
        return state
    }

    handleInc=()=>{
        this.setState((prevState)=>{
            return{
                data:prevState.data.sort((a,b)=>a.customerId-b.customerId)
            }
        })

    }
    handleDesc=()=>{
        this.setState((prevState)=>{
            return{
                data:prevState.data.sort((a,b)=>b.customerId-a.customerId)
            }
        })
    }
    render(){
        return(
            <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Customer Id 
                        <i onClick={this.handleInc} className="fas fa-sort-up fa-2x"></i>
                        <i onClick={this.handleDesc} className="fas fa-sort-down fa-2x"></i>
                        </th>
                        <th>Pin Code</th>
                        <th>Order Date</th>
                        <th>Items</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((r)=>{
                        const items=r.items.split(';')
                        items.pop()
                        return(
                            <tr key={r.orderId}>
                                <td>{r.orderId}</td>
                                <td>{r.customerId}</td>
                                <td>{r.deliveryPincode}</td>
                                <td>{r.orderDate}</td>
                                <td>{items.map((i,ind)=>{return <li style={{listStyle:'none'}} key={ind}>{i.replace(':','-')}</li>})}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        )
    }

}