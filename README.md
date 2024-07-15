# 📚 내가 독서모임에 가입한다면? 독서모임 성격 테스트

## [🔗테스트 바로가기](https://dogear-mbti.netlify.app)

![테스트 미리보기](./public/assets/readme/1.gif)

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
  step > 0 && step < 13 && <Question step={step} nextStep={nextStep} answers={answers} setAnswers={setAnswers}></Question>;
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
  fetch('../api/questions.json')
    .then((res) => res.json())
    .then((data: QuestionData[]) => {
      setData(data);
    })
    .catch((error) => console.error('Error loading questions:', error));
}, []);

if (data.length === 0) {
  return <div>로딩중...</div>;
}

const { title, type, A, B } = data[step - 1] || {};

// 유저 문항 선택시 누적산
const handleAnswer = (answer: 'A' | 'B') => {
  const newAnswers = { ...answers };
  // console.log(answer + newAnswers);

  newAnswers[type] = answers[type] + (answer === 'A' ? 1 : 0);

  setAnswers(newAnswers);
  nextStep();
};
```

![테스트 진행 화면](./public/assets/readme/2.gif)

<br/>
<br/>

### 결과 데이터 산정 및 표시

```tsx
const { EI, SN, TF, JP } = answers;
const mbti = `${EI < 2 ? 'I' : 'E'}${SN < 2 ? 'N' : 'S'}${TF < 2 ? 'F' : 'T'}${JP < 2 ? 'P' : 'J'}`;
const result: ResultItem | undefined = data[mbti];
const { writer, img } = result;
```

![테스트 결과 화면](./public/assets/readme/3.gif)

<br/>
<br/>

### 결과 이미지 저장

```tsx
// a태그를 생성하여 download 속성에 url을 매핑하여 다운로드 실행
const handleSaveResult = () => {
  const link = document.createElement('a');
  link.href = `/assets/download/result_${img}`;
  link.download = `result_${img}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

![테스트 결과 이미지 저장 화면](./public/assets/readme/4.gif)

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
    .catch((err) => console.error('Failed to copy: ', err));
};
```

![테스트 url 공유 화면](./public/assets/readme/5.gif)
