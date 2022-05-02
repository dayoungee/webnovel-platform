import React from 'react';
import {Button} from "react-bootstrap";
import styles from '../style/components/_modal.module.scss'

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <>
            {open ? (
                <div className={styles.modal} onClick={close}>
                    <div className={styles.subModal}>
                   <div>{header}</div><span className={styles.cancelButton} onClick={close}>&times;</span>
                        <br/>
                    <p>{props.children}</p>
                    <Button className={styles.cancelButton} variant="outline-primary" onClick={close}>확인</Button>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;