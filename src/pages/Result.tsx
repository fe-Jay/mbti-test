import React from "react";
import Button from '@/component/Button';
import { ResultProps } from "@/type";

const results = {
	ESTJ: { writer: 'ESTJ', img: 'ESTJ.png' },
	ESTP: { writer: 'ESTP', img: 'ESTP.png' },
	ESFJ: { writer: 'ESFJ', img: 'ESFJ.png' },
	ESFP: { writer: 'ESFP', img: 'ESFP.png' },
	ENTJ: { writer: 'ENTJ', img: 'ENTJ.png' },
	ENTP: { writer: 'ENTP', img: 'ENTP.png' },
	ENFJ: { writer: 'ENFJ', img: 'ENFJ.png' },
	ENFP: { writer: 'ENFP', img: 'ENFP.png' },
	ISTJ: { writer: 'ISTJ', img: 'ISTJ.png' },
	ISTP: { writer: 'ISTP', img: 'ISTP.png' },
	ISFJ: { writer: 'ISFJ', img: 'ISFJ.png' },
	ISFP: { writer: 'ISFP', img: 'ISFP.png' },
	INTJ: { writer: 'INTJ', img: 'INTJ.png' },
	INTP: { writer: 'INTP', img: 'INTP.png' },
	INFJ: { writer: 'INFJ', img: 'INFJ.png' },
	INFP: { writer: 'INFP', img: 'INFP.png' },
}

const Result: React.FC<ResultProps> = ({ answers, reStart }) => {
	const { EI, SN, TF, JP } = answers;
	
	const mbti = `${EI < 2 ? 'I' : 'E'}${SN < 2 ? 'N' : 'S'}${TF < 2 ? 'F' : 'T'}${JP < 2 ? 'P' : 'J'}`;
	const { writer, img } = results[mbti];

	return	(
		<>
			<h2>결과</h2>
			<img id="img" className="" src={`asset/img/${img}`} alt={ writer } />
			<Button
				type="button"
				subject="다시하기"
				design="black"
				onClick={() => {
					reStart();
				}}
			/>
		</>
	);
};

export default Result;
