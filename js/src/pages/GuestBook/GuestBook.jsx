import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import { VscTriangleRight } from "react-icons/vsc";
const movies = [
  {
    id: 1,
    name: "인터스텔라",
    img: require("../../assets/images/movie/인터스텔라.jpg"),
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=45290",
    info: (
      <>
        “우린 답을 찾을 거야, 늘 그랬듯이”
        <br />
        세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다.
        <br />
        지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도
        해체되었다.
        <br /> 이때 시공간에 불가사의한 틈이 열리고, 남은 자들에게는 이 곳을
        탐험해 인류를 구해야 하는 임무가 지워진다.
        <br /> 사랑하는 가족들을 뒤로 한 채 인류라는 더 큰 가족을 위해, 그들은
        이제 희망을 찾아 우주로 간다.
        <br /> 그리고 우린 답을 찾을 것이다. 늘 그랬듯이…
      </>
    ),
  },
  {
    id: 2,
    name: "트루먼 쇼",
    img: require("../../assets/images/movie/트루먼쇼.jpg"),
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=19099",
    info: (
      <>
        220개국 17억 인구가 5천 대 카메라로 지켜본 지 10909일째! 작은 섬에서
        평범한 삶을 사는 30세 보험회사원 트루먼 버뱅크 아내와 홀어머니를 모시고
        행복한 하루 하루를 보내던 어느 날, 하늘에서 조명이 떨어진다! 의아해하던
        트루먼은 길을 걷다 죽은 아버지를 만나고 라디오 주파수를 맞추다 자신의
        일거수일투족이 라디오에 생중계되는 기이한 일들을 연이어 겪게 된다. 지난
        30년간 일상이라고 믿었던 모든 것들이 어딘가 수상하다고 느낀 트루먼은
        모든 것이 ‘쇼’라는 말을 남기고 떠난 첫사랑 ‘실비아’를 찾아 피지 섬으로
        떠나기로 결심한다. <br />
        가족, 친구, 회사… 하나부터 열까지 모든 것이 가짜인 ‘트루먼 쇼’ 과연
        트루먼은 진짜 인생을 찾을 수 있을까?
      </>
    ),
  },
  {
    id: 3,
    name: "가타카(Gattaca)",
    img: require("../../assets/images/movie/가타카.jpg"),
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=19074",
    info: (
      <>
        인간을 지배하는 블루빛 테크놀로지의 세계- 가타카에 오신걸 환영합니다. |
        SF와 스릴러의 완벽한 유전자 조합이 시작된다. | 그는 정열적이고, 풍부한
        감성의 소유자이며, 자신의 꿈에 대한 확실한 믿음도 있다. 그러나 21세기에
        그는 단지 쓰레기일 뿐이다!
      </>
    ),
  },
  {
    id: 4,
    name: "아이들은 즐겁다",
    img: require("../../assets/images/movie/아이들은즐겁다.jpg"),
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=203468",
    info: (
      <>
        신나는 만남, 함께 한 여행, 그리고 마지막 인사 “고마워” 어딘가 아파서
        병원에 있는 엄마와 항상 바쁜 아빠, 조금은 외롭지만 새로 전학간 학교에서
        만난 친구들 덕분에 9살 다이는 즐겁다.
        <br /> <br />
        어느 날, 엄마와의 이별이 조금씩 가까워지는 것을 느낀 다이, 친구들과 함께
        엄마를 만나기 위해 어른들 몰래 여행을 떠난다. 9세 인생 최초! 전재산을
        탈탈 털어 떠난 여행, 그리고 엄마와의 만남 끝에 기다리고 있는 마지막
        인사.
      </>
    ),
  },
  {
    id: 5,
    name: "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
    img: require("../../assets/images/movie/오늘밤.jpg"),
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=220733",
    info: (
      <>
        “카미야 토루에 대해 잊지 말 것”
        <br />
        자고 일어나면 전날의 기억을 잃는 ‘선행성 기억상실증’에 걸린 소녀
        ‘마오리’
        <br />
        <br />
        “내일의 마오리도 내가 즐겁게 해줄 거야"
        <br />
        누구에게도 기억되지 않는 무색무취의 평범한 소년 ‘토루’
        <br />
        <br />
        매일 밤 사랑이 사라지는 세계,
        <br /> 그럼에도 불구하고,
        <br /> 다음 날 서로를 향한 애틋한 고백을 반복하는 <br />두 소년, 소녀의
        가장 슬픈 청춘담
      </>
    ),
  },
];
const GuestBook = () => {
  const [name, setName] = useState("");
  const [movieCount, setMovieCount] = useState(0);
  const onClickSubmit = () => {
    alert(name + "님, 저와 " + movieCount + "개의 취향이 같으시네요!");
  };
  return (
    <div className="space-y-8 p-4">
      <p name="title" className="text-h1">
        방명록
      </p>
      <form name="content" className="space-y-4">
        <Input
          variant="static"
          color="red"
          label="이름"
          placeholder="이름을 입력하세요"
          onBlur={(e) => setName(e.target.value)}
          className="!text-white"
        />
        <div>
          <p className="flex items-center">
            <VscTriangleRight />
            당신의 취향인 영화는 무엇인가요?
          </p>
          <div className="items-center">
            {movies.map((movie) => (
              <Checkbox
                label={movie.name}
                color="red"
                onChange={(e) => {
                  if (e.target.checked) setMovieCount(movieCount + 1);
                  else setMovieCount(movieCount - 1);
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            variant="text"
            className=" bg-pointColor text-white"
            onClick={() => onClickSubmit()}
          >
            제출
          </Button>
          <Button
            variant="text"
            type="reset"
            className="border border-pointColor text-pointColor"
          >
            취소
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GuestBook;
