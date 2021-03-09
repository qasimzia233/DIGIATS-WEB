import React from 'react'
import { Card } from 'react-bootstrap'
const CardCustom = ({ imgsvg, title, paragraph }) => {
    return (

        <Card className='card-focus col-md-4 my-auto py-3  pl-3'>
            <svg xmlns={imgsvg} width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star mb-3 stroke-primary"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <Card.Title className='bold'>
                {title}
            </Card.Title>
            <Card.Text>
                {paragraph}
            </Card.Text>
        </Card>

    )
}

export default CardCustom
