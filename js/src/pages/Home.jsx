import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { VscGithubInverted } from "react-icons/vsc";
import { SiBloglovin } from "react-icons/si";

const links = [
  {
    name: "Github",
    icon: <VscGithubInverted className="h-8 w-8" />,
    href: "https://github.com/amaran-th",
  },
  {
    name: "Blog",
    icon: <SiBloglovin className="h-8 w-8" />,
    href: "https://amaran-th.github.io/",
  },
];
const Home = () => {
  return (
    <div>
      <div className="p-4">
        <p name="title" className="text-h1">
          안녕하세요:) <br />
          아마란스입니다.
        </p>
        <div name="content">
          <div name="Link" className="">
            <div className="w-full flex-col items-center text-center text-h3">
              Link
            </div>
            <div className="mx-auto mb-4 w-[100px] border-b"></div>
            <div className="flex justify-center space-x-4">
              {links.map((link) => (
                <Link to={link.href} target="_blank">
                  <IconButton className="rounded-md p-1">
                    {link.icon}
                  </IconButton>
                </Link>
              ))}
            </div>
          </div>

          <IconButton className="rounded-md p-1">
            <VscGithubInverted className="h-16 w-16" />
            Github
          </IconButton>
          <div className="">한줄 소개</div>
        </div>
      </div>
      <div className="p-4">
        <p name="title" className="text-h1">
          TMI
        </p>
        <div name="content" className="">
          <div className="text-pointColor">아마란스</div>
          <div className="">거주지 : 도봉구</div>
          <div className="">고향 : 광주광역시, 부산광역시</div>
          <div className="">좋아하는 것</div>
          <div className="">
            닉네임의 유래
            <img
              className="h-36"
              src={require("../assets/images/amaranth.jpg")}
            />
            <p>
              출처 :{" "}
              <Link to="https://m.blog.naver.com/cbh3cbh3/221203028326">
                https://m.blog.naver.com/cbh3cbh3/221203028326
              </Link>
            </p>
          </div>
          <div className="">취미</div>
          <div className="">Github, Blog</div>
          <div className="">한줄 소개</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
