import React from 'react'
import { Container } from 'react-bootstrap'
import { ParticlesContainer } from '../components/ParticlesContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextLoop from 'react-text-loop'
import styled from 'styled-components'
import { Scroller } from '../components'
import { fab } from '@fortawesome/free-brands-svg-icons'
import details from '../data/details.json'

import PerfilImage from '../assets/images/perfil.png'

const Dot = styled.div({
    color: '#ff4c60',
    display: 'inline'
})

export class Home extends React.Component {
    render() {
        return (
            <section id="home" className="home d-flex align-items-center">
                <div>
                    <ParticlesContainer/>
                </div>
                <Container>
                    <div className="intro">
                        <img src={PerfilImage} width="100" alt="Carlos Esteves" className="mb-1" />

                        <h1 className="mb-2 mt-0">
                            {details.firstName}
                            <Dot>{details.middleName}</Dot>
                            {details.lastName}
                        </h1>

                        <span>
                            {`Desenvovedor Front End `}
                            <br/>
                            <TextLoop springConfig={{ stiffness: 180, damping: 25 }} interval={2000}>
                                {details.titles.map((t) => (<span style={{color: '#ff4c60', fontSize:'35px'}} key={t}>{t}</span>))}
                            </TextLoop>
                        </span>

                        <ul className="social-icons light list-inline mb-0 mt-4">
                            {details.socialNetworks.map(network => (
                                <li className="list-inline-item" key={network.iconName}>
                                    <a href={network.link} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={fab[network.iconName]} />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* <div className="mt-4">
                            <Scroller href="#contact" className="btn btn-kd">Contact me</Scroller>
                        </div> */}
                    </div>
                    <div className="scroll-down">
                        <Scroller href="#about" className="mouse-wrapper">
                            <span>Scroll Down</span>
                            <span className="mouse">
                                <span className="wheel" />
                            </span>
                        </Scroller>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Home
