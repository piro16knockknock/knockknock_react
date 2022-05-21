import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content" style={{ display: "flex" }}>
        <div
          className="footer-1"
          style={{
            marginRight: "5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <a className="list-group-item-action footer-title" href="#intro-main">
            ©Knock/Knock
          </a>
          <p className="footer-subtitle">
            룸메이트와의 쾌적하고 편안한 생활 지킴이
          </p>
        </div>
        <div className="footer-li list-group">
          <div className="footer-2">
            <h5>
              <a className="list-group-item-action" href="#intro-persona">
                서비스 소개
              </a>
            </h5>
            <ul>
              <li className="footer-index">
                <a className="list-group-item-action" href="#intro-feat1">
                  룸메이트 관리
                </a>
              </li>
              <li className="footer-index">
                <a className="list-group-item-action" href="#intro-feat2">
                  생활수칙 관리
                </a>
              </li>
              <li className="footer-index">
                <a className="list-group-item-action" href="#intro-feat3">
                  캘린더 공유
                </a>
              </li>
              <li className="footer-index">
                <a className="list-group-item-action" href="#intro-feat4">
                  할 일 체크
                </a>
              </li>
              <li className="footer-index">
                <a>커뮤니티</a>
              </li>
            </ul>
          </div>
          <div className="footer-3">
            <h5>
              <a className="list-group-item-action" href="#intro-feat5">
                커뮤니티
              </a>
            </h5>
            <ul>
              <li className="footer-index">공지사항</li>
              <li className="footer-index">자유게시판</li>
              <li className="footer-index">성향테스트</li>
            </ul>
          </div>
          <div className="footer-4">
            <h5>
              <a href="#home">ABOUT US</a>
            </h5>
            <ul>
              <li className="footer-index">서비스 소개</li>
              <li className="footer-index">CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
