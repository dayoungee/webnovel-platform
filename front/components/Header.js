import React from "react";
import {Container, Nav, Navbar, Button} from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
import styles from "../style/components/_header.module.scss";

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/"className={styles.title}>타이틀</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/series">시리즈</Nav.Link>
                    <Nav.Link href="/">일정</Nav.Link>
                </Nav>
                <Nav>
                    <Button className={styles.buttonStyle} variant="outline-secondary">로그인</Button>
                    <Button className={styles.buttonStyle} variant="secondary">회원가입</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header