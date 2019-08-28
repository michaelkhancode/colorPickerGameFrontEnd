import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const rgbString = () => {
    return `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
};

const body = document.querySelector("body");

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: ""
            // passwordValue: ""
        }
    }

    handleChange = (event) => {
        this.setState({ emailValue:event.target.value })
    }

    handleSubmit = (event) => {
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
                            type="email"
                            name="email"
                            value={this.state.emailValue}
                            onChange={ this.handleChange }
                            variant="outlined"
                        />
                        <TextField
                            margin="normal"
                            id="signin-password"
                            label="Password"
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
                                Register
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        );
    }
} 

export default Signin