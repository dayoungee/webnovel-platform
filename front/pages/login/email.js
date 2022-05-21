import styles from "../../style/page/_signup.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap";
import AppLayout from "../../components/AppLayout";
import React, {useCallback, useEffect, useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import Modal from "../../components/Modal"
import {useDispatch, useSelector} from "react-redux";
import useInput from "../../hooks/useInput";
import { loginRequestAction} from "../../reducers/user";
import Router from "next/router";

const Email = () =>{
    const dispatch = useDispatch();
    const { logInDone, logInError } = useSelector((state)=>state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    useEffect(()=>{
        if(logInDone){
            Router.replace('/');
        }
    },[logInDone]);

    useEffect(()=>{
        if(logInError){
            alert(logInError);
        }
    },[logInError]);

    const onSubmitForm = useCallback(()=>{
        console.log(email, password);
        dispatch(loginRequestAction({email, password}));
    },[email, password]);

    return(
        <AppLayout>
            <div className={styles.pagelayout}>
                <div className={styles.title}>이메일로 로그인</div>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="이메일" onChange={onChangeEmail}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="password" placeholder="비밀번호" onChange={onChangePassword} />
                    </Form.Group>
                    <Button className={styles.signupButton} variant="primary" onClick={onSubmitForm} >로그인</Button>
                </Form>
            </div>
        </AppLayout>
    )
}

export default Email;