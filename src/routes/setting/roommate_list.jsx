import React, { useState, useEffect, useRef } from "react";
import styles from "../../css/setting/roommate_list.module.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { roommateList, invite_list, roommateTitles } from "./data";
import { Modal } from "react-bootstrap";

const RoommateList = (props) => {
  const [show, setShow] = useState(Array(roommateList.length).fill(false));
  function handleClose(index) {
    const updateList = [...show].map((item, idx) => {
      if (idx === index) return false;
    });
    setShow(updateList);
  }
  function handleShow(index) {
    const updateList = [...show].map((item, idx) => {
      if (idx === index) return true;
    });
    console.log(updateList);
    setShow(updateList);
  }
  /*캐러셀 JS*/
  const [inviteList, setInviteList] = useState(invite_list); // 얘만 바뀜
  const roommateContainerRef = useRef();
  const inviteContainerRef = useRef();
  const handleRoommateLeftClick = () => {
    translateContainer.call(this, 1, 0);
  };
  const handleRoommateRightClick = () => {
    translateContainer.call(this, -1, 0);
  };
  const handleInviteLeftClick = () => {
    translateContainer.call(this, 1, 1);
  };
  const handleInviteRightClick = () => {
    translateContainer.call(this, -1, 1);
  };
  function translateRoommateContainer(direction, selectedBtn, i) {
    roommateContainerRef.current.style.transitionDuration = "500ms";
    roommateContainerRef.current.style.transform = `translateX(${
      direction * 103
    }%)`;
    roommateContainerRef.current.ontransitionend = () =>
      reorganizeEl(selectedBtn, i);
  }
  function translateInviteContainer(direction, selectedBtn, i) {
    inviteContainerRef.current.style.transitionDuration = "500ms";
    inviteContainerRef.current.style.transform = `translateX(${
      direction * 103
    }%)`;
    inviteContainerRef.current.ontransitionend = () =>
      reorganizeEl(selectedBtn, i);
  }
  function translateContainer(direction, i) {
    const selectedBtn = direction === 1 ? "prev" : "next";
    i === 0
      ? translateRoommateContainer(direction, selectedBtn, i)
      : translateInviteContainer(direction, selectedBtn, i);
  }
  function roommateReorganizeEl(selectedBtn) {
    roommateContainerRef.current.removeAttribute("style");
    selectedBtn === "prev"
      ? roommateContainerRef.current.insertBefore(
          roommateContainerRef.current.lastElementChild,
          roommateContainerRef.current.firstElementChild
        )
      : roommateContainerRef.current.appendChild(
          roommateContainerRef.current.firstElementChild
        );
  }
  function inviteReorganizeEl(selectedBtn) {
    inviteContainerRef.current.removeAttribute("style");
    selectedBtn === "prev"
      ? inviteContainerRef.current.insertBefore(
          inviteContainerRef.current.lastElementChild,
          inviteContainerRef.current.firstElementChild
        )
      : inviteContainerRef.current.appendChild(
          inviteContainerRef.current.firstElementChild
        );
  }
  function reorganizeEl(selectedBtn, i) {
    i === 0
      ? roommateReorganizeEl(selectedBtn)
      : inviteReorganizeEl(selectedBtn);
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
    inviteCancelHandleResponse(id);
  };

  const inviteCancelHandleResponse = (id) => {
    setInviteList((inviteList) => {
      const updateList = { ...inviteList };
      delete updateList[id];
      return updateList;
    });
  };

  return (
    <section className={styles.roommate_list}>
      <p className={styles.roommate_list__title}>룸메이트 관리</p>
      {roommateList.length !== 0 ? (
        <div className={styles.roommate_list__carousel}>
          <FaArrowAltCircleLeft
            onClick={handleRoommateLeftClick}
            className={styles.roommate_list__carousel_left}
          />
          <div className={styles.roommate_list__window}>
            <ul
              className={styles.roommate_list__container}
              ref={roommateContainerRef}
            >
              {roommateList.map((roommate, index) => {
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
                    <button
                      className={styles.roommate_list__btn}
                      onClick={() => handleShow(index)}
                    >
                      프로필 보기
                    </button>
                    {/* 모달 수정 필요 */}

                    <Modal show={show[index]} onHide={() => handleClose(index)}>
                      <Modal.Header closeButton>
                        <Modal.Title
                          className={styles.myhome_roommate__modal_font}
                        >
                          프로필 보기
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className={styles.roommate_list__modal}>
                        <div
                          className={`${styles.roommate_list__modal_profile} text-center`}
                        >
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
                          {roommateTitles[roommate.nick_name].map((title) => {
                            return (
                              <span
                                key={Math.random()}
                                className="cal-profile-title border rounded-pill px-3 py-1 mx-1"
                              >
                                {title}
                              </span>
                            );
                          })}
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
                      </Modal.Body>
                    </Modal>
                  </li>
                );
              })}
            </ul>
          </div>
          <FaArrowAltCircleRight
            onClick={handleRoommateRightClick}
            className={styles.roommate_list__carousel_right}
          />
        </div>
      ) : (
        <p className={styles.roommate_list__empty}>룸메이트가 없습니다.</p>
      )}
      <p className={styles.roommate_list__title}>초대중인 유저</p>
      {Object.keys(inviteList).length !== 0 ? (
        <div className={styles.roommate_list__carousel}>
          <FaArrowAltCircleLeft
            onClick={handleInviteLeftClick}
            className={styles.roommate_list__carousel_left}
          />
          <div className={styles.roommate_list__window}>
            <ul
              className={styles.roommate_list__container}
              ref={inviteContainerRef}
            >
              {Object.keys(inviteList).map((key) => {
                const invite_user = inviteList[key];
                return (
                  <li
                    key={invite_user.key}
                    className={`${styles.roommate_list__user} roommate-id-${invite_user.key}`}
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
                      onClick={() => onClickInviteCancel(invite_user.key)}
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
            onClick={handleInviteRightClick}
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
