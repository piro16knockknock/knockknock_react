import React from "react";
import { HashLink as Link } from "react-router-hash-link";

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
          <Link
            className="list-group-item-action footer-title"
            to="#intro-main"
          >
            ©Knock/Knock
          </Link>
          <p className="footer-subtitle">
            룸메이트와의 쾌적하고 편안한 생활 지킴이
          </p>
        </div>
        <div className="footer-li list-group">
          <div className="footer-2">
            <h5>
              <Link className="list-group-item-action" to="#intro-persona">
                서비스 소개
              </Link>
            </h5>
            <ul>
              <li className="footer-index">
                <Link className="list-group-item-action" to="#intro-feat1">
                  룸메이트 관리
                </Link>
              </li>
              <li className="footer-index">
                <Link className="list-group-item-action" to="#intro-feat2">
                  생활수칙 관리
                </Link>
              </li>
              <li className="footer-index">
                <Link className="list-group-item-action" to="#intro-feat3">
                  캘린더 공유
                </Link>
              </li>
              <li className="footer-index">
                <Link className="list-group-item-action" to="#intro-feat4">
                  할 일 체크
                </Link>
              </li>
              <li className="footer-index">
                <span>커뮤니티</span>
              </li>
            </ul>
          </div>
          <div className="footer-3">
            <h5>
              <Link className="list-group-item-action" to="#intro-feat5">
                커뮤니티
              </Link>
            </h5>
            <ul>
              <li className="footer-index">공지사항</li>
              <li className="footer-index">자유게시판</li>
              <li className="footer-index">성향테스트</li>
            </ul>
          </div>
          <div className="footer-4">
            <h5>
              <Link to="#home">ABOUT US</Link>
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
