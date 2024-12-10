import React from 'react'
import cars from '../cars.json'
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router"


// import MUI components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from '@mui/material'

const Car = (props) => {
    const { id } = useParams()
    const found = cars.find((car) => car.id === parseInt(id))
    
    return (
        <>
        <Container maxWidth="sm">
        <Paper elevation={3} className="car-paper">
        <h1>Make & Model: {found.Name.toUpperCase()}</h1>
        <Chip label={<p>Year: {found.Year}</p>} />
        <Chip label={<p>Weight: {found.Weight_in_lbs}lbs</p>} />
        <Chip label={<p>MPG: {found.Miles_per_Gallon}</p>} />
        <Chip label={<p>Horsepower: {found.Horsepower}</p>} />
        <Chip label={<p>Cylinders: {found.Cylinders}</p>} />
        <Chip label={<p>Origin: {found.Origin}</p>} />        
        </Paper>
        </Container>
        </>
    )
}

export default Car