import React from 'react'
import { Scroller } from '../components'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import details from '../data/details.json'
import { HeaderWrapper }  from "../styles/globals"

const Logo = styled.span({
    color: '#fff',
    fontSize: '36px',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 700,
    lineHeight: '36px'
})

const Dot = styled.span({
    color: '#ff4c60',
    display: 'inline'
})

export class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <header className="kd-header fixed-top">
                    <Navbar expand="lg" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">
                                <Logo>
                                    {details.firstName}
                                    <Dot>{details.middleName}</Dot>
                                    {details.lastName}
                                </Logo>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarNavDropdown" />
                            <Navbar.Collapse id="navbarNavDropdown">
                                <Nav className="ms-auto" as="ul">
                                    <Nav.Item as="li">
                                        <Scroller href="#home" className="nav-link">Home</Scroller>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Scroller href="#about" className="nav-link">Sobre</Scroller>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Scroller href="#education" className="nav-link">Formações &amp; Experiências</Scroller>
                                    </Nav.Item>
                                   <Nav.Item as="li">
                                        <Scroller href="#services" className="nav-link">Projetos</Scroller>
                                    </Nav.Item>
                                     {/* <Nav.Item as="li">
                                        <Scroller href="#contact" className="nav-link">Contato</Scroller>
                                    </Nav.Item> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            </HeaderWrapper>
        )
    }
}

export default Header
