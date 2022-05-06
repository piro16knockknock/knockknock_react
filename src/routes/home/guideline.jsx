import React, { useState } from "react";
import styles from "../../css/home/guideline.module.css";

import { Link } from 'react-router-dom';

export default function App() {
  const [silenttime, setSilenttime] = useState(0);
  const [alarm, setAlarm] = useState(0);
  return (

    <section>
      <div className="side-nav">
        <ul className="d-flex">
          <li>생활관리<i className="fas fa-angle-right" style={{color: "#a7a7a7"}}></i></li>
          <li><Link to='/home' >캘린더</Link></li>
          <li><Link to='/home/living_rule'>생활수칙</Link></li>
          <li><Link className="side-nav-current" to='/home/guideline'>가이드라인</Link></li>
        </ul>
      </div>


      <div className={styles.guideline_container}>
        <h1>가이드라인</h1>
        <div className={styles.questions}>
          <div className={styles.question}>
            <h3>1. 최대한 조용히 해야 하는 시간</h3>
            <div className={styles.options}>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("ten");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">오후 10시부터</label>
              </div>

              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("twelve");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">오후 12시부터</label>
              </div>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("two");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">오전 2시부터</label>
              </div>
              </div>
          </div>

          <div className={styles.question}>
            <h3>2. 전화와 알람 관련</h3>
            <div className={styles.options}>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setAlarm("ten");
                }}
              >
                <input
                  type="radio"
                  value={alarm}
                  name="alarm"
                />
                <label for="ten">항상 서로 미리 알려주기</label>
              </div>

              <div
                className={styles.radio_btn}
                onClick={() => {
                  setAlarm("twelve");
                }}
              >
                <input
                  type="radio"
                  value={alarm}
                  name="alarm"
                />
                <label for="ten">신경 쓰지 않음</label>
              </div>
              </div>
          </div>


          <div className={styles.question}>
            <h3>3. 룸메와 활발한 친목하기</h3>
            <div className={styles.options}>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("ten");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">O</label>
              </div>

              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("twelve");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">X</label>
              </div>
              </div>
          </div>

          <div className={styles.question}>
            <h3>4. 공과금 및 월세 지출 방식</h3>
            <div className={styles.options}>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("ten");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">한 달에 한 번 모아서</label>
              </div>

              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("twelve");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">그때그때 모아서</label>
              </div>

              </div>
          </div>


          <div className={styles.question}>
            <h3>5. 공유 품목</h3>
            <div className={styles.options}>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("ten");
                }}
              >
                <input
                  type="checkbox"
                  value={silenttime}
                  name="share[]"
                />
                <label for="ten">식품</label>
              </div>

              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("twelve");
                }}
              >
                <input
                  type="checkbox"
                  value={silenttime}
                  name="share[]"
                />
                <label for="ten">가전제품</label>
              </div>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("two");
                }}
              >
                <input
                  type="checkbox"
                  value={silenttime}
                  name="share[]"
                />
                <label for="ten">옷</label>
              </div>

              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("two");
                }}
              >
                <input
                  type="checkbox"
                  value={silenttime}
                  name="share[]"
                />
                <label for="ten">수건</label>
              </div>
              </div>
          </div>


          <div className={styles.question}>
            <h3>6. 다른 사람 초대가 가능한지</h3>
            <div className={styles.options}>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("ten");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">룸메 없을 때만 가능</label>
              </div>

              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("twelve");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">항상 가능</label>
              </div>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("two");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">절대 불가능</label>
              </div>
              </div>
          </div>


          <div className={styles.question}>
            <h3>7. 다른 사람 숙박이 가능한지</h3>
            <div className={styles.options}>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("ten");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">룸메 없을 때만 가능</label>
              </div>

              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("twelve");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">항상 가능</label>
              </div>
              <div
                className={styles.radio_btn}
                onClick={() => {
                  setSilenttime("two");
                }}
              >
                <input
                  type="radio"
                  value={silenttime}
                  name="silenttime"
                />
                <label for="ten">절대 불가능</label>
              </div>
              </div>
          </div>


          

        </div>
      </div>


      
    </section>

  );
}




// const Guideline = (props) => {
    
//   return (
//     <section>
//       <div className="side-nav">
//         <ul className="d-flex">
//           <li>생활관리<i className="fas fa-angle-right" style={{color: "#a7a7a7"}}></i></li>
//           <li><Link to='/home' >캘린더</Link></li>
//           <li><Link to='/home/living_rule'>생활수칙</Link></li>
//           <li><Link className="side-nav-current" to='/home/guideline'>가이드라인</Link></li>
//         </ul>
//       </div>

//     </section>

//   );

// };

// export default Guideline;

