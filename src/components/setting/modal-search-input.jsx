import { ICONS } from "lib/assets";
import useInput from "hook/useInput";
import { useState } from "react";
import styles from "styles/setting/modal-search-input.module.css";
import { roommateSearch } from "lib/dummy_roommate";
import Check from "components/icons/check";

const ModalSearchInput = (props) => {
  const { value, onChange } = useInput("");
  const [resultList, setResultList] = useState(roommateSearch);
  const [clickedList, setClickedList] = useState({});

  const handleClick = (id) => {
    setClickedList((prev) => {
      const update = { ...prev };
      if (update[id]) {
        update[id] = !update[id];
      } else {
        update[id] = true;
      }
      return update;
    });
  };

  return (
    <>
      <div className={styles[`input`]}>
        <input
          value={value}
          onChange={onChange}
          placeholder="등록할 룸메이트의 아이디를 입력하세요."
        />
        <div>
          <img src={ICONS.FRIEND_ADD} alt="friend add" />
        </div>
      </div>
      <ul>
        {resultList.map((v) => {
          return (
            <li
              className={
                clickedList[v.id] ? styles[`result-clicked`] : styles[`result`]
              }
              key={v.id}
              onClick={() => handleClick(v.id)}
            >
              <div>
                <img src={v.profile_img} alt="profile" />
                {v.id}
              </div>
              {clickedList[v.id] && <Check color="white" />}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ModalSearchInput;
