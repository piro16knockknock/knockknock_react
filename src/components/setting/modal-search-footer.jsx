import styles from "styles/setting/modal-search-footer.module.css";

const ModalSearchFooter = ({ setShow }) => {
  return (
    <div className={styles[`btn-row`]}>
      <span onClick={() => setShow(false)}>취소</span>
      <span onClick={() => setShow(false)}>초대</span>
    </div>
  );
};

export default ModalSearchFooter;
