import React, { forwardRef } from "react";
import { ICONS } from "lib/assets";
import styles from "styles/setting/modal-search.module.css";
import Modal from "components/modal";
const ModalHeader = ({ setShow }) => {
  return (
    <>
      <span>룸메이트 초대</span>
      <img onClick={() => setShow(false)} src={ICONS.CLOSE} alt="close" />
    </>
  );
};
const ModalSearch = forwardRef(({ show = true, setShow }, ref) => {
  return (
    <>
      {show && (
        <Modal
          header={<ModalHeader setShow={setShow} />}
          ref={ref}
          height="40%"
        />
      )}
    </>
  );
});

export default ModalSearch;
