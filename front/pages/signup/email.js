import styles from "../../style/page/_signup.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap";
import AppLayout from "../../components/AppLayout";
import React from "react";

const Email = () =>{
    return(
        <AppLayout>
            <div className={styles.pagelayout}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>이메일 주소</Form.Label>
                        <Form.Control type="email" placeholder="이메일 주소" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="email" placeholder="비밀번호" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>닉네임</Form.Label>
                        <Form.Control type="email" placeholder="닉네임" />
                    </Form.Group>
                    <Button variant="primary">회원가입</Button>
                </Form>
            </div>
        </AppLayout>
    )
}

export default Email;