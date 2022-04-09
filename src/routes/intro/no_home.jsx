// {% if request.user.home == None %} <!-- 유저가 집이 없는 경우 -->
// <div style="z-index: 3; position: relative; padding-top: 5rem;">
//     <h2>🖐️<br>{{ user.nick_name }}님</h2>
//     <h2>만나서 반갑습니다!</h2>
// </div>
// <div style="z-index: 3; position: relative; margin-top: 4rem; margin-bottom: 2rem;">
//     <p>서비스를 시작하기 전에<br>
//     룸메이트 등록과 집 설정을 먼저 해주세요!</p>
// </div>
// <div style="z-index: 3; position: relative;">
//     <button class="btn btn-lg btn-outline-warning rounded-pill button-bg-white px-4 py-2"><a href="{% url 'setting:myhome_register' %}">집 등록</a></button>
//     <button class="btn btn-lg btn-outline-warning rounded-pill px-4 py-2 button-bg-white "><a href="{% url 'login:mypage' %}">초대 확인</a></button>
// </div>
