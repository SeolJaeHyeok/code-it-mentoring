import React, {
    ElementType,
    HTMLAttributes,
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from 'react';
import { createPortal } from 'react-dom';

export const ModalContext = createContext<{
    open: boolean | null;
    openModal: () => void;
    closeModal: () => void;
}>({
    open: null,
    openModal: () => {},
    closeModal: () => {},
});

export interface ModalProps
    extends PropsWithChildren<HTMLAttributes<HTMLElement> & { as?: ElementType }> {}

const ModalProvider = ({ children }: PropsWithChildren<object>) => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <ModalContext.Provider value={{ open, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

const Modal = ({ children, ...props }: ModalProps) => {
    return (
        <ModalProvider>
            {createPortal(<div {...props}>{children}</div>, document.body)}
        </ModalProvider>
    );
};

const ModalHeader = ({ children, as: Component = 'div', ...props }: ModalProps) => {
    return <Component {...props}>{children}</Component>;
};

const ModalTitle = ({ children, as: Component = 'div', ...props }: ModalProps) => {
    return <Component {...props}>{children}</Component>;
};

const ModalContent = ({ children, as: Component = 'div', ...props }: ModalProps) => {
    const { open } = useContext(ModalContext);
    return open && <Component {...props}>{children}</Component>;
};

const ModalFooter = ({ children, as: Component = 'div', ...props }: ModalProps) => {
    return <Component {...props}>{children}</Component>;
};

const ModalButton = ({ children, as: Component = 'button', ...props }: ModalProps) => {
    return <Component {...props}>{children}</Component>;
};

const ModalClose = ({ children, as: Component = 'button', ...props }: ModalProps) => {
    const { closeModal } = useContext(ModalContext);
    return (
        <Component onClick={closeModal} {...props}>
            {children}
        </Component>
    );
};

const ModalOpen = ({ children, as: Component = 'button', ...props }: ModalProps) => {
    const { openModal } = useContext(ModalContext);
    return (
        <Component onClick={openModal} {...props}>
            {children}
        </Component>
    );
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Button = ModalButton;
Modal.Close = ModalClose;
Modal.Open = ModalOpen;

export default Modal;
