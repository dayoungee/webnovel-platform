import Header from "./Header";

const AppLayout = ({ children }) =>{
    return(
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );

}

export default AppLayout;
