import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards, searchCard } from '../redux/dishCardSlice';
import Spinner from 'react-bootstrap/Spinner';
import { Col, Container, Row } from 'react-bootstrap';
import Searchbar from './Searchbar';
import Pagination from 'react-bootstrap/Pagination';
import View from './View';
import { Link } from 'react-router-dom';




function Search() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const { allCards, error, loading } = useSelector(state => state.dishCardReducer)
  useEffect(() => {
    dispatch(fetchCards())
  }, [])


  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  
  return (
    <>
      {
        loading ?
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="grow" variant="warning" />
          </div>
          :
          <Row className='mt-5 my-5'>
            <div className='container'>
              <Searchbar />
            </div>
            {allCards?.length > 0 ?
              allCards?.slice(indexOfFirstCard, indexOfLastCard).map(card => (
                <Col key={card?.id} className='mt-5 my-5' sm={12} md={6} lg={4} xl={3}>
                  <Container>
                    <Link style={{ textDecoration: 'none' }} to={`/${card.id}/view`}>
                      <Card className='p-3' style={{ width: '18rem', backgroundColor: '#090a0a', border: '1px solid #face8d' }}>
                        <Card.Img variant="top" style={{ height: '20em' }} src={card?.photograph} />
                        <Card.Body>
                          <div className='d-flex'>
                            <Card.Title style={{ color: '#ffffff' }}>{card?.name.slice(0, 20)}</Card.Title>
                            <button className='btn'><MdOutlineRemoveRedEye style={{ backgroundColor: 'transparent', color: '#face8d' }} /></button>
                          </div>
                          <Card.Text style={{ color: '#ffffff99' }}>
                            <div>
                              City    : {card?.neighborhood}
                            </div>
                            <div className='mt-3'>
                              Cuisine : {card?.cuisine_type}
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>

                  </Container>
                </Col>
              ))
              :
              <div>
                <h1 className='text-center'>Product not Found</h1>
              </div>
            }
          </Row>
      }
      <Pagination className='justify-content-center'>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>    
      </>
  )
}

export default Search