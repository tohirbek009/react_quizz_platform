import './Quiz.css'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import Questions from '../../components/Questions/Index'

const Quiz = ({name, score, questions, setQuestions, setScore, difficulty}) => {

    const [options, setOptions] = useState()
    const [curQues, setCurQues] = useState(0)

    useEffect(() => {
        console.log(questions)

        setOptions(
            questions && 
            handleShuffel([
                questions[curQues]?.correct_answer,
                ...questions[curQues]?.incorrect_answers
            ])
        );

    }, [questions, curQues])
    

    const handleShuffel = (optionss) => {
        return optionss.sort(() => Math.random()-0.5);
    }
    
    return (
        <div className='quiz'>
            <span className='subtitle'>Welcome, {name}</span>
            {
                questions ? 
                <>
                    <div className="quizInfo">
                        <span>{questions[curQues].category}</span>
                        <span>Score: {score}</span>
                        
                    </div>
                    <Questions
                        curQues={curQues}
                        setCurQues={setCurQues}
                        questions={questions}
                        options={options}
                        correct={questions[curQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                        name={name}
                        category={questions[curQues].category}
                        difficulty={difficulty}
                    />
                </>
                :<CircularProgress 
                        style={{margin: 100}} 
                        color='inherit'
                        size={150}
                        thickness={1}
                    />
            }

        </div>
    )
}

export default Quiz
