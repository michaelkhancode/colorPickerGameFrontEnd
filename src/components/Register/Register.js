import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Alert from "../Alert/Alert"
import MainGame from '../../containers/MainGame/MainGame'

const rgbString = () => {
    return `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
};

const urlServer = "https://afternoon-savannah-78570.herokuapp.com/";

const body = document.querySelector("body");

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: "",
            usernameValue:"",
            passwordValue: "",
            validRegistration:false,
            error:[]
        }
    }

    registerValidator = () => {
        const { emailValue, usernameValue, passwordValue  } = this.state;
        const validateEmail = (email) => {
            var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegEx.test(String(email).toLowerCase());
        }
    
        const validatePassword = (password) => {
            var passwordRegEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})"); // 1 lowercase, 1 uppercase, 1 numeric, at least 6 chars long
            return passwordRegEx.test(String(password));
        }
    
        const validateUsername = (username) => {
            var usernameRegEx = new RegExp("(?=.{3,})"); // at least 6 chars long
            return usernameRegEx.test(String(username));
        }

        const fieldStatus = { email:validateEmail(emailValue), password:validatePassword(passwordValue), username:validateUsername(usernameValue) }
        const errorAlert = [];

        if (!fieldStatus.email) {
            errorAlert.push( "must enter a proper email address" )
        }

        if (!fieldStatus.password) {
            errorAlert.push( "password must have 1 lowercase, 1 uppercase, 1 numeric, and be at least 6 characters long" )
        }

        if (!fieldStatus.username) {
            errorAlert.push( "username must be at least 6 characters long" )
        }

        return errorAlert;

    }

    handleChange = (event) => {
        switch (event.target.id) {
            case "Register-username":
                this.setState({ usernameValue:event.target.value })
                break;
            case "Register-email":
                this.setState({ emailValue:event.target.value })
                break;
            case "Register-password":
                this.setState({ passwordValue:event.target.value })
            break;
            default:
                break;
        }
    }

    handleSubmit = (event) => {
        const validationArray = this.registerValidator()
        event.preventDefault();

        if (validationArray.length >= 1 ) {
            this.setState({ error:validationArray })
            event.preventDefault();
        } else {
            fetch (`${urlServer}register`,{			
                method:'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email:this.state.emailValue,
                    name:this.state.usernameValue,
                    password:this.state.passwordValue
                })
            })			
            .then(response => response.json())					
            .then( response => { 
                if (typeof(response) === "object") {
                    clearInterval(this.timer)
                    body.style.backgroundColor  = "white";
                    this.props.newUser(response)
                    // this.setState ( 
                    //     (state) => {
                    //       return { user:response }
                    //     }, () => {
                    //         this.setState({validRegistration:true})
                    //     }
                    // ) 
                }else {
                    let error = [response]
                    this.setState( { error } )
                    event.preventDefault();
                }
            })
        }
    }

    componentDidMount() {
        const title = document.querySelector("#title");
        const initialColor = rgbString();
        body.style.backgroundColor  = initialColor;
        title.style.color = initialColor;
        this.timer = setInterval( () => { 
            let newColor = rgbString();
            body.style.backgroundColor = newColor;
            title.style.color = newColor;
        }, 5000)
    }

    render () {
        const flexContainer = {
            display:"flex", 
            flexDirection:"column"
        };

        return (
                    <div>
                        <Card style={{height:"auto", width:"400px", margin:"50px auto"}}> 
                            <CardContent>
                                <form 
                                    style={flexContainer}
                                    onSubmit={this.handleSubmit}
                                >
                                    <h1 id="title" style={{margin:"auto"}}>
                                        RGB Color Game
                                    </h1>
                                    <TextField
                                        margin="normal"
                                        id="Register-username"
                                        label="Username"
                                        name="Username"
                                        variant="outlined"
                                        value={this.state.usernameValue}
                                        onChange={ this.handleChange }
                                    />
                                    <TextField
                                        margin="normal"
                                        id="Register-email"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        variant="outlined"
                                        value={this.state.emailValue}
                                        onChange={ this.handleChange }
                                    />
                                    <TextField
                                        margin="normal"
                                        id="Register-password"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        value={this.state.passwordValue}
                                        onChange={ this.handleChange }
                                    />
                                    <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10px"}}>
                                        <Button
                                            style={{width:"100px"}}
                                            variant="outlined" 
                                            color="inherit"
                                            type="submit"
                                            onClick={this.handleClick}
                                        >
                                            Register
                                        </Button>
                                        <p style={{cursor:"pointer"}}
                                            onClick= { () =>{
                                                clearInterval(this.timer)
                                                this.props.changePath("/") 
                                            }}
                                            >
                                                SignIn
                                        </p>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                        <Alert error={this.state.error} />
                    </div>
        );
    }
} 

export default Register;

