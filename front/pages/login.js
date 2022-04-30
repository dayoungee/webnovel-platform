import AppLayout from "../components/AppLayout";
import styles from "../style/page/_signup.module.scss";
import Checkbox from "@mui/material/Checkbox";
import {Button} from "react-bootstrap";
import {SiNaver} from "react-icons/si";
import {AiOutlineMail} from "react-icons/ai";
import Link from "next/link";
import React from "react";

const Login = ()=>{
    return(
        <AppLayout>
            <div className={styles.pagelayout}>
                <div className={styles.title}>로그인</div>
                <div className={styles.subtext}>타이틀에 오신 것을 환영합니다!</div>
                <Button className={styles.signupButton} variant="outline-success" ><SiNaver/> 네이버로 로그인</Button><br/>
                <Button className={styles.signupButton} variant="outline-secondary"><AiOutlineMail/> 이메일로 로그인</Button><br/>
                계정이 없으신가요?
                <Link href="/signup"><a className={styles.signuptext}> 회원가입</a></Link>
            </div>
        </AppLayout>
    )
}

export default Login;