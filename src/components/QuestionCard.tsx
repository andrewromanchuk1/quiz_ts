import { AnswerObject } from "../App"
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
   question: string;
   answers: string[];
   callback: (e: React.MouseEvent<HTMLButtonElement> ) => void;
   userAnswer: AnswerObject | undefined;
   questionNr: number;
   totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
   question,
   answers,
   callback, 
   userAnswer,
   questionNr,
   totalQuestions
 }) => {
  return (
   <>
      <Wrapper>
         <p className="questionNumber">
            Question: {questionNr} / {totalQuestions}
         </p>
         <p dangerouslySetInnerHTML={{__html: question}}></p>
         <div>
            {answers.map((answer, index) => 
               <ButtonWrapper
                  key={index}
                  correct={userAnswer?.correctAnswer === answer ? 1 : 0}
                  userclicked={userAnswer?.answer === answer ? 1 : 0}
               >
                  <button disabled={!!userAnswer} onClick={callback} value={answer}>
                     <span dangerouslySetInnerHTML={{__html: answer}}></span>
                  </button>
               </ButtonWrapper>
            )}
         </div>
      </Wrapper>    
   </>
  )
}

export default QuestionCard