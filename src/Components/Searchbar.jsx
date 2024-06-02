import React from 'react'
import { searchCard } from '../redux/dishCardSlice'
import { useDispatch } from 'react-redux'


function Searchbar() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='container'>
                <input onChange={e =>dispatch(searchCard(e.target.value.toLowerCase()))} type="text" style={{ color: '#face8d', backgroundColor: 'transparent' }} className='form-control' placeholder='Explore the flavors' />
            </div>
        </>
    )
}

export default Searchbar