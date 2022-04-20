import {Container, Nav, Navbar} from "react-bootstrap";
import style from "../style/components/_header.scss";

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/home" className={style.title}>묵-념</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">시리즈</Nav.Link>
                    <Nav.Link href="#features">일정</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header