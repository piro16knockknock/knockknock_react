import React, { forwardRef } from "react";
import { ICONS } from "lib/assets";
import styles from "styles/setting/modal-profile.module.css";
import Pie from "components/pie";
import Modal from "components/modal";

const ModalHeader = ({ setShow }) => {
  return (
    <>
      <span>프로필 보기</span>
      <img onClick={() => setShow(false)} src={ICONS.CLOSE} alt="close" />
    </>
  );
};

const ModalBody = ({ data }) => {
  return (
    <>
      <div className={styles[`profile-box`]}>
        <img
          className={styles[`profile-img`]}
          src={`${data[`profile_img`]}`}
          alt="profile"
        />
        <div className={styles[`name`]}>
          <span>{data[`nick_name`]}</span>
        </div>
      </div>
      <div className={styles[`title`]}>
        <h3>칭호</h3>
      </div>
      <ul className={styles[`my-title-list`]}>
        <li className={styles[`my-title`]}>
          <span>빨래의 신</span>
        </li>
      </ul>
      <div className={styles[`title`]}>
        <h3>달성률</h3>
      </div>
      <ul className={styles[`pies`]}>
        <li>
          <Pie
            percentage={90}
            width={100}
            barColor={`#FFC56D`}
            fontSize={16}
            barSize={18}
          />
          <span>오늘 날짜 달성률</span>
        </li>
        <li>
          <Pie
            percentage={100}
            width={100}
            barColor={`#89BA9F`}
            fontSize={16}
            barSize={18}
          />
          <span>전체 달성률</span>
        </li>
      </ul>
    </>
  );
};
const ModalProfile = forwardRef(({ data, show = true, setShow }, ref) => {
  return (
    <>
      {show && (
        <Modal
          ref={ref}
          header={<ModalHeader setShow={setShow} />}
          body={<ModalBody data={data} />}
          height="80%"
        />
      )}
    </>
  );
});

export default ModalProfile;
