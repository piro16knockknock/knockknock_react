import React from 'react';

const Knock = (props) => {
    return(
    <>
        <div class="myhome-knock">
        <p class="myhome-detail__title">노크 중인 유저</p>
        <hr />
        {/* {% if knocks %} */}
            <div class="myhome-knock__row">
                {/* {% for knock in knocks %} */}
                    <div data-id='{ knock.user.pk }' className={styles.myhome-knock__column}>
                        <img className="cal-profile-img" src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80">
                        <p>{knock.user.nick_name}</p>
                        <div className="d-flex justify-content-center mt-2">
                            {/* <a onclick="onAcceptKnock(this)" data-id='{{ knock.user.pk }}' class="btn btn-green fs-6 tzext-center">수락</a> */}
                            {/* <a onclick="onRejectKnock(this)" data-id='{{ knock.user.pk }}' class="btn btn-secondary fs-6 ms-1 text-center">거절</a> */}
                        </div>
                    </div>
                {/* {% endfor %} */}
            </div>
        {/* {% else %} */}
        <p className={styles.myhome-knock__empty}>현재 노크 중인 유저가 없습니다.</p>
        {/* {% endif %} */}
    </div>
    <div className={styles.myhome-move}>
        <p className={styles.myhome-detail__title}>집 이전</p>
        <hr />
        <a href="#" class="myhome-detail__btn">이사하기</a>
    </div>
    </>
);
}

export default Knock;