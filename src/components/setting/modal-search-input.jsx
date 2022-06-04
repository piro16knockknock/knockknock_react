import { ICONS } from "lib/assets";
import useInput from "hook/useInput";
import styles from "styles/setting/modal-search-input.module.css";
import { roommateSearch } from "lib/dummy_roommate";

const ModalSearchInput = (props) => {
  const { value, onChange } = useInput();
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
      <ul className={styles[`result`]}>
        {roommateSearch.map((v) => {
          return (
            <li>
              <img src={v.profile_img} alt="profile image" />
              {v.id}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ModalSearchInput;
