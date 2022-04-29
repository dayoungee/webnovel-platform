import styles from "../style/components/_subject.module.scss"
import { MdMenuBook } from "react-icons/md";


const iconClick = ()=>{
    const link = "/series/novel"
    location.href = link;
    location.replace(link);
    window.open(link);
};
const Subject = ()=>{
    return(
        <>
         <div className={styles.title}>주제별 모아보기</div>
            <MdMenuBook onClick={iconClick} className={styles.novelIcon} size = "60"/>
            <a href= "/series/novel" className={styles.name}>웹소설</a>
        </>
    )
}

export default Subject;