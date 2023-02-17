import { Link } from "react-router-dom";

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
            src={require("../../../assets/images/amaranth.jpg")}
          />
        </Link>
        <Link
          to="https://wjddydtjr.com/1101"
          target="_blank"
          title="출처 : https://wjddydtjr.com/1101"
        >
          <img
            className="mx-auto h-80"
            src={require("../../../assets/images/amaranthPlant.png")}
          />
        </Link>
      </div>
      <small className="flex w-full justify-center text-pointColor">
        이미지를 클릭하시면 출처 사이트로 이동합니다.
      </small>
    </div>
  );
};
export default NickNameInfo;
