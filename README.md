## <img src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/1f320.png" width=32 height=32> 스타게이트

> 비대면 팬사인회를 위한 플랫폼 서비스

---

#### [화상통화 팬사인회 App 스타게이트](https://stargatea406.netlify.app/)

![스타게이트_1](https://github.com/l0u0h0/stargate/assets/72871841/8da3aa23-abc3-4832-a8f0-2b364dc814ee)

## [프로젝트 소개]

- 비대면 팬사인회를 위한 플랫폼 서비스
- `WebRTC`를 활용한 연예인과 팬의 1:1 비대면 팬사인회 서비스
- SSAFY 공통프로젝트 우수상 수상
- 📖 [프로젝트 진행 노션 링크](https://denim-meteorite-208.notion.site/Home-39ce6338ae194561b848609f18ab6d79?pvs=4)
- [시연 영상 (관리자 관점)](https://youtu.be/5--jl63PSaE)
- [시연 영상 (팬 관점)](https://youtu.be/jkVMuuSQKvY)
- 개발 기간
  - 2023.07.03 ~ 2023.08.18

## Link

- [스타게이트 Link](https://stargatea406.netlify.app/)
- [프로젝트 Repository](https://github.com/l0u0h0/stargate)
- [Proto Type](https://www.figma.com/file/XV9X0H24uaUo6EEIHUlKHW/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85?type=design&node-id=0%3A1&mode=design&t=iLza45bmqasaKXw7-1)

## Guide

### User

1. 로그인을 통해 대시보드 페이지에 입장한다.
2. 대시보드 페이지 상단에 있는 오픈되어 있는 팬사인회에 입장한다.
3. 팬사인회 대기 진입화면에서 공지사항, 화면 테스트, 폴라로이드 촬영 옵션 선택 등을 진행한다.
4. 대기화면에서 대기하다가 시간이 되면 화상통화 창으로 진입해서 팬사인회에 참가한다.
5. 팬사인회가가 모두 마무리 되면 촬영한 사진을 확인하고 편지를 보낸다.

### Admin

1. 로그인을 통해 대시보드 페이지에 입장한다.
2. 대시보드 페이지 우측 하단에 있는 버튼을 눌러 새로운 팬사인회를 생성페이지로 이동한다.
3. 날짜, 시간, 진행 시간 등의 옵션과 참여할 그룹과 멤버, 그리고 User 리스트를 추가한 뒤, 팬사인회를 생성한다.
4. 팬사인회 상세 페이지에서 접속 URL을 가져와 Star에게 전달한다.
5. 팬사인회가 종료된 후에 팬들의 편지 리스트를 확인하고 전달한다.

### Star

1. Admin에게 접속할 URL을 전달받는다.
2. 화상통화 창으로 진입해서 팬사인회에 참가한다.

## Contents

0. [Dev 서버 구동방법](#dev-서버-구동방법)
1. [개발 배경](#개발-배경)
2. [Soultion](#soultion)
3. [Preview](#preview)
4. [Skills](#skills)
5. [Structure](#structure)
6. [Team](#team)
7. [Project Control](#project-control)
8. [Code Convention](#code-convention)
9. [Challenges](#challenges)

## Dev 서버 구동방법

아래 코드를 터미널에 붙여넣습니다.

#### git clone

git clone https://lab.ssafy.com/s09-webmobile1-sub2/S09P12A406.git

#### pnpm 설치

npm i -g pnpm

#### node_modules 설치

pnpm install

#### Dev 서버 구동

pnpm run dev

## 개발 배경

![스타게이트 - 3](https://github.com/l0u0h0/stargate/assets/72871841/aedc2916-38dd-4bce-8614-c422ed31cab8)
![스타게이트 - 4](https://github.com/l0u0h0/stargate/assets/72871841/c43a3e2c-3e4f-4836-88ee-e4c361a25fae)
![스타게이트_-_5](https://github.com/l0u0h0/stargate/assets/72871841/2d78ca41-0483-44a7-a6a8-07926cba921c)
![스타게이트 - 6](https://github.com/l0u0h0/stargate/assets/72871841/9571603a-35fa-466e-941e-f67f5a5c46bb)
![스타게이트 - 9](https://github.com/l0u0h0/stargate/assets/72871841/4733a180-d74e-4652-9341-e74657e67d27)

## Solution

![스타게이트_-_10](https://github.com/l0u0h0/stargate/assets/72871841/508a2b79-9451-4377-aa7e-bf2939af292e)
![스타게이트_-_11](https://github.com/l0u0h0/stargate/assets/72871841/568c0bba-6ea2-452e-9ee0-a9531c899d3f)

## Preview

![스타게이트_-_13](https://github.com/l0u0h0/stargate/assets/72871841/3d1d037c-5b96-4c6b-81cf-d0b2919d41b4)

### User

![스타게이트_-_21](https://github.com/l0u0h0/stargate/assets/72871841/9488c2f5-87d4-43d4-a595-5438da6ebcd7)
![스타게이트_-_22](https://github.com/l0u0h0/stargate/assets/72871841/f71ba886-a3d5-4a20-b738-a4d00960b20b)
![스타게이트_-_23](https://github.com/l0u0h0/stargate/assets/72871841/95563bb2-e826-4f88-8495-ff574d365b00)
![스타게이트_-_24](https://github.com/l0u0h0/stargate/assets/72871841/02cb8d0b-cf79-4757-a040-9729a81b2403)
![스타게이트_-_25](https://github.com/l0u0h0/stargate/assets/72871841/67e4367c-50e2-4253-b724-8e5e97c92e6a)

### Admin

![스타게이트_-_26](https://github.com/l0u0h0/stargate/assets/72871841/c3ccc5d5-da80-467c-a77c-11eb5bc7bfbf)
![스타게이트_-_27](https://github.com/l0u0h0/stargate/assets/72871841/8e1f436f-102c-4e20-a7b3-3a2d92f70d1f)

## Skills

### Frontend

- React
  - Recoil
  - React Query
- TypeScript
- Tailwind CSS
- Axios
- pnpm
- Vite

### Backend

- Java
- Spring Boot
- Gradle
- dependencies
  - WebSocket
  - Spring Security
  - JPA
  - Validation
- MySQL

### Server

- AWS EC2
- Docker Desktop(예정)

## Structure

### Frontend

##### Frontend에서는 Atomic Design Pattern을 커스텀하여 Atoms, Organisms, Pages 3단계로 나눠서 구현하였습니다.<br>

Atom : 더 이상 분해할 수 없는 기본 컴포넌트<br/>
Organism : 하나 이상의 Atom을 조합<br/>
Page : 비즈니스 로직을 관리, 하위 단위에서 필요한 상태값들을 props로 전달.

```
C:.
├─public
└─src
    ├─assets
    │  ├─font
    │  └─image
    ├─atoms
    │  ├─auth
    │  ├─board
    │  ├─common
    │  ├─event
    │  └─remind
    ├─hooks
    ├─organisms
    │  ├─auth
    │  ├─board
    │  └─event
    └─pages
        ├─auth
        ├─star
        ├─admin
        │  ├─board
        │  ├─event
        │  └─signUp
        └─user
            ├─board
            └─video
```

### Backend

```
C:.
├─main
│  ├─java
│  │  └─com
│  │      └─ssafy
│  │          └─stargate
│  │              ├─advice
│  │              ├─config
│  │              ├─controller
│  │              ├─exception
│  │              ├─filter
│  │              ├─handler
│  │              ├─model
│  │              │  ├─dto
│  │              │  │  ├─common
│  │              │  │  ├─request
│  │              │  │  └─response
│  │              │  ├─entity
│  │              │  ├─repository
│  │              │  └─service
│  │              └─util
│  └─resources
└─test
    └─java
        └─com
            └─ssafy
                └─stargate
```

## Project Control

##### Version Control: Git, GitLap

##### Task Control: Notion, Figma, Jira, Slack

## Code Convention

#### Part별 Code Convention은 노션에 작성했습니다.

### [Frontend](https://denim-meteorite-208.notion.site/478eaf4a6ea44312bfd3a91645586f5e?pvs=4)

### [Backend](https://denim-meteorite-208.notion.site/724d3b46fe24422f8429c3ef21ef3d18?pvs=4)

### [GIT 커밋 컨벤션](https://denim-meteorite-208.notion.site/b5e5826221be4b2fbdee539e6ea82d2d?pvs=4)

| Word     | Description                                       |
| -------- | ------------------------------------------------- |
| feature  | 새로운 기능 추가                                  |
| fix      | 버그 수정                                         |
| build    | 빌드 관련 파일 수정, 패키지 매니저 수정           |
| refactor | 코드를 리팩토링 할 때                             |
| style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| chore    | 사소한 코드 또는 언어를 변경할 때                 |
| test     | 테스트 코드, 리펙토링 테스트 코드 추가            |
| docs     | 문서를 쓸 때                                      |

### Commit Message Structure

기본적으로 커밋 메세지는 아래와 같이 제목/본문/꼬리말로 구성한다

```
type : subject

body
```

```
feat: Summarize changes in around 50 characters or less [#123, #456, #789]

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:
```

- type
  - 과거시제 사용하지 않고 명령어로 작성
    - fix, add …
- subject
  - 50자 이하
- body (선택사항)
  - 부연설명이 필요하거나 커밋의 이유를 설명할 경우 작성
  - 72자를 넘기지 않고 제목과 구분되기 위해 한칸 띄어 작성

### PR / MR 가이드

- Merge 형식

  - 제목
    - `**기능: 작업내역[JIRA 티켓]**`
    - ex) refactor: auth 페이지 사용하지 않는 변수 제거 [COMMWEBFNT-217]
  - 내용

    ```
    ### Description

    설명

    ### Changes

    변경사항

    ### Test Checklist

    테스트 항목
    ```

- master, develop branch에는 commit할 수 없습니다.
- master는 prod에 배포하는 branch이기 때문에 주의해주세요.

### branch

{fe/be}/{type}/{word}

### 코드 리뷰 룰

- 1일 1Merge를 지향합니다.
- PR을 Merge 하기 위해선 반드시 1명 이상의 코드 리뷰어가 필요합니다.
  - 코드 리뷰어는 코드리뷰어를 지정해서 _Assignees으로 지정합니다 ._
- 오전 코어 코드리뷰 시간에 집중해서 코드리뷰를 작성합니다.
- 코드 리뷰는 부담없이 자유로운 분위기 속에서 진행합니다.
- 리뷰 내용은 아래 사항을 고려하여 작성합니다.
  ```
  1. 코드의 일관성 유지
  2. 로직 더블체크
  3. 코드 중복 제거
  4. 함께 성장
  ```

## Challenges

#### FE folder architecture

##### Before

```
C:.
├─public
└─src
    ├─assets
    │  ├─font
    │  └─image
    ├─atoms
    ├─hooks
    ├─organisms
    └─pages
        ├─auth
        ├─star
        ├─admin
        │  ├─board
        │  ├─event
        │  └─signUp
        └─user
            ├─board
            └─video
```

##### after

```
C:.
├─public
└─src
    ├─assets
    │  ├─font
    │  └─image
    ├─atoms
    │  ├─auth
    │  ├─board
    │  ├─common
    │  ├─event
    │  └─remind
    ├─hooks
    ├─organisms
    │  ├─auth
    │  ├─board
    │  └─event
    └─pages
        ├─auth
        ├─star
        ├─admin
        │  ├─board
        │  ├─event
        │  └─signUp
        └─user
            ├─board
            └─video
```

처음에는 상위 컴포넌트에서의 재사용성을 높이기 위해 atoms와 organisms만을 만들어두고 내부를 플랫하게 사용하였습니다.<br>
작업이 진행되며 지나치게 atoms와 organisms가 늘어났고, 이에 대한 불편함도 늘어났습니다.<br><br>
이에 FE팀은 폴더 구조를 수정하기로 결정하였고, 계층을 우선으로 분리하는 계층 - 기능 구조와 기능을 우선으로 분리하는 기능 - 계층 구조 중 무엇을 선택할지에 대한 논의가 있었습니다.<br><br>
이미 Atomic한 구조를 사용하기로 합의하였고, UI 역시도 Atomic Design Pattern에 알맞게 작성된 상태였기에 좀 더 Atomic한 계층 - 기능 구조로 폴더 구조를 변경하였습니다.<br>
자세한 과정에 대해서는 [Blog](https://cksxkr5193.tistory.com/4)에 작성했습니다.

### 기타 이슈 및 에러 해결에 대해 노션에 작성했습니다.

#### [Frontend](https://denim-meteorite-208.notion.site/FE-7c1661c8b54b4e5cb573f3e864d0c40c?pvs=4)

#### [Backend](https://denim-meteorite-208.notion.site/BE-9c86abd9585d496e8f7b5c6e682433dc?pvs=4)
