import React, { forwardRef, useEffect } from "react";
import { ICONS } from "lib/assets";
import styles from "styles/components/modal.module.css";
import Pie from "components/pie";

const Modal = forwardRef(({ data, show = true, setShow }, ref) => {
  return (
    <>
      {show && (
        <div className={styles[`modal-background`]}>
          <section className={styles[`modal`]} ref={ref}>
            <header className={styles[`modal-header`]}>
              <span>프로필 보기</span>
              <img
                onClick={() => setShow(false)}
                src={ICONS.CLOSE}
                alt="close"
              />
            </header>
            <section className={styles[`modal-body`]}>
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
            </section>
          </section>
        </div>
      )}
    </>
  );
});

export default Modal;
