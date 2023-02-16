import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { VscGithubInverted } from "react-icons/vsc";
import { SiBloglovin } from "react-icons/si";

import Badge from "./components/Badge";

const links = [
  {
    name: "Github",
    icon: <VscGithubInverted className="mx-auto h-8 w-8" />,
    href: "https://github.com/amaran-th",
  },
  {
    name: "Blog",
    icon: <SiBloglovin className="mx-auto h-8 w-8" />,
    href: "https://amaran-th.github.io/",
  },
];
const NickNameInfo = () => {
  return (
    <div className="space-y-4">
      <p>
        특별한 뜻이 있는 것은 아니고, 이전에 유튜브에서 특이한 이름의 색깔
        이름을 모아둔 영상을 보다가 '아마란스'라는 색깔의 어감이 좋아서 Github
        닉네임으로 삼게 되었습니다. 그 닉네임을 그대로 우테코 닉네임으로
        가져왔습니다. 아마란스는 색의 이름이기도 하고, 식물의 이름이기도 합니다.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="https://m.blog.naver.com/cbh3cbh3/221203028326"
          target="_blank"
          title="출처 : https://m.blog.naver.com/cbh3cbh3/221203028326"
        >
          <img
            className="mx-auto h-80"
            src={require("../../assets/images/amaranth.jpg")}
          />{" "}
        </Link>
        <Link
          to="https://wjddydtjr.com/1101"
          target="_blank"
          title="출처 : https://wjddydtjr.com/1101"
        >
          <img
            className="mx-auto h-80"
            src={require("../../assets/images/amaranthPlant.png")}
          />
        </Link>
      </div>
      <small className="flex w-full justify-center text-pointColor">
        이미지를 클릭하시면 출처 사이트로 이동합니다.
      </small>
    </div>
  );
};
const FavoriteInfo = () => {
  return (
    <>
      게임, 특히 모바일 게임, 인디 게임을 즐겨 합니다. 여유가 있을 땐 그림을
      그리면서 시간을 보내곤 합니다.
      <br />
      컴공과로 진로를 결정하기 전 꿈이 천체 물리학자였어서, 밤하늘 보는 것도
      좋아합니다.
      <br />
      나에게 맞는 취미를 발굴하는 것도 중요한 자기계발이라고 생각해서, 옛날에
      프랑스 자수, 피아노, 킥복싱 정도를 얕게 찍먹해본 적이 있습니다.
    </>
  );
};
const tmis = [
  { id: 1, title: "닉네임의 유래", content: <NickNameInfo /> },
  {
    id: 2,
    title: "취미 & 좋아하는 것",
    content: <FavoriteInfo />,
  },
];
const Home = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  return (
    <div>
      <div className="space-y-8 p-4">
        <p name="title" className="text-h1">
          안녕하세요:) <br />
          아마란스입니다.
        </p>
        <div name="content" className="space-y-10">
          <div name="Link" className="">
            <div className="w-full flex-col items-center text-center text-h3">
              Link
            </div>
            <div className="mx-auto mb-4 w-[100px] border-b"></div>
            <div className="flex justify-center space-x-4">
              {links.map((link) => (
                <div key={link.name} className="flex-col">
                  <Link
                    to={link.href}
                    target="_blank"
                    className="flex justify-center"
                  >
                    <IconButton
                      variant="text"
                      className="!rounded-md  !text-white hover:!text-subColor "
                    >
                      {link.icon}
                    </IconButton>
                  </Link>
                  {link.name}
                </div>
              ))}
            </div>
          </div>
          <div name="About Me" className="">
            <div className="w-full flex-col items-center text-center text-h3">
              About Me
            </div>
            <div className="mx-auto mb-4 w-[150px] border-b"></div>
            <div className="mx-auto max-w-xl space-y-4">
              <div className="">이름 : 아마란스(송세연)</div>
              <div className="flex space-x-2">
                <span>현 거주지 : </span>
                <span className="flex space-x-2">
                  <Badge>서울특별시</Badge> <span>></span> <Badge>도봉구</Badge>
                </span>
              </div>
              <div className="flex space-x-2">
                <span>고향 : </span>
                <span className="flex space-x-2">
                  <Badge>광주광역시</Badge>
                  <Badge>부산광역시</Badge>
                </span>
              </div>
              <div className="">
                한마디 : 안녕하세요~ 아마란스입니다! 우리 재밌게 코딩해봐요!
              </div>
            </div>
          </div>
          <div name="TMI" className="">
            <div className="w-full flex-col items-center text-center text-h3">
              TMI
            </div>
            <div className="mx-auto mb-4 w-[100px] border-b"></div>
            <div className="mx-auto max-w-xl">
              {tmis.map((tmi) => (
                <Accordion
                  key={tmi.id}
                  open={open === tmi.id}
                  icon={<Icon id={tmi.id} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(tmi.id)}
                    className={
                      "text-white hover:text-white" +
                      (open === tmi.id
                        ? " border-subColor text-subColor hover:text-subColor"
                        : "")
                    }
                  >
                    {tmi.title}
                  </AccordionHeader>
                  <AccordionBody className="text-gray">
                    {tmi.content}
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
