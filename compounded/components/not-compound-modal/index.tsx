'use client';

import styles from './page.module.scss';

interface ModalProps {
    onClose?: () => void;
    onConfirm?: () => void;
}

const NotCompoundModal = ({ onClose, onConfirm }: ModalProps) => {
    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
    };

    return (
        <div style={{ background: 'red' }}>
            <div className={styles.header}>
                <h3>Title</h3>
                <button onClick={handleClose}>x</button>
            </div>
            <div>
                <div>Content</div>
            </div>
            <div>
                <button onClick={handleClose}>닫기</button>
                <button onClick={handleConfirm}>확인</button>
            </div>
        </div>
    );
};

export default NotCompoundModal;
