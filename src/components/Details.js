import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { BASE_URL } from './constants'

const StyledDetails = styled.div`
    
    margin: 4% 0 -3%;
    padding: .3% 3% 1.5%;
    border-radius:3px;
    box-shadow:1px 1px 5px grey;

    ${props => (props.type === 'Luke Skywalker' ? `background: rgba(97,186,91,0.7)` : null)}
    ${props => (props.type === 'C-3PO' ? `background: rgba(233,221,56,0.7)` : null)}
    ${props => (props.type === 'R2-D2' ? `background: rgba(198,198,198,0.7)` : null)}
    ${props => (props.type === 'Darth Vader' ? `background: rgba(255,27,27,0.7)` : null)}
    ${props => (props.type === 'Leia Organa' ? `background: rgba(111,217,255,0.7)` : null)}
    ${props => (props.type === 'Owen Lars' ? `background: rgba(201,180,137,0.7)` : null)}
`
const StyledInfo = styled.div`
    margin-top:-1%;
    display:flex;
    width:50%;
    justify-content:flex-start;
`
const StyledInfo2 = styled.div`
    margin-left:100px;
`

export default function Details(props) {

    const { characterId, close } = props
    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}${characterId}/`)
            .then( res => {
                setDetails(res.data)
            })
            .catch( err => {
                console.log('error')
            })
    }, [characterId])

    return (
        <StyledDetails type={details && details.name}>
            <h3>Details:</h3>
            {
                details &&
                <>
                    <h4>{details.name} (Born: {details.birth_year})</h4>
                    <StyledInfo>
                        <div>
                            <p>Gender: {details.gender}</p>
                            <p>Height: {details.height} cm</p>
                            <p>Mass: {details.mass} kg</p>
                        </div>
                        <StyledInfo2>
                            <p>Hair Color: {details.hair_color}</p>
                            <p>Skin Color: {details.skin_color}</p>
                            <p>Eye Color: {details.eye_color}</p>
                        </StyledInfo2>
                    </StyledInfo>
                    <div>
                        <p>Featured in:</p>
                        <ul>
                            {
                                details.films.map( item => {
                                    if(item === 'http://swapi.dev/api/films/1/'){
                                        return <li>A New Hope</li>
                                    } else if(item === 'http://swapi.dev/api/films/2/'){
                                        return <li>The Empire Strikes Back</li>
                                    } else if(item === 'http://swapi.dev/api/films/3/'){
                                        return <li>Return of the Jedi</li>
                                    } else if(item === 'http://swapi.dev/api/films/4/'){
                                        return <li>The Phantom Menace</li>
                                    } else if(item === 'http://swapi.dev/api/films/5/'){ 
                                        return <li>Attack of the Clones</li>
                                    } else if(item === 'http://swapi.dev/api/films/6/'){
                                        return <li>Revenge of the Sith</li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                </>
            }
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}
