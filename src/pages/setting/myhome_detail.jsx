import React from "react";
import SideMenu from "components/layout/side-menu";
import { setting } from "lib/side-menu-routes";
const MyHomeDetail = (props) => {
  return (
    <>
      <SideMenu {...setting} />
      <section class="myhome-detail"></section>
    </>
  );
};

export default MyHomeDetail;
