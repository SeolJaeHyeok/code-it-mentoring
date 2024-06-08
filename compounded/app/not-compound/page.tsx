'use client';

import NotCompoundModal from '@/components/not-compound-modal';
import React, { useState } from 'react';

function NotCompound() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {isOpen && <NotCompoundModal onClose={() => setIsOpen(false)} />}
            <button onClick={() => setIsOpen(true)}>모달 열기</button>
        </div>
    );
}

export default NotCompound;
