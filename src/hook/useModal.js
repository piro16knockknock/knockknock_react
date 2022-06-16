import {useState, useRef} from 'react';

const useModal = ({className}) => {
    const [modalShow, setModalShow] = useState(false);
  
    const modal = useRef();
  
    const handleCloseModal = (e) => {
      if (
        modal.current &&
        !modal.current.contains(e.target) &&
        e.target.className !== className
      ) {
        setModalShow(false);
        return;
      }
    };
    return {modalShow, modal, setModalShow, handleCloseModal};
};

export default useModal;