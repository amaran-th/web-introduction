![image](https://user-images.githubusercontent.com/81465068/219571225-27face3f-67dd-4264-85a6-de09b521e7f5.png)

# 우테코 5기 1레벨 1주차(공통 교육) - 자기소개 웹 페이지 미션

![Generic badge](https://img.shields.io/badge/level1-common-yellow.svg)
![Generic badge](https://img.shields.io/badge/version-1.0.1-brightgreen.svg)

> 우아한테크코스 5기 1레벨 공통 교육 미션, 자기소개 웹 페이지를 구현한 저장소입니다.

![image](https://user-images.githubusercontent.com/81465068/219578917-f3db695d-ea52-46a8-a942-29e656612392.png)
![image](https://user-images.githubusercontent.com/81465068/219579002-03d567da-1e98-4997-aeda-66754bf699d9.png)
![image](https://user-images.githubusercontent.com/81465068/219579056-7ce0beba-67ae-4cd0-9027-0f3e4e696615.png)
![image](https://user-images.githubusercontent.com/81465068/219579113-39aa68ab-c42f-419f-b0f0-25f20f89f083.png)


# 목차
- [시작하기](#시작하기)
- [페이지 목록](#페이지-목록)
  - [자기소개 페이지](#자기소개-페이지)
  - [인생영화 BEST5 페이지](#인생영화-BEST5-페이지)
  - [방명록 페이지](#방명록-페이지)


## 시작하기
해당 레포지토리를 Clone하고 터미널을 열어 `npm start` 명령을 수행하여 웹 페이지를 실행시킬 수 있습니다.
```
git clone -b as https://github.com/amaran-th/web-introduction.git
```

## 페이지 목록
### 자기소개 페이지
- 본인의 이름과 간단한 자기소개가 문단으로 구성되어 있어야 한다.
### 인생영화 BEST5 페이지
- 인생 영화 BEST5를 표로 정리하여 보여주세요.=>table 대신 Card 컴포넌트를 사용하여 구성하였다.
  - 영화의 포스터와 바로가기 링크(네이버 영화)는 꼭 있어야 한다
### 방명록 페이지
- 이름은 <input>으로 type은 'text'이다.
  - 방문자가 본인의 취향의 영화를 고를 수 있도록 체크박스 형태로 제공한다.
- 등록 버튼과 취소 버튼이 있어야 합니다.
  - 등록 버튼은 <button>을 사용하며 type은 'button'입니다.
  - 취소 버튼은 <button>을 사용하며 type은 'reset'입니다.
- 방명록에 등록한 사람 이름(OOO)과 일치하는 취향의 개수(N)를 조사하여 “OOO님, 저와 N개의 취향이 같으시네요!"라는 Alert를 띄워야 한다.
