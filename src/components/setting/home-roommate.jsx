import React, { useEffect } from "react";
import { ICONS } from "lib/assets";
import styles from "styles/setting/myhome_detail.module.css";
import Modal from "components/setting/modal-search";
import useModal from "hook/useModal";

const HomeRoommate = () => {
  const { modalShow, modal, setModalShow, handleCloseModal } = useModal({
    className: styles[`plus`],
  });

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <>
      <Modal ref={modal} show={modalShow} setShow={setModalShow} />
      <ul className={styles[`roommate-list`]}>
        <li className={styles[`roommate`]}>
          <img
            className={styles[`profile-img`]}
            src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80"
            alt="profile"
          />
          <span className={styles[`name`]}>세윤</span>
        </li>
        <li>
          <img
            onClick={() => setModalShow(true)}
            className={styles[`plus`]}
            src={ICONS.PLUS}
            alt="add"
          />
        </li>
      </ul>
    </>
  );
};

export default HomeRoommate;
