import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/layout/header.module.css";
import { ICONS } from "lib/assets";
import NavBox from "./nav-box";
import MediaNav from "./media-nav";

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

const Header = () => {
  const navigate = useNavigate();
  const [livingShow, setLivingShow] = useState(false);
  const [settingShow, setSettingShow] = useState(false);
  const [mediaNavShow, setMediaNavShow] = useState(false);

  const handleLivingClose = (e) => {
    if (e.target.className !== `living-nav-box`) {
      setLivingShow(false);
    }
  };

  const handleSettingClose = (e) => {
    if (e.target.className !== `setting-nav-box`) {
      setSettingShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleLivingClose);
    window.addEventListener("click", handleSettingClose);

    return () => {
      window.removeEventListener("click", handleLivingClose);
      window.removeEventListener("click", handleSettingClose);
    };
  }, []);

  return (
    <header className={styles[`header`]}>
      <div className={styles[`logo`]} onClick={() => navigate("/")}>
        <img alt="logo" width={30} height={30} src={ICONS.LOGO} /> Knock/Knock
      </div>
      <nav className={styles[`nav`]}>
        <ul className={styles[`left-nav`]}>
          <li
            className={`living-nav-box`}
            onClick={() => setLivingShow((p) => !p)}
          >
            생활 관리
            <img
              src={ICONS.DOWN_ARROW}
              style={{ transform: "translateY(-50%)", marginLeft: ".5rem" }}
              alt="down arrow"
            />
            {livingShow && <NavBox category="living" list={livingNav} />}
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
            {settingShow && <NavBox category="setting" list={settingNav} />}
          </li>
        </ul>
        <ul className={styles[`right-nav`]}>
          <li onClick={() => navigate("/login")}>로그인</li>
          <li onClick={() => navigate("/mypage")}>마이페이지</li>
        </ul>
        <div className={styles[`media-nav`]}>
          <img
            onClick={() => {
              setMediaNavShow((p) => !p);
            }}
            width={30}
            height={30}
            src={ICONS.SETTING}
            alt="setting icon"
          />
          {mediaNavShow && <MediaNav />}
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
