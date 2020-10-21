import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import FooterCompany from "../components/FooterCompany";
import Hidden from "@material-ui/core/Hidden";
import YMInput from '../components/YMInput';
import YMButton from '../components/YMButton';
import moment from 'moment';

const StyledHeroImageMan = styled.img`
width:95%;
@media (max-width: 700px) {
    width: 100%;
}
`

const StyledCard = styled.div`
width: 31.625em;
height: 33.1875em;
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
padding:1.4em 2em 2.9em 1.875em ;
@media (max-width: 700px) {
    width: 345px;
    height: 500px;
    padding:0.2em 1em 1em 1em ;
    margin-bottom:1.5em;
    margin-left:auto;
    margin-right:auto;
  }
  `

const StyledHero1 = styled.div`
  position: relative;
  padding: 25px 10px 208px 10px;
  background: #ECC2AC;
  @media (max-width: 700px) {
    height:100%;
    padding: 25px 10px 25px 10px;
}
  `

const StyledHero2 = styled.div`
  position: relative;
  padding: 10px 0px 0px 10px;
  background: #15253B;
   @media (min-width: 1300px) {
     padding: 100px 0px 0px 0px;
  }
  `


const StyledHero2Title = styled.h1`
  text-align: right;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
  `

const StyledHeroTitleWhite = styled.h1`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #fff;
  `

const StyledHero2Image = styled.img`
 width: 100%;
 `

const StyledHero2WaveLower = styled.img`
 width: 100%;
 `

const StyledHero2Wave = styled.img`
 position: absolute;
 height: 5em;
 left: 0;
 bottom: 50px;
 `

const StyledHero2Text = styled.h2`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4em;
margin: 0 0 0 50px;
color: #15253B;
line-height: 1.3em;
  `

const StyledHero2Description = styled.h4`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
margin: 0 0 20px 0;
letter-spacing: 0.02em;
color: #15253B;
line-height: 1.5em;
  `

const StyledHero3 = styled.div`
  position: relative;
  padding: 100px 0;
 background: #ECC2AC;
 margin-top:-7px;
 @media (max-width: 700px) {
    padding: 50px 0 80px 0;
   }
   `

const StyledHero3ImageContainer = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: -30px 0 0 0;
 background: #FFFFFF;
 @media (max-width: 700px) {
    margin: 0;
    height: 82px;
    width: 82px;
}
 `

const ImageContainer3 = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: -30px 0 0 0;
 background: #FFFFFF;
 @media (max-width: 700px) {
    margin: 0;
    height: 164px;
  width: 164px;
}
 `

const Image3 = styled.img`
 height: 100px;
 `

const StyledHero3Wave = styled.img`
 width: 100%;
 `

const StyledHero5Wave = styled.img`
 height: 5em;
 @media (max-width: 700px) {
    height: 2em;
    padding-top:20px;
    padding-left:0px;
}
 `

const StyledHero3Image = styled.img`
 height: 120px;
 @media (max-width: 700px) {
    height: 50px;
}
 `

const StyledHero3Title = styled.h2`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4em;
line-height: 1.2em;
margin: 20px 0;
color: #FFFFFF;
@media (max-width: 700px) {
    text-align: center;
    width:80%;
    margin: auto;
    font-size: 36px;
line-height: 50px;
margin-bottom:0.5em;
}
 `

const StyledHero3Step = styled.h6`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.2em;
margin: 20px 0;
color: black;
 `

const StyledHero3StepText = styled.h5`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.2em;
line-height: 1.8em;
margin: 20px 30px 20px 0;
color: rgba(0, 0, 0);
@media (max-width: 700px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
margin: auto;
width:80%;
      } 
`

const StyledHero2StepText = styled.h5`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.2em;
line-height: 1.8em;
margin: 20px 30px 20px 0;
color: #fff;
@media (max-width: 700px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
margin: auto;
width:80%;
      } 
`

const StyledHero4 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 150px;
 background: #FFFFFF;
 `

const StyledHero4Image = styled.img`
  height: 30em;
 `

const StyledHero5 = styled.div`
 position: relative;
  padding: 0 0 100px 100px;
 background: #ECC2AC;
 @media (max-width: 700px) {
    margin-top: 1em;
  padding: 0 0 30px 30px;
}
 `

const StyledHero5Title = styled.h1`
  position: absolute;
  z-index: 20;
  right: 0;
  top: -80px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
@media (max-width: 700px) {
    font-size: 3.5em;
    text-align: right;
    top: -32px;
}
 `

const StyledHero5Container = styled.div`
 position: relative;
  padding: 200px 100px 200px 0;
   @media (min-width: 1300px) {
      padding: 200px 100px;
  }
 background: #ECC2AC;
 @media (max-width: 700px) {
    padding: 70px 10px 20px 0;
}
 `

const StyledHero5bar = styled.div`
 position: relative;
  padding: 150px 100px;
  @media (min-width: 1300px) {
      padding: 150px 200px;
  }
 background: rgba(236,194,172, 0.5);
 @media (max-width: 700px) {
    padding: 50px 10px 100px 30PX;
}
 `

const StyledHero5Text = styled.h3`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 5em;
line-height: 1.1em;
margin: 0 0 20px 0;
color: #15253B;
max-width: 700px;
text-transform: uppercase;

@media (max-width: 700px) {
    font-size: 2.25em;
    text-align: center;
    padding-top:1em;
}
 `

const StyledHero5Description = styled.h5`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.5em;
line-height: 2em;
margin: 0;
color: #15253B;
max-width: 900px;

@media (max-width: 700px) {
    font-weight: 400;
    font-size: 1.25em;
    line-height: 25px;
    margin-bottom:25px;
    text-align: center;
    }
 `


const StyledHeroDescriptionWhite = styled.h5`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.5em;
line-height: 2em;
margin: 0;
color: #fff;
max-width: 900px;

@media (max-width: 700px) {
    font-family: Poppins;
    width:70%;
    text-align: left;
    font-weight: 400;
    margin-top:80px;
    padding-left:55px;
    font-size: 1.25em;
    line-height: 25px;
    letter-spacing: 0.02em;
    }
 `

const StyledHero5barTitle = styled.h2`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4.5em;
line-height: 1.2em;
margin: 0;
color: #15253B;
max-width: 600px;
text-transform: uppercase;
@media (max-width: 700px) {
    font-weight: bold;
font-size: 36px;
line-height: 50px;
    }
 `


const StyledHero5barTitle2 = styled.h2`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4.5em;
line-height: 1.2em;
margin: 0;
color: #15253B;
max-width: 600px;
text-transform: uppercase;
@media (max-width: 700px) {
    font-weight: bold;
font-size: 36px;
line-height: 50px;
width:80%;
margin-top:70px;
    }
 `

const StyledHero5barDescription = styled.h5`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 2em;
margin: 0 0 20px 0;
color: #15253B;
max-width: 600px;
@media (max-width: 700px) {
  
font-size: 16px;
line-height: 30px;
    }
 `

const StyledHero6 = styled.div`
 position: relative;
  padding: 0 100px 100px 0;
 background: #FFFFFF;
 @media (max-width: 700px) {
    padding: 20px 10px 90px 10px;
    margin-top:0em;
  }
 `

const StyledHero6Container = styled.div`
 position: relative;
  padding: 200px 100px 100px 100px;
 background: #FFFFFF;
 @media (max-width: 700px) {
    padding: 20px 10px 10px 10px;
  }
 `

const StyledHero6Title = styled.h1`
  position: absolute;
  z-index: 20;
  left: 0;
  top: -80px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
@media (max-width: 700px) {
    font-size: 4em;
    top: -35px;
  }
 `

const StyledHero6Title2 = styled.h1`
 position: absolute;
 z-index: 20;
 right: 0;
 top: -80px;

 font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
@media (max-width: 700px) {
   font-size: 4em;
   top: -35px;
   margin-left:auto;
 }
`

const StyledHero6Description = styled.h5`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 0;
color: #15253B;
max-width: 350px;
@media (max-width: 700px) {
    max-width: 700px;
    width:70%;
    font-size: 16px;
    line-height: 30px;
    margin: auto;
    margin-top:35px;
    margin-bottom:20px;
    }
 `


const StyledHero6Description2 = styled.h5`
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 0;
color: #15253B;
max-width: 350px;
@media (max-width: 700px) {
  max-width: 700px;
  width:70%;
  font-size: 16px;
  line-height: 30px;
 
  margin-top:15px;
  margin-bottom:20px;
  }
`

const StyledHero6ProfileName = styled.h3`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.2em;
line-height: 2.5em;
margin: 0;
color: #15253B;
max-width: 350px;
 `

const StyledHero6ProfileText = styled.h4`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.2em;
margin: 0;
color: #15253B;
max-width: 350px;
 `

const StyledHero7 = styled.div`
 position: relative;
  padding: 100px;
 background: #ECC2AC;
 `

const StyledHero8 = styled.div`
 position: relative;
  padding: 250px 0 150px 100px;
   @media (min-width: 1300px) {
     padding: 250px 0 150px 150px;
     }
 background: #FFFFFF;
 `

const StyledHero8Title = styled.h1`
  position: absolute;
  z-index: 20;
  right: 0;
  top: -80px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
 `

const StyledHero8Description = styled.h5`
  position: absolute;
  z-index: 20;
  right: 0;
  top: 150px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 0 350px 0 0;
color: #15253B;
max-width: 350px;
 `

const StyledHero8Description2 = styled.h5`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 20px 0 30px 0;
color: #15253B;
max-width: 350px;
 `

const StyledHero8ClientName = styled.h3`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.2em;
line-height: 4em;
margin: 0;
color: #15253B;
 `

const StyledHero8ClientText = styled.h4`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: .9em;
line-height: 2em;
margin: 0;
color: #15253B;
 `

const StyledTableRowLeft = styled.div`
height: 4em;
width: 100%;
border: 1px solid rgba(21, 37, 59, 0.2);
border-left: none;
 `

const StyledTableRowTop = styled.div`
padding: 0;
height: 4em;
width: 100%;
border: 1px solid rgba(21, 37, 59, 0.2);
border-left: none;
border-top: none;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.5em;
letter-spacing: 0.02em;
color: #000000;
 `

const StyledTableRowRight = styled.div`
height: 4em;
width: 100%;
border-bottom: 1px solid rgba(21, 37, 59, 0.2);
padding: 0;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.5em;
letter-spacing: 0.02em;
color: #000000;
 `

const StyledHeroWave2 = styled.img`
 height: 5em;
 @media (max-width: 700px) {
   height: 2em;
}

`

const StyledHero3StepTitle = styled.h5`
 text-align: left;
 font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.5em;
line-height: 2.25em;
margin: 20px 30px 0px 0;
color: black;
text-transform: uppercase;
@media (max-width: 700px) {
 
margin: 20px 0px 0px 0;
    text-align: center;
font-size: 18px;
line-height: 27px;
    
  }
`
const StyledHero2StepTitle = styled.h5`
 text-align: left;
 font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.5em;
line-height: 2.25em;
margin: 20px 30px 0px 0;
color: #fff;
text-transform: uppercase;
@media (max-width: 700px) {
 
margin: 20px 0px 0px 0;
    text-align: center;
font-size: 18px;
line-height: 27px;
    
  }
`

const StyledLine = styled.div`
  width: 22em;
  height: 0px;
  margin-top: 2.6em;
  margin-right: 2em;
  border: 1px solid #15253b;
  @media (max-width: 700px) {
    width: 5em;
    
  }
`;

const StyledHero6Wave = styled.img`
height: 5em;
@media (max-width: 700px) {
    height: 2em;
    margin-left:220px;
}
`

const StyledHero6Wave2 = styled.img`
height: 5em;
@media (max-width: 700px) {
    height: 2em;
    margin-left:0px;
    margin-top:10px;
}
`

const StyledHero1WaveUpper2 = styled.img`
position: absolute;
top: 12em;
left: 5em;
 height: 2em;
 `

const StyledQuote = styled.h2`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4em;
line-height: 1.2em;
margin: 20px 0;
color: #15253B;

@media (max-width: 700px) {
    text-align: left;
    width:80%;
    margin: auto;
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
margin-bottom:0.5em;

text-transform: uppercase;
}
 `

const StyledBox = styled.div`
  position: relative;
  height:9em;
  width:9em;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 700px) {
    height:4.5em;
    width:4.5em;
}
  `


const StyledHeroImageContainer2 = styled.div`
border-radius: 50%;
height: 184px;
width: 184px;
display: flex;
justify-content: center;
align-items: center;
background: #ffffff;
text-align: center;
margin:auto
`;

const StyledHeroImage2 = styled.img`
height: 120px;
margin: 0;
`;

const StyledBlueBoxText = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: rgba(255, 255, 255);
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 0.75em;
    line-height:18px;
    width:80%;
    margin-left:4px;
}
`;

const StyledBoxText = styled.h2`
position:relative;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  text-align: center;
  color: black;
  margin:0;
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 0.75em;
}
`;


const StyledBoxTime = styled.h2`
position:relative;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.9em;
  margin:0;
  text-align: center;
  color: black;
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 1.5em;
}
`;

const StyledCardTitle = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3.75em;
text-transform: uppercase;
color: #15253B;
margin:0;
@media (max-width: 700px) {
  font-size: 36px;
  line-height: 50px;
  text-align:center;
margin-bottom:0.5em;
}
`


const StyledHero5TitleRES = styled.h1`
  position: absolute;
  z-index: 20;
  right: 0;
  top: -80px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
@media (max-width: 700px) {
    font-size: 4.5em;
    text-align: right;
    top: -38px;
}
 `

const StyledHero2TitleRES = styled.h1`
position: absolute;
z-index: 20;
left: 0;
top: -80px;
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #fff;
@media (max-width: 700px) {
  font-size: 4.5em;
  top: -35px;
}
 `

export default class Launch extends Component {

  state = {
    timeTillDate: "10 30 2020, 6:00 am",
    timeFormat: "MM DD YYYY, h:mm a",
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.state;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
        <div>
          <Hidden mdDown>
            <StyledHero1>
              <Grid container>

                <Grid item container xs={4} justify="center" alignItems="flex-start" style={{ position: 'relative' }}>
                  <Grid item container justify="center">
                    <Grid item direction='column'>
                      <StyledBox style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
                        <Grid container direction='column' justify='center' alignContent='center'>
                          <StyledBoxTime>{hours}</StyledBoxTime>
                          <StyledBoxText>hours</StyledBoxText>
                        </Grid>
                      </StyledBox>
                      <StyledBox style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                        <Grid container direction='column' justify='center'>
                          <StyledBoxTime>{minutes}</StyledBoxTime>
                          <StyledBoxText>minutes</StyledBoxText>
                        </Grid>
                      </StyledBox>
                      <StyledBox style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                        <Grid container direction='column' alignContent='center' justify='center'>
                          <Grid item>
                            <StyledBoxTime>{seconds}</StyledBoxTime>
                          </Grid>
                          <Grid item>
                            <StyledBoxText>seconds</StyledBoxText>
                          </Grid>
                        </Grid>
                      </StyledBox>
                    </Grid>

                    <Grid>
                      <StyledBox style={{ background: 'rgba(255, 255, 255, 0)' }}></StyledBox>
                      <StyledBox style={{ background: 'rgba(255, 255, 255)', height: '18em', width: '18em' }}>
                        <Grid container direction='column' alignItems='center' justify='center'>
                          <Grid item>
                            <StyledBoxTime>{days}</StyledBoxTime>
                          </Grid>
                          <Grid item>
                            <StyledBoxText>days</StyledBoxText>
                          </Grid>
                        </Grid>
                      </StyledBox>
                      {/* <StyledBox style={{ background: 'rgba(255, 255, 255)' }}></StyledBox> */}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container xs={8} direction='column' justify='flex-start' alignItems='flex-start' style={{ borderLeft: ' 1px solid rgba(21, 37, 59, 0.5)', paddingLeft: '50px' }}>
                  <StyledHero5Text>{'LAUNCHING SOON!'}</StyledHero5Text>

                  <StyledHero5Description>{'Get access to quality medication and doctor’s consultation, all from the comfort and privacy of your home, as and when you want it'}</StyledHero5Description>

                  <StyledCard>
                    <Grid container direction='column' justify='flex-start' style={{ paddingTop: '2em' }}>

                      <Grid item style={{ paddingBottom: '1em' }}>
                        <YMInput widthStr={"26.375em"} title={"Your Name"} />
                      </Grid>

                      <Grid item container direction='row' style={{ paddingBottom: '1em' }}>
                        <Grid item style={{ marginRight: '0.5em' }}>
                          <YMInput widthStr={"7.5625em"} title={"Age"} />
                        </Grid>
                        <Grid item >
                          <YMInput widthStr={"16.625em"} title={"How long have you had hair loss"} />
                        </Grid>

                      </Grid>

                      <Grid item style={{ paddingBottom: '1em' }}>
                        <YMInput widthStr={"26.375em"} title={"Phone"} />
                      </Grid>

                      <Grid item container style={{ paddingBottom: '1em' }}>
                        <YMInput widthStr={"26.375em"} title={"Email Address"} />
                      </Grid>

                      <Grid item style={{ paddingBottom: '1.875em' }}>
                        <YMInput widthStr={"26.375em"} title={"Address"} />
                      </Grid>

                      <Grid item >
                        <YMButton title={"SUBMIT"} />
                      </Grid>

                    </Grid>
                  </StyledCard>

                </Grid>
              </Grid>
            </StyledHero1>

            <StyledHero2>
              <Grid container>
                <Grid item xs={6}>
                  <StyledHeroTitleWhite style={{ marginTop: -200, position: 'relative', zIndex: 10 }}>
                    {'WHAT?'}
                  </StyledHeroTitleWhite>

                  <div style={{ paddingLeft: 50 }}>
                    <div>
                      <Grid item container justify="center" alignItems="flex-start" style={{ position: 'relative' }}>
                        <StyledHeroDescriptionWhite>{'consectetur adipiscing elit. Suspendisse id metus sed metus molestie molestie non at metus. Fusce vitae varius lectus, ut congue mi. '}</StyledHeroDescriptionWhite>
                      </Grid>
                      <Grid
                          item
                          container
                          justify='center'
                          alignItems='center'
                          style={{ paddingTop: "3em" }}>

                        <Grid item direction="column" md={4} xs={12}>
                          <StyledHeroImageContainer2>
                            <StyledHeroImage2 src={"/assets/landing/info1@3x.png"} />
                          </StyledHeroImageContainer2>
                          <StyledBlueBoxText>ICON TEXT</StyledBlueBoxText>
                        </Grid>

                        <Grid item direction="column" md={4} xs={12}>
                          <StyledHeroImageContainer2>
                            <StyledHeroImage2 src={"/assets/landing/info1@3x.png"} />
                          </StyledHeroImageContainer2>
                          <StyledBlueBoxText>ICON TEXT</StyledBlueBoxText>
                        </Grid>

                        <Grid item direction="column" md={4} xs={12}>
                          <StyledHeroImageContainer2>
                            <StyledHeroImage2 src={"/assets/landing/info1@3x.png"} />
                          </StyledHeroImageContainer2>
                          <StyledBlueBoxText>ICON TEXT</StyledBlueBoxText>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} style={{ display: 'inline', textAlign: 'right', marginTop: -300 }}>
                  <StyledHeroImageMan src={'/assets/landing/bald-man.png'} />
                </Grid>
              </Grid>
            </StyledHero2>

            <StyledHero3>
              <div style={{ marginTop: -200, position: 'relative', zIndex: 10 }}>
                <StyledHero2Title>
                  {'HOW?'}
                </StyledHero2Title>
              </div>
              <Grid container>
                <Grid xs={3} />

                <Grid xs={6}>
                  <Grid style={{ borderTop: '1px solid black', paddingBottom: 75 }}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                    <Grid item xs={2}>
                      <StyledHero3Step>{'STEP 1'}</StyledHero3Step>
                    </Grid>
                    <Grid item xs={4}>
                      <StyledHero3ImageContainer>
                        <StyledHero3Image src={'/assets/landing/info1@3x.png'} />
                      </StyledHero3ImageContainer>
                    </Grid>
                    <Grid item xs={6}>
                      <StyledHero3StepText> {'Answer a few basic questions and get in touch with one of our doctors for consultation'}</StyledHero3StepText>
                    </Grid>
                  </Grid>
                  <Grid style={{ borderTop: '1px solid black', paddingBottom: 75 }}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                    <Grid item xs={2}>
                      <StyledHero3Step>{'STEP 2'}</StyledHero3Step>
                    </Grid>
                    <Grid item xs={6}>
                      <StyledHero3StepText> {'Get FDA approved medicines tailored to your condition at the convenience of your home'}</StyledHero3StepText>
                    </Grid>
                    <Grid item xs={4}>
                      <StyledHero3ImageContainer>
                        <StyledHero3Image src={'/assets/landing/info2@3x.png'} />
                      </StyledHero3ImageContainer>
                    </Grid>
                  </Grid>
                  <Grid style={{ borderTop: '1px solid black', paddingBottom: 75 }}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                    <Grid item xs={2}>
                      <StyledHero3Step>{'STEP 3'}</StyledHero3Step>
                    </Grid>
                    <Grid item xs={4}>
                      <StyledHero3ImageContainer>
                        <StyledHero3Image src={'/assets/landing/info3@3x.png'} />
                      </StyledHero3ImageContainer>
                    </Grid>
                    <Grid item xs={6}>
                      <StyledHero3StepText>{'Track your progress and receive continuous support along the way'}</StyledHero3StepText>
                    </Grid>

                  </Grid>
                  <Grid style={{ borderTop: '1px solid black', paddingBottom: 75 }} />
                </Grid>

                <Grid xs={3} />
              </Grid>
            </StyledHero3>

          </Hidden>

          <Hidden lgUp>


            <StyledHero1>

              <Grid item container justify="center" direction='row' style={{ position: 'relative' }}>

                <StyledBox style={{ background: 'rgba(255, 255, 255,0.8)' }}>
                  <Grid container direction='column' alignItems='center' justify='center'>
                    <Grid item>
                      <StyledBoxTime>{days}</StyledBoxTime>
                    </Grid>
                    <Grid item>
                      <StyledBoxText>days</StyledBoxText>
                    </Grid>
                  </Grid>
                </StyledBox>
                <StyledBox style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
                  <Grid container direction='column' justify='center' alignContent='center'>
                    <StyledBoxTime>{hours}</StyledBoxTime>
                    <StyledBoxText>hours</StyledBoxText>
                  </Grid>
                </StyledBox>
                <StyledBox style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                  <Grid container direction='column' justify='center'>
                    <StyledBoxTime>{minutes}</StyledBoxTime>
                    <StyledBoxText>minutes</StyledBoxText>
                  </Grid>
                </StyledBox>
                <StyledBox style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                  <Grid container direction='column' alignContent='center' justify='center'>
                    <Grid item>
                      <StyledBoxTime>{seconds}</StyledBoxTime>
                    </Grid>
                    <Grid item>
                      <StyledBoxText>seconds</StyledBoxText>
                    </Grid>
                  </Grid>
                </StyledBox>

              </Grid>

              <StyledHero5Text>{'LAUNCHING SOON!'}</StyledHero5Text>

              <StyledHero5Description>{'Get access to quality medication and doctor’s consultation, all from the comfort and privacy of your home, as and when you want it'}</StyledHero5Description>

              <StyledCard>
                <Grid container direction='column' justify='flex-start' style={{ paddingTop: '2em' }}>

                  <Grid item container style={{ paddingBottom: '1em' }}>
                    <YMInput widthStr={"26.375em"} title={"Your Name"} />
                  </Grid>

                  <Grid item container style={{ paddingBottom: '1em' }}>
                    <YMInput widthStr={"26.375em"} title={"Age"} />
                  </Grid>

                  <Grid item container style={{ paddingBottom: '1em' }}>
                    <YMInput widthStr={"26.375em"} title={"How long have you had hair loss"} />
                  </Grid>

                  <Grid item container style={{ paddingBottom: '1em' }}>
                    <YMInput widthStr={"26.375em"} title={"Phone"} />
                  </Grid>

                  <Grid item container style={{ paddingBottom: '1em' }}>
                    <YMInput widthStr={"26.375em"} title={"Email Address"} />
                  </Grid>

                  <Grid item container style={{ paddingBottom: '1.875em' }}>
                    <YMInput widthStr={"26.375em"} title={"Address"} />
                  </Grid>

                  <Grid item container style={{ marginBottom: '1.875em' }} >
                    <YMButton title={"SUBMIT"} />
                  </Grid>

                </Grid>
              </StyledCard>


            </StyledHero1>

            <StyledHero2>

              <StyledHero2TitleRES>{'WHAT?'}</StyledHero2TitleRES>

              <StyledHeroDescriptionWhite>{'consectetur adipiscing elit. Suspendisse id metus sed metus molestie molestie non at metus. Fusce vitae varius lectus, ut congue mi.'}</StyledHeroDescriptionWhite>

              <Grid container justify='space-evenly' direction='row' style={{ width: '80%', marginTop: '3em', paddingBottom: 7, marginRight: 'auto', marginLeft: 'auto' }}>

                <Grid item alignItems='center'>
                  <StyledHero3ImageContainer>
                    <StyledHero3Image src={'/assets/landing/info1@3x.png'} />
                  </StyledHero3ImageContainer>
                  <StyledBlueBoxText>NO HIDDEN TAXES</StyledBlueBoxText>
                </Grid>

                <Grid item >
                  <StyledHero3ImageContainer>
                    <StyledHero3Image src={'/assets/landing/info2@3x.png'} />
                  </StyledHero3ImageContainer>
                  <StyledBlueBoxText>NO HIDDEN TAXES</StyledBlueBoxText>
                </Grid>

                <Grid item >
                  <StyledHero3ImageContainer>
                    <StyledHero3Image src={'/assets/landing/info3@3x.png'} />
                  </StyledHero3ImageContainer>
                  <StyledBlueBoxText>NO HIDDEN TAXES</StyledBlueBoxText>
                </Grid>

              </Grid>

              <Grid item style={{ display: 'inline', marginTop: -300, marginRight: -200 }}>
                <StyledHeroImageMan src={'/assets/landing/bald-man.png'} />
              </Grid>

            </StyledHero2>

            <StyledHero3>

              <StyledHero5TitleRES>{'HOW?'}</StyledHero5TitleRES>

              <Grid container>

                <Grid >
                  <Grid style={{ marginTop: '3em', paddingBottom: 75 }}
                        container
                        direction='column'
                        justify="center"
                        alignItems="center">
                    <Grid item >

                    </Grid>
                    <Grid item >
                      <ImageContainer3>
                        <Image3 src={'/assets/landing/info1@3x.png'} />
                      </ImageContainer3>
                    </Grid>
                    <Grid item container justify='center' direction='column'>
                      <StyledHero3StepTitle>Step 1</StyledHero3StepTitle>
                      <StyledHero3StepText> Answer a few basic questions and get in touch with one of our doctors for consultation</StyledHero3StepText>
                    </Grid>
                  </Grid>

                  <Grid style={{ paddingBottom: 75 }}
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                    <Grid item >

                    </Grid>

                    <Grid item >
                      <ImageContainer3>
                        <Image3 src={'/assets/landing/info2@3x.png'} />
                      </ImageContainer3>
                    </Grid>

                    <Grid item container justify='center' direction='column'>
                      <StyledHero3StepTitle >Step 2</StyledHero3StepTitle>
                      <StyledHero3StepText> {'Get FDA approved medicines tailored to your condition at the convenience of your home'}</StyledHero3StepText>
                    </Grid>

                  </Grid>

                  <Grid style={{ paddingBottom: 0 }}
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                    <Grid item >

                    </Grid>
                    <Grid item >
                      <ImageContainer3>
                        <Image3 src={'/assets/landing/info3@3x.png'} />
                      </ImageContainer3>
                    </Grid>
                    <Grid item container justify='center' direction='column'>
                      <StyledHero3StepTitle >Step 3</StyledHero3StepTitle>
                      <StyledHero3StepText> {'Track your progress and receive continuous support along the way'}</StyledHero3StepText>
                    </Grid>

                  </Grid>
                </Grid>

              </Grid>

            </StyledHero3>

          </Hidden>

          <FooterCompany />
        </div >
    )
  }
}
