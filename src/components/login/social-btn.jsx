import React from "react";

const SocialBtn = ({ iconPath, text }) => {
  return (
    <button>
      <img src={iconPath} alt="google icon" />
      {text}
    </button>
  );
};

export default SocialBtn;
