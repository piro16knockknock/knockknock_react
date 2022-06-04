import React from "react";
import SideMenu from "components/layout/side-menu";
import styles from "styles/setting/myhome_detail.module.css";
import { setting } from "lib/side-menu-routes";
import { useNavigate } from "react-router-dom";
import HomeInfo from "components/setting/home-info";
import HomeRoommate from "components/setting/home-roommate";

const MyHomeDetail = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <SideMenu {...setting} />
      <section className={styles[`container`]}>
        <section>
          <h3 className={styles[`title`]}>집 정보</h3>
          <HomeInfo />
        </section>
        <section>
          <h3 className={styles[`title`]}>룸메이트</h3>
          <HomeRoommate />
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
