import React, { Component } from 'react'

export class GetUser extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            name:{},
            pic:""
       }
   }
   
   async componentDidMount()
    {
        let response=await fetch("https://api.randomuser.me/");
         let data= await response.json();
        this.setState({
            name:data.results[0].name,
            pic:data.results[0].picture.large
        })
    }
    render() {
        let {title,first,last}=this.state.name
        return (
            <div>
                <h1>{title} {first} {last}</h1>
                <img src={this.state.pic}></img>
            </div>
        )
    }
}

export default GetUser
