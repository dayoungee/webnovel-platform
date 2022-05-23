import AppLayout from "../components/AppLayout";
import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiNaver } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import {Button} from "react-bootstrap";
import Checkbox from '@mui/material/Checkbox';
import styles from '../style/page/_signup.module.scss'
import Link from 'next/link';
import Router from 'next/router';

const typeEmail = "email";
const typeNaver = "naver";

const serverDomain = "http://localhost:3002";

const Signup = () => {

    const [checked, setChecked] = useState(false);
    const [alertMessage, setAlertMessage] = useState(false); // 트루일 때 경고메시지를 띄운다

    const handleChange = useCallback(() => {
        setChecked(!checked);
    });

    const ageCheck = (type) => () =>{
        if (checked === true) {
            setAlertMessage(false);
            if(type === typeEmail){
                Router.push('/signup/email');
            }
            else if(type === typeNaver){
                Router.push(serverDomain + '/user/login/naver');
            }
            //통과 로그인 과정 ㄱㄱ
        } else { // 박스를 체크하지 않았을 때 경고메시지
            setAlertMessage(true);
        }
    }
        return (
            <AppLayout>
                <div className={styles.pagelayout}>
                    <div className={styles.title}>회원가입</div>
                    <div className={styles.subtext}>타이틀을 지금 바로 시작해보세요! 세로운 세계가 당신을 기다리고 있습니다.</div>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{'aria-label': 'controlled'}}/>만 14세 이상입니다.<br/>
                    {alertMessage && <div style={{color: 'red'}}>만 14세 이상만 가입이 가능합니다.</div>}
                    <Button className={styles.signupButton} variant="outline-success"
                            onClick={ageCheck("naver")}><SiNaver/> 네이버로 회원가입</Button><br/>
                    <Button className={styles.signupButton} variant="outline-secondary"
                            onClick={ageCheck("email")}><AiOutlineMail/> 이메일로 회원가입</Button><br/>
                    이미 계정이 있으신가요?
                    <Link href="/login"><a className={styles.logintext}> 로그인</a></Link>
                </div>
            </AppLayout>
        )
}
export default Signup;