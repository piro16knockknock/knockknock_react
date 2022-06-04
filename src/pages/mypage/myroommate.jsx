import React, { useState, useRef, useEffect } from "react";
import styles from "styles/mypage/myroommate.module.css";
import { ICONS } from "lib/assets";
import { roommateList } from "lib/dummy_roommate";
import Modal from "components/setting/modal-profile";

const MyRoommate = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [index, setIndex] = useState(0);

  const modal = useRef();
  const openBtn = useRef();

  const handleCloseModal = (e) => {
    if (
      modal.current &&
      !modal.current.contains(e.target) &&
      e.target.className !== styles[`info-edit-btn`]
    ) {
      setModalShow(false);
      return;
    }
  };

  useEffect(() => {
    setDatas(roommateList);
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, []);

  return (
    <section className={styles[`container`]}>
      <div className={styles[`title`]}>
        <h3>나의 룸메이트</h3> <img src={ICONS.BORDER_PLUS} alt="plus" />
      </div>
      <ul>
        {datas.map((v, i) => {
          return (
            <li className={styles[`roommate`]} key={i}>
              <span>{v.nick_name}</span>
              <button
                onClick={() => {
                  setModalShow(true);
                  setIndex(i);
                }}
                className={styles[`info-edit-btn`]}
              >
                프로필 보기
              </button>
            </li>
          );
        })}
      </ul>
      <Modal
        data={datas[index]}
        ref={modal}
        show={modalShow}
        setShow={setModalShow}
      />
    </section>
  );
};

export default MyRoommate;
