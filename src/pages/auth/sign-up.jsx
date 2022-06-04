import React, { useState } from "react";
import CustomInput from "components/auth/custom-input";
import common from "styles/auth/common.module.css";
import ConfirmBtn from "components/auth/confirm-btn";
import CustomSelect from "components/auth/custom-select";
import useInput from "hook/useInput";
import { useForm } from "react-hook-form";

const SignUp = (props) => {
  const { handleSubmit } = useForm();
  const { value: gender, onChange: handleGender } = useInput("");
  const { value: id, onChange: handleId } = useInput("");
  const { value: password, onChange: handlePassword } = useInput("");
  const { value: passwordConfirm, onChange: handlePasswordConfirm } =
    useInput("");
  const { value: birthday, onChange: handleBirthday } = useInput("");
  const { value: phone, onChange: handlePhone } = useInput("");

  return (
    <form className={common.container}>
      <p className={common.title}>회원가입</p>
      <CustomInput label="아이디" value={id} onChange={handleId} />
      <CustomInput
        label="비밀번호"
        value={password}
        onChange={handlePassword}
      />
      <CustomInput
        label="비밀번호 재확인"
        value={passwordConfirm}
        onChange={handlePasswordConfirm}
      />
      <CustomInput
        label="생년월일"
        value={birthday}
        onChange={handleBirthday}
      />
      <CustomSelect label="성별" value={gender} onChange={handleGender} />
      <CustomInput label="휴대전화" value={phone} onChange={handlePhone} />
      <ConfirmBtn
        label="가입하기"
        canSubmit={
          id === "" ||
          password === "" ||
          passwordConfirm === "" ||
          birthday === "" ||
          gender === "" ||
          phone === ""
            ? true
            : false
        }
      />
    </form>
  );
};

export default SignUp;
