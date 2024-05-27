import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/innsight.png'
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import Search from './Search';



function Landing() {
    return (
        <>
            <div className='land'>
                <Navbar style={{ backgroundColor: 'transparent' }}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <Nav className='m-auto'>
                                <img
                                    alt=""
                                    src={logo}
                                    width="150"
                                    height="100"
                                    className="d-inline-block align-top"
                                />{' '}


                            </Nav>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <div style={{ marginTop: '9em' }} className='container d-flex flex-column justify-content-center align-items-center'>
                    <h3 style={{ color: '#face8d', letterSpacing: '4px' }}>Discover the flavors of the world</h3>
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <button style={{ border: '1px solid #face8d', color: '#face8d', letterSpacing: '5px', fontWeight: '600' }} className='btn bn'>EXPLORE</button>

                    </div>
                </div>

            </div>

            <div>
                <Search/>
            </div>


        </>
    )
}

export default Landing