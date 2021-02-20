import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    margin-top:1%;
    width:40%;
    display:flex;
    justify-content:space-between;
    font-size:120%;
`

export default function Character(props) {

    const { info, chars, details } = props

    return (
        <StyledCharacter>
            {info.name}
            <button onClick={() => details(chars.indexOf(props.info))} >See Details</button>
        </StyledCharacter>
    )

}