import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [error, setError] = useState(null);
    const [q, setQ] = useState("");

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
                <Form className="my-5 d-flex justify-content-center">
                    <Form.Control
                        placeholder="Search by country name"
                        className='w-25'
                       
                        onChange={e => setQ(e.target.value)}
                    />
                </Form>
                <div className='row'>
                    {
                        countries.filter(country => {
                            return q.toLowerCase() === " " ? country : country.name.common.toLowerCase().includes(q)
                        }).map((country, index) =>
                            <Country 
                            key={index}
                            country={country}
                            />
                        )
                    }
                </div>
            </Container>
        )
    }
}

export default Countries;
