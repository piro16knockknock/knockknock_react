import React, { useState } from "react";
import { ICONS } from "lib/assets";
import { useNavigate } from "react-router-dom";
import styles from "styles/layout/media-nav.module.css";
import MediaNavBox from "./media-nav-box";

const livingNav = [
  {
    label: "캘린더",
    path: "/home",
  },
  {
    label: "생활 수칙",
    path: "/home/living_rule",
  },
  {
    label: "가이드라인",
    path: "/home/guideline",
  },
];

const settingNav = [
  {
    label: "집 관리",
    path: "/setting/myhome_detail",
  },
  {
    label: "룸메이트 관리",
    path: "/setting/roommate_list",
  },
];

const MediaNav = (props) => {
  const navigate = useNavigate();

  const [livingShow, setLivingShow] = useState(false);
  const [settingShow, setSettingShow] = useState(false);
  return (
    <ul className={styles[`media-nav`]}>
      <li className={`living-nav-box`} onClick={() => setLivingShow((p) => !p)}>
        생활 관리
        <img
          src={ICONS.DOWN_ARROW}
          style={{ transform: "translateY(-50%)", marginLeft: ".5rem" }}
          alt="down arrow"
        />
        {livingShow && <MediaNavBox category="living" list={livingNav} />}
      </li>
      <li>성향 테스트</li>
      <li>커뮤니티</li>
      <li
        className={`setting-nav-box`}
        onClick={() => setSettingShow((p) => !p)}
      >
        설정
        <img
          src={ICONS.DOWN_ARROW}
          style={{ transform: "translateY(-50%)", marginLeft: ".5rem" }}
          alt="down arrow"
        />
        {settingShow && <MediaNavBox category="setting" list={settingNav} />}
      </li>
      <li onClick={() => navigate("/login")}>로그인</li>
      <li onClick={() => navigate("/mypage")}>마이페이지</li>
    </ul>
  );
};
export default MediaNav;
