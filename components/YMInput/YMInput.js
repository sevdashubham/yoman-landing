import React, { Component } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
        height:48px;
     padding: 0 10px;
     font-weight: 400;
     font-family: 'Poppins', sans-serif;
        background: #FDFDFD;
        border: 1px solid rgba(0, 0, 0, 0.2);
        boxSizing: border-box;
        color: rgba(21, 37, 59, 0.5);
        width:${props => props.widthStr};
`

class YMInput extends Component {

    handleChange = (e) => {
        if (this.props.formName == 'user registration') {
            this.props.handleChangeProp(e.target.value, this.props.stateKey)
        }
    }

    render() {
        const { widthStr, title } = this.props;

        return (
            <InputStyle {...{ widthStr, title }} type='text' placeholder={title}
                        onChange={this.handleChange} />
        )
    }
}
export default YMInput
