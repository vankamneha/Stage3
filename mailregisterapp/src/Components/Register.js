import React, { Component } from 'react'

export class Register extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             password:"",
             errors:{
                name:"",
                email:"",
                password:""
             }
        }
    }
    
  validateForm=()=>
  {
   
        let nameError=this.state.name.length<5?"Name should have atleast 5 characters":"";
        let emailError=(this.state.email.includes('@') && this.state.email.includes('.'))?"":"Email is not Valid";
        let passwordError=this.state.password.length<8?"Password should have atleast 8 characters.":"";

       let err={
            name:nameError,
            email:emailError,
            password:passwordError
        }

  console.log(this.state.errors)

        this.setState(
            {
                errors:err
            },()=>{
                let {name,email,password}=this.state.errors
                console.log(name,email,password)
                 if(name!=="")
                  alert(name)
                 if(email!=="")
                 alert(email)
                 if(password!=="")
                 alert(password)
            })
        
 
  }
    handleChange=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit=(event)=>
    {
            event.preventDefault();
           
        this.validateForm();
     
           
    }
    render() {
        return (
            <div>
                <h1 style={{color:"red"}}>Register here!!!</h1>
  <form onSubmit={this.handleSubmit}>
    <table align="center">
      <tr>
        <td> <label>Name : </label></td>
        <td> <input name="name" value={this.state.name} onChange={this.handleChange}/></td>
      </tr>
      <tr>
        <td><label>Email : </label></td>

        <td><input name="email" value={this.state.email} onChange={this.handleChange}/></td>
      </tr>
      <tr>
        <td><label>Password : </label></td>

        <td><input name="password" value={this.state.password} onChange={this.handleChange}/></td>
      </tr>
    </table>
    <div>

      <input type="submit"/>
    </div>

  </form>
            </div>
        )
    }
}

export default Register
