import { Component } from "solid-js";
import "./style.scss";

interface QABoxProps {
  question: string;
  answer: string;
}

export const QABox: Component<QABoxProps> = (props) => {
  let _answerRef;

  const clickHandler = (data, event) => {
    // _answerRef.classList.toggle("hidden");
  }

  return (
    <div class="QABox">
      <h3 class="question" onClick={clickHandler}>{props.question}</h3>
    <p class="answer" ref={_answerRef}>{props.answer}</p>
    </div>
  )
}