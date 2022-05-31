import AppLayout from "../components/AppLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Subject from "../components/Subject";
import SeriesCard from "../components/SeriesCard";
import styles from "../style/components/_seriesCard.module.scss";

const Series = ()=>{

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