import React, { useEffect, useState } from 'react'
import { Card, Container, Spinner,Button, Form  } from 'react-bootstrap';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(
                data => {
                    setIsLoad(true)
                    setCountries(data)

                },
                error => {
                    setIsLoad(true)
                    setError(error)
                }
            )
    }, [])

    if (error) {
        return <p>Error: {error.message}</p>
    } else if (!isLoad) {
        return <div className="position-relative">
            <Spinner className="mt-5 position-absolute start-50" animation="grow" />
        </div>
    } else {
        return (
            <Container fluid>
                
                <div className='row'>
                    {
                        countries.map((country, index) =>
                            <Card key={index} className='col-4 m-4 p-0' style={{ width: '18rem', height: '18rem' }}>
                                <img src={country.flags.png} className="w-100 h-50" alt={country.name.common} />
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
}

export default Countries;
