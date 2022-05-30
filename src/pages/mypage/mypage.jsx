import React from "react";
import MyPageSide from "./mypage-side";
import SideMenu from "components/layout/side-menu";
import { myPage } from "lib/side-menu-routes";
import styles from "styles/mypage/mypage.module.css";
import MyRoommate from "./myroommate";
import MyTitle from "./mytitle";
import MyHouse from "./myhouse";
import Goal from "./goal";
import PrevHouse from "./prev-house";

const MyPage = (props) => {
  return (
    <>
      <SideMenu {...myPage} />
      <section className={styles[`container`]}>
        <div>
          <MyPageSide />
        </div>
        <div className={styles[`section-container`]}>
          <div>
            <MyRoommate />
          </div>
          <div>
            <MyHouse />
          </div>
          <div>
            <MyTitle />
          </div>
          <div>
            <Goal />
          </div>
          <div>
            <PrevHouse />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPage;
