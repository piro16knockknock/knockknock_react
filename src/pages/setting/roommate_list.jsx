import React, { useState, useEffect } from "react";
import { roommateList } from "lib/dummy_roommate";
import SideMenu from "components/layout/side-menu";
import { setting } from "lib/side-menu-routes";
import RoommateCarousel from "components/setting/roommate-carousel";
import styles from "styles/setting/roommate_list.module.css";

const RoommateList = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(roommateList);
  }, []);

  return (
    <>
      <SideMenu {...setting} />
      <section className={styles[`container`]}>
        <h1 className={styles[`title`]}>룸메이트 관리</h1>
        <RoommateCarousel datas={datas} />
      </section>
    </>
  );
};

export default RoommateList;
