import React, { useState } from "react";
import styles from "../../css/setting/roommate_list.module.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { TitleSharp } from "@material-ui/icons";

const RoommateList = (props) => {
  const [roommateList, setRoommateList] = useState([
    {
      key: 1,
      pk: 1,
      nick_name: "aaa",
      profile_img:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80",
    },
    {
      key: 2,
      pk: 2,
      nick_name: "bbb",
      profile_img:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80",
    },
  ]);
  const [inviteList, setInviteList] = useState([
    {
      key: 1,
      pk: 1,
      nick_name: "aaa",
      profile_img:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80",
    },
    {
      key: 2,
      pk: 2,
      nick_name: "bbb",
      profile_img:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80",
    },
  ]);
  const [roommateTitles, setRoommateTitles] = useState({
    //nick_name 으로 가져와야함
    aaa: ["노크노크 스타터", "등등..."],
    bbb: ["노크노크 스타터", "등등..."],
  });
  /*캐러셀 JS*/
  const container = document.querySelectorAll(".roommate-list__container");
  const prevBtn = document.querySelectorAll(".roommate-list__carousel-left");
  const nextBtn = document.querySelectorAll(".roommate-list__carousel-right");

  (function addEvent() {
    if (prevBtn[0]) {
      prevBtn[0].addEventListener("click", () => {
        console.log("click");
        translateContainer.bind(this, 1, 0);
      });
      nextBtn[0].addEventListener(
        "click",
        translateContainer.bind(this, -1, 0)
      );
    }
    if (prevBtn[1]) {
      prevBtn[1].addEventListener("click", translateContainer.bind(this, 1, 1));
      nextBtn[1].addEventListener(
        "click",
        translateContainer.bind(this, -1, 1)
      );
    }
  })();

  function translateContainer(direction, i) {
    const selectedBtn = direction === 1 ? "prev" : "next";
    container[i].style.transitionDuration = "500ms";
    container[i].style.transform = `translateX(${direction * 103}%)`;
    container[i].ontransitionend = () => reorganizeEl(selectedBtn, i);
  }

  function reorganizeEl(selectedBtn, i) {
    container[i].removeAttribute("style");
    selectedBtn === "prev"
      ? container[i].insertBefore(
          container[i].lastElementChild,
          container[i].firstElementChild
        )
      : container[i].appendChild(container[i].firstElementChild);
  }

  /*초대 취소 ajax*/
  const onClickInviteCancel = async (id) => {
    // const url = "../roommate/invite_cancel/";
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: JSON.stringify({
    //     invite_cancel_id: id,
    //   }),
    // });
    // const { id: userId } = await res.json();
    // inviteCancelHandleResponse(userId);
  };

  //   const inviteCancelHandleResponse = (id) => {
  //     const element = document.querySelector(`.roommate-id-${id}`);
  //     element.remove();

  //     //초대중인 유저 0명이 되면
  //     const invite_users_ul = document.querySelectorAll(
  //       ".roommate-list__container"
  //     );
  //     if (invite_users_ul[invite_users_ul.length - 1].children.length == 0) {
  //       const carousel = document.querySelectorAll(".roommate-list__carousel");
  //       const p = document.createElement("p");
  //       p.className = "roommate-list__empty";
  //       p.innerHTML = "초대중인 유저가 없습니다.";
  //       carousel[carousel.length - 1].after(p);
  //       carousel[carousel.length - 1].remove();
  //     }
  //   };
  return (
    <section className={styles.roommate_list}>
      <p className={styles.roommate_list__title}>룸메이트 관리</p>
      {roommateList ? (
        <div className={styles.roommate_list__carousel}>
          <FaArrowAltCircleLeft
            className={styles.roommate_list__carousel_left}
          />
          <div className={styles.roommate_list__window}>
            <ul className={styles.roommate_list__container}>
              {roommateList.map((roommate) => {
                return (
                  <li className={styles.roommate_list__user} key={roommate.key}>
                    <img
                      className="cal-profile-img"
                      src={roommate.profile_img}
                      alt="profile"
                    />
                    <p className={styles.roommate_list__user__name}>
                      {roommate.nick_name}
                    </p>
                    <a
                      data-bs-toggle="modal"
                      data-bs-target={`#roommateProfileModal-${roommate.pk}`}
                      className={styles.roommate_list__btn}
                    >
                      프로필 보기
                    </a>
                    {/* 모달 수정 필요 */}
                    <div
                      className="modal fade"
                      id={`roommateProfileModal-${roommate.pk}`}
                      tabIndex="-1"
                      aria-labelledby="roommateProfileLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className={`modal-title ${styles.myhome_roommate__modal_font}`}
                              id="roommateProfileLabel"
                            >
                              프로필 보기
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body roommate-list__modal">
                            <div className="roommate-list__modal-profile text-center">
                              <img
                                className="cal-profile-img"
                                alt="profile"
                                src={roommate.profile_img}
                              />
                              <p>{roommate.nick_name}</p>
                            </div>
                            <div className={styles.roommate_list__modal_title}>
                              <p>칭호</p>
                              <hr />
                              {roommateTitles[roommate.nick_name].map(
                                (title) => {
                                  return (
                                    <span
                                      key={Math.random()}
                                      className="cal-profile-title border rounded-pill px-3 py-1 mx-1"
                                    >
                                      {title}
                                    </span>
                                  );
                                }
                              )}
                            </div>
                            {/* <div className="roommate-list__modal-title">
                                            <p>달성률</p>
                                            <hr />
                                            <div className="chart-container">
                                                <div className="user-ratio px-3">
                                                    <div className="chart" data-percent="{{ roommate_ratio|get_item:roommate.nick_name }}" data-bar-color="#ff4241">
                                                        <span className="percent" data-after="%">{{ roommate_ratio|get_item:roommate.nick_name }}%</span>
                                                    </div>
                                                    <p>{{ roommate.nick_name }}</p>
                                                </div>
                                                <div className="total-ratio px-3">
                                                    <div className="chart" data-percent="{{ total_complete_ratio }}" data-bar-color="#ff4241">
                                                        <span className="percent" data-after="%">{{ total_complete_ratio }}%</span>
                                                    </div>
                                                    <p>우리집</p>
                                                </div>
                                            </div>
                                        </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <FaArrowAltCircleRight
            className={styles.roommate_list__carousel_right}
          />
        </div>
      ) : (
        <p className={styles.roommate_list__empty}>룸메이트가 없습니다.</p>
      )}
      <p className={styles.roommate_list__title}>초대중인 유저</p>
      {inviteList ? (
        <div className={styles.roommate_list__carousel}>
          <FaArrowAltCircleLeft
            className={styles.roommate_list__carousel_left}
          />
          <div className={styles.roommate_list__window}>
            <ul className={styles.roommate_list__container}>
              {inviteList.map((invite_user) => {
                return (
                  <li
                    key={invite_user.key}
                    className={`${styles.roommate_list__user} roommate-id-${invite_user.pk}`}
                  >
                    <img
                      className="cal-profile-img"
                      alt="profile"
                      src={invite_user.profile_img}
                    />
                    <p className={styles.roommate_list__user__name}>
                      {invite_user.nick_name}
                    </p>
                    <p style={{ textAlign: "center" }}>
                      룸메이트가 아직
                      <br /> 초대에 수락하지 않았습니다.
                    </p>
                    <button
                      type="button"
                      onClick={() => onClickInviteCancel(invite_user.pk)}
                      className={`${styles.roommate_list__btn} ${styles.roommate_list__btn_tomato}`}
                    >
                      초대 취소
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <FaArrowAltCircleRight
            className={styles.roommate_list__carousel_right}
          />
        </div>
      ) : (
        <p className={styles.roommate_list__empty}>초대중인 유저가 없습니다.</p>
      )}
    </section>
  );
};

export default RoommateList;
