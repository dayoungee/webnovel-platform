import React, {useCallback, useEffect} from "react";
import {Container, Nav, Navbar, Button} from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
import styles from "../style/components/_header.module.scss";
import Router from 'next/router';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER_REQUEST, logoutRequestAction} from "../reducers/user";

const goSignup = ()=>{
    Router.push('/signup');
}

const goLogin = () =>{
    Router.push('/login');
}
const Header = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state)=>state.user);

    const logout = useCallback(() =>{
        dispatch(logoutRequestAction());
    });

    useEffect(() => {
        dispatch({
            type:LOAD_USER_REQUEST,
        });
    },[])

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/"className={styles.title}>타이틀</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/series">시리즈</Nav.Link>
                    <Nav.Link href="/">일정</Nav.Link>
                </Nav>
                <Nav>
                    {me ? <div>안녕하세요 {me.nickname} 님. <Button className={styles.buttonStyle} variant="outline-secondary" onClick={logout}>로그아웃</Button></div>
                        :<div><Button className={styles.buttonStyle} variant="outline-secondary" onClick={goLogin}>로그인</Button>
                        <Button className={styles.buttonStyle} variant="secondary" onClick={goSignup}>회원가입</Button> </div>}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header