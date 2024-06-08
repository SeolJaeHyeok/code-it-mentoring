'use client';

import Modal from '@/components/compound-modal';
import { useState } from 'react';

export default function Home() {
    const [value, setValue] = useState(1);
    return (
        <Modal>
            <Modal.Header>
                <Modal.Title>컴파운드 모달</Modal.Title>
                <Modal.Button>클릭</Modal.Button>
            </Modal.Header>
            <Modal.Content>
                <div>이거는 컨텐츠입니다.</div>
                <div>{value}</div>
            </Modal.Content>
            <Modal.Footer>
                <Modal.Button onClick={() => setValue((prev) => prev + 1)}>+</Modal.Button>
                <Modal.Button onClick={() => setValue((prev) => prev - 1)}>-</Modal.Button>
            </Modal.Footer>
        </Modal>
    );
}
