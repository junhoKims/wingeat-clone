## 🍱 윙잇 클론 코딩

[**배포 링크**](https://wingeat-clone.netlify.app/)

[**노션**](https://tech-hoon.notion.site/bdc9facbd14c4bacb609b43b15cd23e3)

private github 계정에서 작업하고, 여기에 clone하여 제출합니다.

과제 관련 자세한 설명은 노션에 정리해 놓았습니다.


## 💻 실행 방법

**1. 원격 저장소 복제**

```bash
git clone https://github.com/tacotico/wingeat-clone
```

**2. 환경변수 생성**

*.env.development*
```bash
REACT_APP_DEVELOP_URL:http://localhost:3000
```

*.env.production*
```bash
REACT_APP_DEVELOP_URL:https://wingeat-clone.netlify.app/
```

**3. 프로젝트 폴더로 이동**

```bash
cd wingeat-clone
```

**4. 패키지 설치**

```bash
npm install
```

**5. 개발 서버 실행**

```bash
start on localhost:3000
npm start
```

**6. 빌드**

```bash
npm run build
```
