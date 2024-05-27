import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdOutlineRemoveRedEye } from "react-icons/md";
function Search() {
  return (
    <>
      <div className='mt-5 container'>
        <input type="text" style={{ color: '#face8d', backgroundColor: 'transparent' }} className='form-control' placeholder='Explore the flavors' />
        <div className='mt-5'>
          <Card className='p-3' style={{ width: '18rem', backgroundColor: '#090a0a', border: '1px solid #face8d' }}>
            <Card.Img variant="top" src="https://i.redd.it/delaq3k0apw11.jpg" />
            <Card.Body>
              <div className='d-flex'>
                <Card.Title style={{ color: '#ffffff' }}>Card Title</Card.Title>
                <button className='btn'><MdOutlineRemoveRedEye style={{backgroundColor:'transparent',color:'#face8d'}}/></button>


              </div>              
              <Card.Text style={{ color: '#ffffff99' }}>
                <div>
                  City    : Manhattan
                </div>
                <div className='mt-3'>
                  Cuisine : Asian Cuisine
                </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>

    </>
  )
}

export default Search