import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Profile = ( props ) => {

    console.log(props)

    const DenseTable = () => {
        const useTableStyles = makeStyles(theme => ({
            root: {
            width: 'auto',
            },
            paper: {
            marginTop: theme.spacing(3),
            width: 'auto',
            overflowX: 'auto',
            marginBottom: theme.spacing(2),
            }
        }));
        
        function createData(name, time) {
            return { name, time };
          }
          

          const rows = [
            createData('3', (props.user.toptime3 == null) ? "N/A":props.user.toptime3),
            createData('6', (props.user.toptime3 == null) ? "N/A":props.user.toptime6),
            createData('9', (props.user.toptime3 == null) ? "N/A":props.user.toptime9)
          ];
          
        const classes = useTableStyles();
          
            return (
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Table className={classes.table} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Difficulty</TableCell>
                        <TableCell align="right">Time</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </div>
            );
          }

    const useStyles = makeStyles({
        card: {
            maxWidth: 345,
        },
    });
  const classes = useStyles();

  console.log(props)

  return (
    <div style={{display: "flex",justifyContent:"center",textAlign:"center", marginTop:"100px"}}>
        <Card style={{padding:"20px"}} className={classes.card}>
            <CardActionArea>
                <Typography style={{marginTop:"10px"}} gutterBottom variant="h5" component="h2">
                    {props.user.name.toUpperCase()}
                </Typography>
                <div style={{display:"flex"}}>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    style={{width:"150px", height:"auto", margin:"auto"}}
                    image="https://robohash.org/4.png"
                    title="Contemplative Reptile"
                    />
                    <div>
                        {DenseTable()}
                    </div>
                </div>
                <CardContent>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size="small" color="primary" onClick={() => props.changePath("/maingame")} >
                      Back To Game
                </Button>
                <Button size="small" color="primary" onClick={() => props.changePath("/leaderboard")} >
                      Leader Board
                </Button>
            </CardActions>
        </Card>
        
    </div>
  );
}

export default Profile;



