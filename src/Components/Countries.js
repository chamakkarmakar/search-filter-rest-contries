import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

const Countries = () => {
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Countries
