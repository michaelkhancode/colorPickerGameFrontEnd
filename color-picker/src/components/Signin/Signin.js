import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom"

const rgbString = () => {
    return `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
};

const body = document.querySelector("body");

const urlServer = "http://localhost:3000/";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: "",
            passwordValue: ""
        }
    }

    validateEmail(email) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegEx.test(String(email).toLowerCase());
    }

    validatePassword(password) {
        var passwordRegEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})"); // 1 lowercase, 1 uppercase, 1 numeric, at least 6 chars long
        return passwordRegEx.test(String(password) );
    }


    handleChange = (event) => {
        switch (event.target.id) {
            case "signin-email":
                this.setState({ emailValue:event.target.value })
                break;
            case "signin-password":
                this.setState({ passwordValue:event.target.value })   
                break;
            default:
                break;
        }
    }

    handleSubmit = (event) => {
        
        console.log(
            "email pass-fail",
            this.validateEmail(this.state.emailValue)
        )

        console.log(
            "password pass-fail",
            this.validatePassword(this.state.passwordValue)
        )
        event.preventDefault();
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
                            id="signin-email"
                            label="Email"
                            // type="email"
                            name="email"
                            value={this.state.emailValue}
                            onChange={ this.handleChange }
                            variant="outlined"
                        />
                        <TextField
                            margin="normal"
                            id="signin-password"
                            label="Password"
                            value={this.state.passwordValue}
                            onChange={ this.handleChange }
                            type="password"
                            variant="outlined"
                        />
                        <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10px"}}>
                            <Button
                                style={{width:"100px"}}
                                variant="outlined" 
                                color="inherit"
                                type="submit"
                            >
                                SignIn
                            </Button>
                            <p>
                                <Link 
                                to="/register"
                                onClick= { () => clearInterval(this.timer) }
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        );
    }
} 

export default Signin

// fetch ("http://localhost:3000/imageface",{			
// method:'post',
// headers:{'Content-Type': 'application/json'},
// body: JSON.stringify({
//   input:this.state.input
// })
// })			
// .then(response => response.json())					
// .then( response => {
// if (response){
// fetch ("http://localhost:3000/image",{
//     method:'put',
//     headers:{'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         id:this.state.user.id
//     })
// })
// .then(data => data.json())
// .then(user => {
//   console.log(user)
//   this.displayFaceBox(this.calculateFaceCoordinates(response));  
//   this.updateUserState(user);
// })
// }
// }) 
// .catch( er => console.log(er) )
// };