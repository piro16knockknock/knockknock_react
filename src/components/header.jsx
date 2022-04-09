import React, { memo } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container id="container">
        <Navbar.Brand id="navbar-brand" href="/">
          <img alt="logo" src="/images/logo_box_b.svg" /> Knock/Knock
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              className="main-drop-menu"
              title="생활 관리"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/home">캘린더</NavDropdown.Item>
              <NavDropdown.Item href="/home/living_rule">
                생활 수칙
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">가이드라인</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">성향 테스트</Nav.Link>
            <Nav.Link href="#link">커뮤니티</Nav.Link>
            <NavDropdown title="설정" id="basic-nav-dropdown">
              <NavDropdown.Item href="/setting">집 관리</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                룸메이트 관리
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/**Nav == ul */}
            <Nav.Link href="#link">로그아웃</Nav.Link>
            <Nav.Link href="#link">마이페이지</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(Header);
