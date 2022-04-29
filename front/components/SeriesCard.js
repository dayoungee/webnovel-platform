import { Card, Button } from "react-bootstrap";
import styles from '../style/components/_seriesCard.module.scss'

const SeriesCard = () =>{
    return(
        <div>
            <div className={styles.title}>
                추천 시리즈
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/55998706/165961802-dd5400cb-f2d2-43c9-a846-384263c5b28a.png" />
                <Card.Body>
                    <Card.Title>타이틀</Card.Title>
                    <Card.Text>
                        내용
                    </Card.Text>
                    <Button variant="primary">보러가기</Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export default SeriesCard;