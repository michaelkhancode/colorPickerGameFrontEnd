import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const urlServer = "https://afternoon-savannah-78570.herokuapp.com/";

  function createData(name, time) {
    return { name, time };
  }

  const formatTime = (timeInMs) => {
    let hours = (
        "0" + 
        Math.floor(timeInMs / 3600000) // total time in hours 
        ).slice(-2)                     // only take the last 2 numbers
    let minutes = (
        "0" +
        (
            Math.floor(timeInMs / 60000) // total time in minutes
            % 60                          // divide the hours, take the remaining minutes
        )).slice(-2);                     // only take the last 2 numbers
    // same idea for below, we get hours, minutes, seconds, centiseconds, to 2 points percision
    let seconds = ("0" + (Math.floor(timeInMs / 1000) % 60)).slice(-2);
    let centiseconds = ("0" + (Math.floor(timeInMs / 10) % 100)).slice(-2);
    return {hours, minutes, seconds, centiseconds};
  }

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                createData('3', null),
                createData('6', null),
                createData('9', null)
              ]
          }
      };

    componentDidMount() {
        fetch (`${urlServer}leaderboard`)
        .then(response => response.json())
        .then(response => {

            let time3 = formatTime(response[0].toptime3);
            let time6 = formatTime(response[1].toptime6);
            let time9 = formatTime(response[2].toptime9);

            let rows = [
                createData('3', `${response[0].name.toUpperCase()}: ${time3.minutes}:${time3.seconds}:${time3.centiseconds}`),
                createData('6', `${response[1].name.toUpperCase()}: ${time6.minutes}:${time6.seconds}:${time6.centiseconds}`),
                createData('9', `${response[2].name.toUpperCase()}: ${time9.minutes}:${time9.seconds}:${time9.centiseconds}`)
            ]
            this.setState({ rows })
        })			
    }

    render() {
        console.log(this.props);
        return (
            <Paper style={{width:"250px", margin:"auto", marginTop:"100px"}}>
                <h1 style={{textAlign:"center"}}>Leader Board</h1>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>Difficulty</TableCell>
                  <TableCell align="right">Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div>
              <Button size="small" color="primary" onClick={() => this.props.changePath("/maingame")} >
                      Back To Game
              </Button>
              <Button size="small" color="primary" onClick={() => this.props.changePath("/profile")} >
                        Profile
                </Button>
            </div>
            </Paper>
        );
    }
}

export default LeaderBoard;