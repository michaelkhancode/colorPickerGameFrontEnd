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

const urlServer = "http://localhost:3000/";

  function createData(name, time) {
    return { name, time };
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
            let rows = [
                createData('3', `${response[0].name.toUpperCase()} ${response[0].toptime3}`),
                createData('6', `${response[1].name.toUpperCase()}: ${response[1].toptime6}`),
                createData('9', `${response[2].name.toUpperCase()}: ${response[2].toptime9}`)
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