import React from "react";
import {
  MdManageAccounts,
  MdOutlineEventNote,
  MdOutlineEventAvailable,
  MdListAlt,
  MdOutlinePeople,
} from "react-icons/md";
import Footer from "components/layout/footer";

const RestIntro = () => {
  return (
    <>
      <div id="intro-ment">
        <div style={{ width: "5rem", height: "5rem", filter: "grayscale(1)" }}>
          <img alt="logo" src="./images/logo.svg" />
        </div>
        <h4>KNOCK/KNOCK</h4>
        <h5>"우리 노크정도는 하고 살자고요!"</h5>
      </div>

      <div id="intro-persona">
        <div className="text-center" id="intro-persona-title">
          <div>
            <p style={{ fontSize: "2rem" }}>Why?</p>
          </div>
          <h5>룸메이트와 함께 살기, 어렵지 않냐고요?</h5>
          <h6 style={{ fontSize: "1.8rem" }}>
            룸메이트와의 생활이
            <br />
            점점 지치고 막막하게만 느껴지시나요?
          </h6>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div
            className="mt-5 d-flex flex-row"
            style={{ marginLeft: "-32rem" }}
          >
            <img alt="boy" src="./images/intro-avatar1.png" />
            <div className="persona-box">
              <h6>20대, 대학생</h6>
              <p>
                “룸메이트와 자취를 시작할 예정인데 처음이라 뭐부터 해야할지
                &nbsp;모르겠어요”
              </p>
            </div>
          </div>
          <div className="mt-5 d-flex flex-row" style={{ marginLeft: "32rem" }}>
            <div
              className="persona-box"
              style={{ backgroundColor: "rgb(236, 252, 178)" }}
            >
              <h6>20대, 대학생</h6>
              <p>
                “룸메이트와 자취를 시작할 예정인데 처음이라 뭐부터 해야할지
                &nbsp;모르겠어요”
              </p>
            </div>
            <img alt="girl" src="./images/intro-avatar2.png" />
          </div>
          <div
            className="mt-5 d-flex flex-row"
            style={{ marginLeft: "-32rem" }}
          >
            <img alt="woman" src="./images/intro-avatar3.png" />
            <div className="persona-box">
              <h6>20대, 대학생</h6>
              <p>
                “룸메이트와 자취를 시작할 예정인데 처음이라 뭐부터 해야할지
                &nbsp;모르겠어요”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="intro-service" style={{ backgroundColor: "#eee" }}>
        <div id="intro-service-text" classNameName="text-center ">
          <h5>이제는 간편하고 평화롭게!</h5>
          <h6>
            <span>노크노크</span>와 함께라면 할 수 있어요!
          </h6>
          <p>
            생활 수칙, 공유 캘린더, 오늘의 할 일 체크 등 <span>노크노크</span>의
            다양한 기능들과
            <br />
            간편하게 룸메이트와의 생활을 관리해 보아요
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="intro-service-circle">
            <MdManageAccounts style={{ fontSize: "7rem" }} />
            <h6>룸메이트 관리</h6>
          </div>
          <div className="intro-service-circle">
            <MdOutlineEventNote style={{ fontSize: "7rem" }} />
            <h6>생활수칙 관리</h6>
          </div>
          <div className="intro-service-circle ">
            <MdOutlineEventAvailable style={{ fontSize: "7rem" }} />
            <h6>캘린더 공유</h6>
          </div>
          <div className="intro-service-circle">
            <MdListAlt style={{ fontSize: "7rem" }} />
            <h6>할 일 체크</h6>
          </div>
          <div className="intro-service-circle">
            <MdOutlinePeople style={{ fontSize: "7rem" }} />
            <h6>커뮤니티</h6>
          </div>
        </div>
      </div>
      <div
        id="intro-feat1"
        className="d-flex flex-column align-items-center intro-feature"
      >
        <MdManageAccounts style={{ fontSize: "8rem", color: "#3472ac" }} />
        <h6>룸메이트 관리</h6>
        <p>룸메이트를 등록하고 프로필을 확인하세요!</p>

        <div id="intro-roommate">
          <img alt="intro-roommate" src="./images/intro-roommate.png" />
        </div>
      </div>
      <div id="intro-feat2" className="d-flex intro-feature">
        <div style={{ marginLeft: "15rem", marginTop: "12rem" }}>
          <MdOutlineEventNote style={{ fontSize: "8rem", color: "#7eac69" }} />
          <h6>생활수칙 관리</h6>
          <p>가이드라인을 통해 생활 수칙을 관리해 보세요!</p>
        </div>
        <div id="intro-living">
          <img alt="intro-living" src="./images/intro-living.png" />
        </div>
      </div>
      <div id="intro-feat3" className="d-flex intro-feature">
        <div id="intro-cal">
          <img
            id="intro-cal-img"
            alt="intro-cal-img"
            src="./images/new-cal.png"
          />
        </div>
        <div style={{ marginTop: "16rem", marginLeft: "8rem" }}>
          <MdOutlineEventAvailable style={{ fontSize: "8rem" }} />
          <h6>캘린더 공유</h6>
          <p>캘린더에서 우리집의 할 일 달성률을 한 번에 확인해보세요!</p>
        </div>
      </div>
      <div
        id="intro-feat4"
        className="d-flex flex-column align-items-center intro-feature"
      >
        <MdListAlt style={{ fontSize: "8rem" }} />
        <h6>할 일 체크</h6>
        <p>룸메이트와 나의 할 일을 매번 체크하고 달성률을 확인해 보세요!</p>
        <div id="intro-check">
          <img alt="intro-check" src="./images/intro-check.png" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RestIntro;
