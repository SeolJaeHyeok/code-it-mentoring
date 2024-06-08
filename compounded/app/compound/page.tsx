'use client';

import Modal from '@/components/compound-modal';
import { useState } from 'react';

import styles from './page.module.scss';

export default function Compound() {
    const [value, setValue] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <Modal className={styles.modal}>
                    <Modal.Header>
                        <Modal.Title>컴파운드 모달</Modal.Title>
                        <Modal.Close>모달 컨텐츠 닫기</Modal.Close>
                        <Modal.Open>모달 컨텐츠 열기</Modal.Open>
                        <Modal.Button onClick={() => setIsOpen(false)}>모달 전체 닫기</Modal.Button>
                    </Modal.Header>
                    <Modal.Content>
                        <div>이거는 컨텐츠입니다.</div>
                        <div>{value}</div>
                    </Modal.Content>
                    <Modal.Footer className={styles.footer}>
                        <Modal.Button onClick={() => setValue((prev) => prev + 1)}>+</Modal.Button>
                        <Modal.Button onClick={() => setValue((prev) => prev - 1)}>-</Modal.Button>
                    </Modal.Footer>
                </Modal>
            )}
            <button onClick={() => setIsOpen(true)}>모달 열기</button>
        </>
    );
}
