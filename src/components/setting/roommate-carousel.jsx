import React, { useState, useRef, useEffect } from "react";
import ModalBtn from "components/setting/modal-btn";
import { ICONS } from "lib/assets";
import Modal from "components/setting/modal-profile";
import styles from "styles/setting/roommate_list.module.css";
import modalBtn from "styles/setting/modal-btn.module.css";
import useModal from "hook/useModal";

const RoommateCarousel = ({ datas }) => {
  const carouselRef = useRef();
  const [index, setIndex] = useState(0);
  const { modalShow, modal, setModalShow, handleCloseModal } = useModal({
    className: modalBtn[`button`],
  });
  const [margin, setMargin] = useState(0);
  const handleLeft = () => {
    setIndex((p) => p - 1);
    if (index === 0) {
      return;
    }
    setMargin((p) => p + 27);
  };
  const handleRight = async () => {
    setIndex((p) => p + 1);
    if (index === datas.length - 1) {
      return;
    }
    setMargin((p) => p - 27);
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <>
      <div>
        <button
          className={index === 0 ? `${styles[`hidden`]}` : undefined}
          onClick={handleLeft}
        >
          <img
            width={25}
            height={36}
            src={ICONS.LEFT_ARROW}
            alt="왼쪽 화살표"
          />
        </button>
        <div ref={carouselRef} className={styles[`carousel`]}>
          <div
            style={{ marginLeft: `${margin}rem` }}
            className={styles[`carousel-container`]}
          >
            {datas.map((v, i) => {
              const roommate = v;
              return (
                <div key={i} className={styles[`roommate`]}>
                  <img
                    className={styles[`profile-img`]}
                    src={`${roommate["profile_img"]}`}
                    alt="profile"
                  />
                  <span className={styles[`name`]}>
                    {roommate["nick_name"]}
                  </span>
                </div>
              );
            })}
          </div>
          <ModalBtn onClick={() => setModalShow(true)} label="프로필 보기" />
        </div>
        <button
          className={
            index === datas.length - 1 ? `${styles[`hidden`]}` : undefined
          }
          onClick={handleRight}
        >
          <img
            width={25}
            height={36}
            src={ICONS.RIGHT_ARROW}
            alt="오른쪽 화살표"
          />
        </button>
      </div>
      <Modal
        data={datas[index]}
        ref={modal}
        show={modalShow}
        setShow={setModalShow}
      />
    </>
  );
};

export default RoommateCarousel;
