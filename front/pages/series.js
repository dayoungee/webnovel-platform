import AppLayout from "../components/AppLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Subject from "../components/Subject";
import SeriesCard from "../components/SeriesCard";

const Series = ()=>{
    return(
        <AppLayout>
            <Subject/>
            <SeriesCard/>
        </AppLayout>
    )

}

export default Series;