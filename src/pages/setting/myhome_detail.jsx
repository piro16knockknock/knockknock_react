import React, { useState, useEffect } from "react";
import SideMenu from "components/layout/side-menu";
import styles from "styles/setting/myhome_detail.module.css";
import { setting } from "lib/side-menu-routes";
import { ICONS } from "lib/assets";
import SelectBox from "components/setting/select-box";
import DateInput from "components/setting/date-input";
import { useNavigate } from "react-router-dom";
import Modal from "components/setting/modal-search";
import useModal from "hook/useModal";

const MyHomeDetail = (props) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("전세");
  const { modalShow, modal, setModalShow, handleCloseModal } = useModal({
    className: styles[`plus`],
  });

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, []);
  return (
    <>
      <SideMenu {...setting} />
      <Modal ref={modal} show={modalShow} setShow={setModalShow} />
      <section className={styles[`container`]}>
        <section>
          <h3 className={styles[`title`]}>집 정보</h3>
          <ul>
            <li className={styles[`info-row`]}>
              <label htmlFor="">현재 집이름</label>
              <p>킹갓제너럴 승빈이의 러블리하우스</p>
            </li>
            <li className={styles[`info-row`]}>
              <label htmlFor="">집 이름 변경</label>
              <input
                className={styles[`name-input`]}
                type="text"
                placeholder="변경할 집 이름을 입력하고 버튼을 눌러주세요"
              />
              <img
                className={styles[`edit-icon`]}
                src={ICONS.PENCIL}
                alt="edit"
              />
            </li>
            <li className={styles[`info-row`]}>
              <label htmlFor="">전세/월세</label>
              <SelectBox selected={category} setSelected={setCategory} />
            </li>
            {category === "월세" && (
              <li className={styles[`info-row`]}>
                <label htmlFor="">월세 납부일</label>
                <DateInput />
              </li>
            )}
            <li className={styles[`info-row`]}>
              <label htmlFor="">공과금 납부일</label>
              <DateInput />
            </li>
          </ul>
        </section>
        <section>
          <h3 className={styles[`title`]}>룸메이트</h3>
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
        </section>
        <section>
          <h3 className={styles[`title`]}>집 이전</h3>
          <div
            onClick={() => navigate("/mypage")}
            className={styles[`move-out`]}
          >
            이사가기
          </div>
        </section>
      </section>
    </>
  );
};

export default MyHomeDetail;
