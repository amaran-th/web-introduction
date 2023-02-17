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
import NickNameInfo from "./components/NickNameInfo";
import FavoriteInfo from "./components/FavoriteInfo";

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
                  <Badge>서울특별시</Badge> <span>{">"}</span>{" "}
                  <Badge>도봉구</Badge>
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
