import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(
                data => {
                    setCountries(data)

                }
            )
    }, [])
    return (
        <Container fluid>
            <div className='row'>
            {
                countries.map(country =>
                    <Card className='col-4 m-4 p-0' style={{ width: '18rem', height: '18rem' }}>
                        <img src={country.flags.png} className="w-100 h-50" alt={country.name.common}/>
                        <Card.Body>
                            <Card.Title>{country.name.common}</Card.Title>
                            <Card.Text>
                                <p><b>Population:</b> {country.population} <br />
                                <b>Region:</b> {country.region} <br />
                                <b>Capital:</b> {country.capital}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
            </div>
        </Container>
    )
}

export default Countries
