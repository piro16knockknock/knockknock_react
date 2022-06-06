import React, { useEffect, useRef, useState } from "react";
import CustomInput from "components/auth/custom-signUp-input";
import common from "styles/auth/common.module.css";
import ConfirmBtn from "components/auth/confirm-btn";
import CustomSelect from "components/auth/custom-select";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "redux/pop-up";

const idConfirm = {
  required: "필수 항목입니다.",
  minLength: { value: 4, message: "4자 이상 입력해주세요" },
  pattern: {
    value: /[a-z0-9_]{4,10}$/,
    message: "아이디는 영어 혹은 숫자로 이루어져야합니다.",
  },
};

const passwordConfirm = {
  required: "필수 항목입니다.",
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: "최소 8자 이상, 문자와 숫자를 포함해주세요",
  },
};

const birthdayConfirm = {
  required: "필수 항목입니다.",
};

const SignUp = () => {
  const [canSubmit, setCanSubmit] = useState(true);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    reset,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const subscription = watch((values) => {
      let check = false;
      Object.keys(values).forEach((value) => {
        if (values[value] === "") check = true || check;
        else check = check || false;
      });
      setCanSubmit(check);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    dispatch(signUp({ show: true, content: "회원가입에 성공했습니다." }));
    navigator("/");
  };

  const rePasswordConfirm = {
    required: "필수 항목입니다.",
    validate: {
      matchPassword: (value) => {
        const password = getValues("password");
        return password === value || "비밀번호가 일치하지 않습니다.";
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={common.container}>
      <p className={common.title}>회원가입</p>
      <CustomInput
        label="아이디"
        eLabel="id"
        register={register}
        confirm={idConfirm}
        type="text"
        required
      />
      <p className={common[`error`]}>{errors.id?.message}</p>
      <CustomInput
        label="비밀번호"
        eLabel="password"
        register={register}
        confirm={passwordConfirm}
        type="password"
        required
      />
      <p className={common[`error`]}>{errors.password?.message}</p>

      <CustomInput
        label="비밀번호 재확인"
        eLabel="rePassword"
        register={register}
        type="password"
        confirm={rePasswordConfirm}
        required
      />
      <p className={common[`error`]}>{errors.rePassword?.message}</p>

      <CustomInput
        label="생년월일"
        eLabel="birthday"
        register={register}
        type="date"
        confirm={birthdayConfirm}
        required
      />
      <p className={common[`error`]}>{errors.birthday?.message}</p>

      <CustomSelect
        label="성별"
        eLabel="gender"
        register={register}
        confirm={birthdayConfirm}
      />
      <p className={common[`error`]}>{errors.gender?.message}</p>

      <CustomInput
        label="휴대전화"
        eLabel="phone"
        register={register}
        type="tel"
        confirm={birthdayConfirm}
        required
      />
      <p className={common[`error`]}>{errors.phone?.message}</p>

      <ConfirmBtn label="가입하기" canSubmit={canSubmit} />
    </form>
  );
};

export default SignUp;
