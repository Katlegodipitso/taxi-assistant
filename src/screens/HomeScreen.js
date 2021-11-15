import "./HomeScreen.css";
import { Fade } from "react-awesome-reveal";
import React, {useState, useRef} from 'react';
import {makeStyles, Grid,Button} from '@material-ui/core';
import FooterSecondary from "../FooterSecondary";


function HomeScreen() {
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const classes = useStyles();
  const qrRef = useRef(null);

  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
    if (result) {
        setScanResultFile(result);
    }
}
const onScanFile = () => {
  qrRef.current.openImageDialog();
}
const handleErrorWebCam = (error) => {
  console.log(error);
}
const handleScanWebCam = (result) => {
  if (result){
      setScanResultWebCam(result);
  }
 }
    return (
        <div className="homeScreen">
            <Fade>
                <div className="homeScreen__top">
                <h4>
                The safety and well-being of minibus taxi commuters comes first in all that we do.
                </h4>
                </div>
            </Fade>
        </div>
        
    );
}
    const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff'
    },
    result: {
      justifyContent: 'center'
    }
    
}));

export default HomeScreen
