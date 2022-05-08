const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const emotionList = [
    {
      emotion_id: 1,
      emotion_img: process.env.PUBLIC_URL + `/asset/emotion1.png`,
      emotion_descript: "완전 좋음",
    },
    {
      emotion_id: 2,
      emotion_img: process.env.PUBLIC_URL + `/asset/emotion2.png`,
      emotion_descript: "좋음",
    },
    {
      emotion_id: 3,
      emotion_img: process.env.PUBLIC_URL + `/asset/emotion3.png`,
      emotion_descript: "그럭저럭",
    },
    {
      emotion_id: 4,
      emotion_img: process.env.PUBLIC_URL + `/asset/emotion4.png`,
      emotion_descript: "나쁨",
    },
    {
      emotion_id: 5,
      emotion_img: process.env.PUBLIC_URL + `/asset/emotion5.png`,
      emotion_descript: "매우 나쁨",
    },
  ];
  