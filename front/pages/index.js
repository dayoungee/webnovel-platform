import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Slider from "../components/Slider";
import AppLayout from "../components/AppLayout";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {LOAD_USER_REQUEST} from "../reducers/user";

const Main = () => {

/*    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
           type:LOAD_USER_REQUEST,
        });
    },[])*/

    return (
        <AppLayout>
            <Slider />
        </AppLayout>
    );

}

export default Main;