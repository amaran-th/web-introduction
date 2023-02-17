import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import { VscTriangleRight } from "react-icons/vsc";
import { movies } from "../../shared/data/movie";
const GuestBook = () => {
  const [name, setName] = useState("");
  const [movieCount, setMovieCount] = useState(0);
  const onClickSubmit = () => {
    alert(
      (name ? name : "익명") +
        "님, 저와 " +
        movieCount +
        "개의 취향이 같으시네요!"
    );
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
