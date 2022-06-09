import React from "react";

// 유저가 집이 있는 경우
const HaveHome = () => {
  return (
    <section>
      <div style={{ maxWidth: "46rem" }}>
        <h2>🏡</h2>
        <p>user.nick_name네 집</p>
        <h2>user.home.name</h2>
      </div>
      <div style={{ zIndex: 3, position: "relative" }}>
        <p>
          오늘도 노크노크와 함께
          <br />
          간편하게 평화로운 생활을 즐겨보아요!
        </p>
      </div>
      <div style={{ zIndex: 3, position: "relative" }}>
        <button
          style={{ fontSize: "1.5rem", marginTop: "2rem" }}
          className="btn btn-lg btn-outline-warning rounded-pill px-4 py-2 bg-white"
        >
          <a href="#home">집 관리</a>
        </button>
        <button
          style={{ fontSize: "1.5rem", marginTop: "2rem" }}
          className="btn btn-lg btn-outline-warning rounded-pill px-4 py-2 bg-white"
        >
          <a href="#home">생활 관리</a>
        </button>
        <div className="mt-2">
          {/* {% if user.home.living_rule.count is 0 %} */}
          <button
            style={{ fontSize: "1.5rem" }}
            className="btn btn-lg btn-warning rounded-pill px-4 py-2 "
          >
            <a href="#home">생활 수칙 만들기</a>
          </button>
        </div>
      </div>

      <a href="#home" style={{ zIndex: 4 }}>
        <div id="intro-main-todo" className="text-center">
          <h6> today_date </h6>
          <h5>오늘의 할 일</h5>

          {/* {% if user_todos.count is 0 %} */}
          <p>현재 할 일이 없어요~!</p>
          {/* {% else %} */}
          {/* {% for user_todo in user_todos %} */}
          <div className="user-todo">
            <p>user_todo.content</p>
          </div>
          {/* {% endfor %} */}
          {/* {% endif %} */}
        </div>
      </a>
    </section>
  );
};

export default HaveHome;
