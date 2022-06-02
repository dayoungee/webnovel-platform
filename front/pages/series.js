import AppLayout from "../components/AppLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Subject from "../components/Subject";
import SeriesCard from "../components/SeriesCard";
import styles from "../style/components/_seriesCard.module.scss";
import {useDispatch, useSelector} from "react-redux";

const Series = ()=>{
    const { seriesData } = useSelector((state)=>state.series);

    return(
        <AppLayout>
            <Subject/>
            <div className={styles.title}>
                추천 시리즈
            </div>
            {seriesData.map((data)=>{
                return(
                    <SeriesCard props={data}/>
                );
            })}
        </AppLayout>
    )

}

export default Series;