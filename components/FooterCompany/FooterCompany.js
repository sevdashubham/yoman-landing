import React from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 40px 20px;
  background-color: rgba(236, 194, 172, 0.5);
  @media (max-width: 700px) {
   padding: 10px;
    }
  `

const StyledDateYear = styled.h6`
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.8em;
margin: 12px 0;
/* or 187% */
letter-spacing: 0.02em;
color: rgba(21, 37, 59, 0.3);
@media (max-width: 700px) {
    font-size: 0.7em;
    line-height: 20px;
    }
`

const StyledHelpLink = styled.a`
text-decoration: none;
cursor: pointer;
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.8em;
margin: 0;
letter-spacing: 0.02em;

color: rgba(21, 37, 59, 0.5);
@media (max-width: 700px) {
    font-size: 0.7em;
    line-height: 20px;
    }
`

const StyledHelpText = styled.h3`
letter-spacing: 0.02em;

color: rgba(21, 37, 59, 0.5);
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.8em;
margin: 0;
padding: 0 20px;
letter-spacing: 0.02em;
@media (max-width: 700px) {
     font-size: 0.7em;
     padding: 0 10px;
    line-height: 20px;
    }
`


const date = new Date();


class FooterCompany extends React.Component {

    render() {
        return (
            <StyledFooter>
                    <Grid container  direction="row">
                        <Grid item xs={6} md={6} container
                              direction="row"
                              justify="flex-start"
                              alignItems="center">
                            <StyledHelpLink href={'https://www.linkedin.com/company/yomandotin'} target="_blank" rel="noopener noreferrer">{'ABOUT US '}</StyledHelpLink><StyledHelpText>|</StyledHelpText>
                            <StyledHelpLink href={'mailto:anirudhs23@iimklive.com'}>
                                {' CONTACT US'}
                            </StyledHelpLink>
                        </Grid>
                        <Grid item xs={6} md={6} container
                              direction="row"
                              justify="flex-end"
                              alignItems="center">
                            <StyledDateYear>Copyright @{date.getFullYear()}</StyledDateYear>
                        </Grid>
                    </Grid>
            </StyledFooter>
        )
    }
}
export default FooterCompany;
