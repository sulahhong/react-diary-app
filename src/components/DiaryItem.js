import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, date, content }) => {
  const navigate = useNavigate();

  // const strDate = new Date(parseInt(date)).toLocaleDateString();
  //날짜형식 포맷
  const formatDate = `${new Date(parseInt(date)).getFullYear()}년 ${
    new Date(parseInt(date)).getMonth() + 1
  }월 ${new Date(parseInt(date)).getDate()}일`;

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `asset/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{formatDate}</div>
        <div className="diary_content_preview">{content.slice(0, 20)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
