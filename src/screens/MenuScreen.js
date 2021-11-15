import "./MenuScreen.css";
import { Fade } from "react-awesome-reveal";
import Heading from "../Heading";
import React, {useState, useRef} from 'react';
import {makeStyles, Grid,Button} from '@material-ui/core';
import QrReader from 'react-qr-reader';



function MenuScreen() {
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
              <Heading heading="UPLOAD QR CODE" />
            </Fade>

            <Fade>
                  <center>
                  <Grid className="gridlayout" item xl={4} lg={4} md={6} sm={12} xs={12}
                  >
                    <QrReader
                      ref={qrRef}
                      delay={300}
                      style={{width: '100%'}}
                      onError={handleErrorFile}
                      onScan={handleScanFile}
                      legacyMode
                    />
                    <h3 className="scanResult"><center>{scanResultFile}</center></h3>
                    <br />
                    <br />
                    <br />
                    <center><Button className={classes.btn} variant="contained" color="#ffa600" onClick={onScanFile}>UPLOAD QR CODE</Button></center>

                  </Grid>
                  </center>
            </Fade>

            <Fade>
              <Heading heading="SCAN QR CODE" />
            </Fade>

            <Fade>
              <center>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}> 
                  <QrReader
                 delay={300}
                 style={{width: '100%'}}
                 onError={handleErrorWebCam}
                onScan={handleScanWebCam}
             />
              <br />
              <br />
              <br />
              <h3>{scanResultWebCam}</h3>
              </Grid>
              </center>
              <br />
              <br />
              <br />
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
      color: '#fff',
      padding: 20
    },
    btn: {
      marginTop: 10,
      marginBottom: 20,
      background: '#ffa600',
      fontSize: 20
    },
    result: {
      justifyContent: 'center'
    }
    
}));

export default MenuScreen
