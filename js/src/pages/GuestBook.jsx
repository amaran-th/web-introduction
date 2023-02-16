import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { VscGithubInverted } from "react-icons/vsc";
const GuestBook = () => {
  return (
    <div className="p-4">
      <p name="title" className="text-h1">
        방명록
      </p>
      <div name="content" className=""></div>
    </div>
  );
};

export default GuestBook;
