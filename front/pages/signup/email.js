import styles from "../../style/page/_signup.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap";
import AppLayout from "../../components/AppLayout";
import React, {useCallback, useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import Modal from "../../components/Modal"

const Email = () =>{

    const [checked, setChecked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleChange = useCallback(() => {
        setChecked(!checked);
    });
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const signupCheck= ()=> {
        if(checked){
            // 약관에 동의 했다! 회원가입 ㄱㄱ
        }
        else{
            // 모달 오픈\
            openModal();
        }

    }

    return(
        <AppLayout>
            <div className={styles.pagelayout}>
                <div className={styles.title}>이메일로 회원가입</div>
                <br/>
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
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{'aria-label': 'controlled'}}/>서비스 약관에 동의합니다.<br/>
                    <Button className={styles.signupButton} variant="primary" onClick={signupCheck}>회원가입</Button>
                    <Modal open={modalOpen} close={closeModal} header="알림" >서비스 약관에 동의해주세요.</Modal>
                </Form>
            </div>
        </AppLayout>
    )
}

export default Email;