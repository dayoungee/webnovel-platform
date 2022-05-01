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
            console.log("모달 ㄱ")
            openModal();
        }

    }

    const ageCheck = () => {
        // 박스를 체크했을 때 (14세 이상일 때)
        if (checked === true) {
            setAlertMessage(false);
            return false;
            //통과 로그인 과정 ㄱㄱ
        } else { // 박스를 체크하지 않았을 때 경고메시지
            setAlertMessage(true);
            return true;
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
                    <Modal open={modalOpen} close={closeModal} header="알림" />
                    <Button className={styles.signupButton} variant="primary" onClick={openModal}>회원가입</Button>
                </Form>
            </div>
        </AppLayout>
    )
}

export default Email;