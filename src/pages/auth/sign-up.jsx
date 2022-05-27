import React, { useState } from "react";
import CustomInput from "components/auth/custom-input";
import common from "styles/auth/common.module.css";
import ConfirmBtn from "components/auth/confirm-btn";
import CustomSelect from "components/auth/custom-select";

const SignUp = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const handleBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <section className={common.container}>
      <p className={common.title}>회원가입</p>
      <CustomInput label="아이디" onChange={handleId} />
      <CustomInput label="비밀번호" onChange={handlePassword} />
      <CustomInput label="비밀번호 재확인" onChange={handlePasswordConfirm} />
      <CustomInput label="생년월일" onChange={handleBirthday} />
      <CustomSelect label="성별" />
      <CustomInput label="휴대전화" onChange={handlePhone} />
      <ConfirmBtn
        label="가입하기"
        canSubmit={
          id === "" ||
          password === "" ||
          passwordConfirm === "" ||
          birthday === "" ||
          phone === ""
            ? true
            : false
        }
      />
    </section>
  );
};

export default SignUp;
