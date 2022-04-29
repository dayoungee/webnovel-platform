import Header from "./Header";
import styles from "../style/components/_applayout.module.scss"

const AppLayout = ({ children }) =>{
    return(
        <div>
            <Header />
            <div className={styles.layout}>
                {children}
            </div>
        </div>
    );

}

export default AppLayout;
