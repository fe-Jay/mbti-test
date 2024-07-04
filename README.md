# 📚 내가 독서모임에 가입한다면? 독서모임 성격 테스트

## [🔗테스트 바로가기](https://dogear-mbti.netlify.app)

![테스트 미리보기](https://private-user-images.githubusercontent.com/22652668/345731358-78dd7f6a-ac3e-4b40-996f-cd8beee881e3.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNzcyODIsIm5iZiI6MTcyMDA3Njk4MiwicGF0aCI6Ii8yMjY1MjY2OC8zNDU3MzEzNTgtNzhkZDdmNmEtYWMzZS00YjQwLTk5NmYtY2Q4YmVlZTg4MWUzLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA0VDA3MDk0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ0ZjM2ODY1N2RhYTM0ZjQyMGU3ODU2MzZkNWMzZWJiMDhmNDc1NzVmNjBjMzU3NDRjZjIwZWY2MjI4OTI1MjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3sTolHjiQDR2EvwXeA-hINMv_Nzl-3HgT55S3l-H278)

<br/>
<br/>

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

<br/>
<br/>

## 주요 기술

### step을 0으로 초기화 하고 변동이 있을 때마다 화면을 변경

```tsx
{
  /* 시작 */
}
{
  step === 0 && <Intro nextStep={nextStep} />;
}

{
  /* 테스트 진행 */
}
{
  step > 0 && step < 13 && (
    <Question
      step={step}
      nextStep={nextStep}
      answers={answers}
      setAnswers={setAnswers}
    ></Question>
  );
}

{
  /* 테스트 완료 */
}
{
  step === 13 && <Result answers={answers} reStart={reStart} />;
}
```

<br/>
<br/>

### 테스트 문항 노출 및 선택항목 누적산출

```tsx
  // 결과 데이터 호출
  useEffect(() => {
    fetch("../api/questions.json")
      .then(res => res.json())
      .then((data: QuestionData[]) => {
        setData(data);
      })
      .catch(error => console.error("Error loading questions:", error));
  }, []);

  if (data.length === 0) {
    return <div>로딩중...</div>;
  }

  const { title, type, A, B } = data[step - 1] || {};

  // 유저 문항 선택시 누적산
  const handleAnswer = (answer: "A" | "B") => {
    const newAnswers = { ...answers };
    // console.log(answer + newAnswers);

    newAnswers[type] = answers[type] + (answer === "A" ? 1 : 0);

    setAnswers(newAnswers);
    nextStep();
  };
```

![테스트 진행 화면](https://private-user-images.githubusercontent.com/22652668/345731352-1dfe15e5-548a-4546-ae7a-f58817e0e1e4.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNzcyODIsIm5iZiI6MTcyMDA3Njk4MiwicGF0aCI6Ii8yMjY1MjY2OC8zNDU3MzEzNTItMWRmZTE1ZTUtNTQ4YS00NTQ2LWFlN2EtZjU4ODE3ZTBlMWU0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA0VDA3MDk0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZhN2MyYWUzZGI3YmE4NGIyODMyN2YxZjk3MzBmMjdjNTQwMjk0Y2I1Mjg4ZGFiYjczNTRkMzY2OGFjMmM0NTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ZM_MzQr8-McAilzju7MU2ZcjAw88u64Fyg3opJ4BPhI)

<br/>
<br/>

### 결과 데이터 산정 및 표시

```tsx
const { EI, SN, TF, JP } = answers;
const mbti = `${EI < 2 ? "I" : "E"}${SN < 2 ? "N" : "S"}${TF < 2 ? "F" : "T"}${JP < 2 ? "P" : "J"}`;
const result: ResultItem | undefined = data[mbti];
const { writer, img } = result;
```

![테스트 결과 화면](https://private-user-images.githubusercontent.com/22652668/345731366-a02bd1cf-b897-4b5a-9f9d-c1b5ea8115a1.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNzcyODIsIm5iZiI6MTcyMDA3Njk4MiwicGF0aCI6Ii8yMjY1MjY2OC8zNDU3MzEzNjYtYTAyYmQxY2YtYjg5Ny00YjVhLTlmOWQtYzFiNWVhODExNWExLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA0VDA3MDk0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM0ZDYzMjM2ZjU2MjczZTkwNzJmMWQ3MzcwZmUwNzQxNzlhMWY0OGJlYmNjNmRiYzMwZDczZTVkM2QxMmM2MDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._O5PaA66n-U5ryiA0B65X3g4EWC0LAtidQfoyXpUhBM)

<br/>
<br/>

### 결과 이미지 저장

```tsx
// a태그를 생성하여 download 속성에 url을 매핑하여 다운로드 실행
const handleSaveResult = () => {
  const link = document.createElement("a");
  link.href = `/assets/download/result_${img}`;
  link.download = `result_${img}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

![테스트 결과 이미지 저장 화면](https://private-user-images.githubusercontent.com/22652668/345731347-7f1c02f2-e623-4b9a-9351-3e94d42e9a96.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNzcyODIsIm5iZiI6MTcyMDA3Njk4MiwicGF0aCI6Ii8yMjY1MjY2OC8zNDU3MzEzNDctN2YxYzAyZjItZTYyMy00YjlhLTkzNTEtM2U5NGQ0MmU5YTk2LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA0VDA3MDk0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ2NzhkNzZjZTJkZTlkNzFkMjRkZjUyOGUyNTViYzIzNDFkOGViMmJjZjg1ZjdmNDEwNGNjNTdlZGE2Yjc4NjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.mGXTFFK3ymdlPV4sHxYT3ygX9KZAGtgbdGlbj8Dm7yw)

<br/>
<br/>

### 결과 공유

```tsx
// 클립보드에 복사 및 Toast 메시지 출력
const handleShareResult = () => {
  navigator.clipboard
    .writeText(baseUrl)
    .then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    })
    .catch(err => console.error("Failed to copy: ", err));
};
```

![테스트 url 공유 화면](https://private-user-images.githubusercontent.com/22652668/345731331-a72a6de8-811a-4e08-8467-f2c86e93e907.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNzcyODIsIm5iZiI6MTcyMDA3Njk4MiwicGF0aCI6Ii8yMjY1MjY2OC8zNDU3MzEzMzEtYTcyYTZkZTgtODExYS00ZTA4LTg0NjctZjJjODZlOTNlOTA3LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA0VDA3MDk0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY4MDMzNzliNjgzMDVjZTRiYjI5NjM5NDIxMDdmNjU1ZDBiNDliYzM3YjcwMzZjMGM4MTZkZDE5MTFlM2FlYmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ymH0bWGG6DqXKWGW3sPe5mEo953gTREa_QmOjuiidKo)
