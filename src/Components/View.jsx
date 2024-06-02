import React, { useEffect, useState } from 'react'
import { Row, Col, Button, ButtonGroup, Card } from 'react-bootstrap'
import { MdRateReview } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import '../App.css'



function View() {

    const { id } = useParams()
    const [card, setCard] = useState({})
    const [color,setColor] = useState(false)
    const [togglButton, setTogglButton] = useState('Review')

    


    useEffect(() => {
        if (localStorage.getItem('allCards')) {
            const allCards = JSON.parse(localStorage.getItem('allCards'))
            setCard(allCards.find(item => item.id == id))
        }
    }, [])

    const showReview = () => {
        setTogglButton('Review')
    }

    const showTiming = () => {
        setTogglButton('Timing')

    }

    const showDirection = () => {
        setTogglButton('Direction')
    }

    const display = () => {
        switch (togglButton) {
            case "Review":
                return (
                    <div className='scroll' style={{ overflow: 'scroll', height: '26em', width: '36em' }}>

                        {card.reviews?.length ?
                            (card.reviews.map((review, index) => (
                                <div>
                                    <Card className='mb-3' style={{ width: '35rem', backgroundColor: '#c09f6e66' }}>
                                        <Card.Body className='p-4'>

                                            <Card.Text>
                                                <h2 style={{ color: '#face8d' }}>{review.name}</h2>

                                                <p style={{ textAlign: 'justify', color: 'white' }}>{review.comments}</p>
                                                <h5 style={{ color: 'wheat' }} className='mt-3'>Rating : {review.rating}/5</h5>
                                                <h5 className='mt-3' style={{ fontSize: '1em', color: '#f5deb3b8' }}>{review.date}</h5>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                            )))
                            :
                            <div>
                                <h1>No reviews</h1>
                            </div>
                        }
                    </div>
                );
            case "Timing":
                return (
                    <div>
                        {
                            <div>
                            <Card style={{ width: '35rem', backgroundColor: '#c09f6e66' }}>
                                <Card.Body className='p-4'>

                                    <Card.Text>
                                        {card.operating_hours && Object.entries(card.operating_hours).map(([day, hours]) => (
                                            <h5 key={day} style={{ color: 'white' }}>
                                                <span style={{ color: "wheat" }} className='me-3'>{day}</span>: {hours}
                                            </h5>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        }                    
                        </div>
                );

            case "Direction":
                return (
                    <div>

                        <iframe src={`https://maps.google.com/maps?q=${card.latlng.lat},${card.latlng.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`} frameborder="0" width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                )

        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <div className='my-5'>
                            <img style={{ height: '53em', borderRadius: '20px' }} src={card?.photograph} alt="" />

                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <div style={{ marginTop: '5em', letterSpacing: '3px' }}>
                            <h5 className='text-light' style={{ fontSize: '1em' }}>Restaurent No : {card?.id}</h5>
                            <h1 className='text-light mt-5' style={{ lineHeight: '64px' }} >Name : {card?.name}</h1>
                            <h5 className='mt-3' style={{ fontSize: '1em', color: '#ffffff99' }}>Type :<span className='text-light ms-2'>{card?.cuisine_type}</span></h5>
                            <h5 className='mt-3' style={{ fontSize: '1em', color: '#ffffff99' }}>City : <span className='text-light ms-2'>{card?.neighborhood}</span></h5>
                            <h5 className='mt-3' style={{ fontSize: '1em', color: '#ffffff99' }}>Address : <span className='text-light ms-2'>{card?.address}</span></h5>
                        </div>

                        <div className='mt-5'>
                            <ButtonGroup aria-label="Basic example">
                                <button className='btn' onClick={showReview} style={{ color: togglButton === 'Review' ? '#face8d' : '#ffffff',border:'none' }}><MdRateReview className='me-2' />Reviews</button>
                                <button className='btn' onClick={showTiming} style={{ color: togglButton === 'Timing' ? '#face8d' : '#ffffff',border:'none' }}><IoMdTime className='me-2' />Timing</button>
                                <button className='btn' onClick={showDirection} style={{ color: togglButton === 'Direction' ? '#face8d' : '#ffffff',border:'none' }}><FaMapMarkerAlt className='me-2' /> Direction</button>
                            </ButtonGroup>
                            <div className='mt-4'>
                                {display()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default View