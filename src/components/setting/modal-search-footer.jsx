import styles from "styles/setting/modal-search-footer.module.css";

const ModalSearchFooter = (props) => {
  return (
    <div className={styles[`btn-row`]}>
      <span>취소</span>
      <span>초대</span>
    </div>
  );
};

export default ModalSearchFooter;
