import React from 'react';
import './App.css';
import 'fontsource-roboto';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
    root: {
        margin: '5%',
        flexGrow: 1,
        position: 'relative'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    app: {
        backgroundColor: '#f5f5f5'
    },
    footerCopy: {
        flexGrow: 1
    },
    labelsFont: {
        fontSize: 38,
        fontFamily: 'impact',
        color: 'white',
        textShadow: '2px 2px black',
        textTransform: 'uppercase'
    },
    bottomLabel: {
        position: 'absolute',
        bottom: '10%',
        maxWidth: '80%',
        left:0,
        right:0,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    topLabel: {
        position: 'absolute',
        maxWidth: '80%',
        top: '10%',
        left:0,
        right:0,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    }
}));

function App() {
    const classes = useStyles();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const imageUrl = params.get("image_url");
    const topText = params.get("topText");
    const bottomText = params.get("bottomText");

    return (
        <div className={classes.app}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Motivation Sharing with DynamicLinks
                    </Typography>
                </Toolbar>
            </AppBar>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={imageUrl} >
                    <text className={[classes.topLabel, classes.labelsFont].join(' ')}> {topText} </text>
                    <text className={[classes.bottomLabel, classes.labelsFont].join(' ')}> {bottomText} </text>
                </CardMedia>

            </Card>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography className={classes.footerCopy}>
                        This webpage is built by Vlad Spreys for the Dynamic Links tutorial.
                    </Typography>
                    <Button variant="contained" onClick={ () => {
                        window.open('http://spreys.com','_blank')
                    }}>Learn more</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;
