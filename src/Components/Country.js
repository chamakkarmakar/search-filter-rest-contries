import React from 'react'
import { Card } from 'react-bootstrap';


const Country = ({ country }) => {

    return (
        <Card className='col-4 m-4 p-0' style={{ width: '18rem', height: '18rem' }}>
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

export default Country
