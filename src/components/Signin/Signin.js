import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MainGame from '../../containers/MainGame/MainGame'
import Alert from "../Alert/Alert"

const rgbString = () => {
    return `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
};

const body = document.querySelector("body");

const urlServer = "https://afternoon-savannah-78570.herokuapp.com/";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: "",
            passwordValue: "",
            // validLogIn:false,
            user:{},
            error:[]
        }
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
        
        fetch (`${urlServer}signin`,{			
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
              email:this.state.emailValue,
              password:this.state.passwordValue
            })
        })			
        .then(response => response.json())					
        .then( response => { 
            
            if (typeof(response) === "object") {
                clearInterval(this.timer)
                body.style.backgroundColor  = "white";
                this.props.validLogIn(response)
            }else {
                let error = [response]
                this.setState( { error } )
            }
        })

        event.preventDefault();
        this.setState( { error:[] } )
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

        console.log(this.props)
        
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
                            <p style={{cursor:"pointer"}}
                                onClick= { () =>{
                                    clearInterval(this.timer)
                                    this.props.changePath("/register") 
                                }}
                                >
                                    Register
                            </p>
                        </div>
                    </form>
                </CardContent>
                <Alert error={this.state.error} />
            </Card>
        );
    }
} 

export default Signin