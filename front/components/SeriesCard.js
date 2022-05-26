import { Card, Button } from "react-bootstrap";

const SeriesCard = ({ props }) =>{
    return(
        <span>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src= { props.image } />
                <Card.Body>
                    <Card.Title>{ props.title }</Card.Title>
                    <Card.Text>
                        { props.context }
                    </Card.Text>
                    <Button variant="primary">보러가기</Button>
                </Card.Body>
            </Card>
        </span>
    )

}

export default SeriesCard;