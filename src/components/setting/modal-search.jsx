import React, { forwardRef } from "react";
import { ICONS } from "lib/assets";
import Modal from "components/modal";
import ModalSearchInput from "./modal-search-input";
import ModalSearchFooter from "./modal-search-footer";

const ModalHeader = ({ setShow }) => {
  return (
    <>
      <span>룸메이트 초대</span>
      <img onClick={() => setShow(false)} src={ICONS.CLOSE} alt="close" />
    </>
  );
};

const ModalBody = () => {
  return <ModalSearchInput />;
};

const ModalSearch = forwardRef(({ show = true, setShow }, ref) => {
  return (
    <>
      {show && (
        <Modal
          header={<ModalHeader setShow={setShow} />}
          body={<ModalBody />}
          footer={<ModalSearchFooter />}
          ref={ref}
          height="40%"
        />
      )}
    </>
  );
});

export default ModalSearch;
