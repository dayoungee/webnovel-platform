import AppLayout from "../components/AppLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Subject from "../components/Subject";
import SeriesCard from "../components/SeriesCard";
import styles from "../style/components/_seriesCard.module.scss";

const Series = ()=>{

    const testData = [
            {
                title: '닥터 네임즈',
                context: '어느 날 도은설 몸에 새겨진 이름, 너는 누구니?',
                image: 'https://user-images.githubusercontent.com/55998706/165961802-dd5400cb-f2d2-43c9-a846-384263c5b28a.png',
            },
            {
                title: '이리오너라',
                context: '돌쇠가 마님을 부르는데...',
                image: 'https://user-images.githubusercontent.com/55998706/165961802-dd5400cb-f2d2-43c9-a846-384263c5b28a.png',
            }
        ];


    return(
        <AppLayout>
            <Subject/>
            <div className={styles.title}>
                추천 시리즈
            </div>
            {testData.map((data)=>{
                return(
                    <SeriesCard props={data}/>
                );
            })}
        </AppLayout>
    )

}

export default Series;