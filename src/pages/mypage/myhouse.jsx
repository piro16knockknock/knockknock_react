import React, { useEffect } from "react";
import styles from "styles/mypage/myhouse.module.css";
import useModal from "hook/useModal";
import Modal from "components/modal";
import { ICONS } from "lib/assets";
import footer from "styles/setting/modal-search-footer.module.css";
import { useNavigate } from "react-router-dom";

const ModalHeader = ({ setShow }) => {
  return (
    <>
      <span>이사가기</span>
      <img onClick={() => setShow(false)} src={ICONS.CLOSE} alt="close" />
    </>
  );
};

const ModalBody = () => {
  return (
    <div className={styles[`modal-body`]}>
      정말로 이사가시겠습니까?
      <p>
        이사하실 경우 집 관련 전체 정보가 초기화되며, 일부 기록(거주 기간,
        생활수칙)을 제외한 모든 기록이 파기됩니다.
      </p>
    </div>
  );
};

const ModalFooter = ({ setShow }) => {
  const navigate = useNavigate();
  return (
    <div className={footer[`btn-row`]}>
      <span onClick={() => setShow(false)}>취소</span>
      <span
        className={footer[`highlight`]}
        onClick={() => {
          setShow(false);
          navigate("/");
        }}
      >
        이사가기
      </span>
    </div>
  );
};

const MyHouse = (props) => {
  const { modalShow, modal, setModalShow, handleCloseModal } = useModal({
    className: styles[`move-out`],
  });

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <section className={styles[`container`]}>
      <div className={styles[`title`]}>
        <h3>나의 집</h3>
      </div>
      <ul>
        <li className={styles[`house`]}>
          <span>❤킹갓제너럴 승빈이의 러블리하우스❤️</span>
          <button
            onClick={() => setModalShow(true)}
            className={styles[`move-out`]}
          >
            이사가기
          </button>
        </li>
      </ul>
      {modalShow && (
        <Modal
          ref={modal}
          header={<ModalHeader setShow={setModalShow} />}
          body={<ModalBody />}
          footer={<ModalFooter setShow={setModalShow} />}
          height="80%"
        />
      )}
    </section>
  );
};

export default MyHouse;
