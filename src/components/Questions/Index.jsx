import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import ErrorMessage from '../../components/ErrorMessage/Index'
import './style.css'
import { toast } from 'react-toastify';

const Index = ({curQues,setCurQues,questions,options,correct,score,setScore,setQuestions, name, category, difficulty}) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const localData = localStorage.getItem('natija')
    const [natija, setNatija] = useState(localData?JSON.parse(localData):[])

    const handleSelect = (i) => {
        if (selected === i && selected===correct){
            return 'select';
        }
        else if (selected === i && selected !== correct){
            return 'wrong';
        }
        else if(i===correct){
            return 'select';
        }
    }

    const history = useHistory()

    const handleCheck = (i) => {
        setSelected(i);
        if (i===correct) setScore(score + 1)
        setError(false)
    }

    const handleNext = (i) => {
        if(curQues > 8){
            const data={
                name, 
                category, 
                score,
                difficulty
            }
            
            // setNatija([...JSON.parse(localData)])
            natija.push(data)
            console.log("natija:" + natija)
            history.push('/result')
            toast.success("You completed all quiz questions successfully!")
            localStorage.setItem('natija', JSON.stringify(natija))
        }
        else if(selected){
            setCurQues(curQues + 1)
            setSelected()
        }else{
            setError('Please select an option first')
        }
    }

    const handleQuit = () => {

    }

    return (
        <div className='question'>
            <h1>Question: {curQues + 1}/{questions.length}</h1>

            <div className="singleQuestion">
                <h2>{ questions[curQues].question }</h2>
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <div className="options">
                    {
                        options && 
                        options.map(i=>(
                            <button
                                onClick={() => handleCheck(i)}
                                className={`singleOption ${selected && handleSelect(i)}`}
                                key={i}
                                
                                disabled={selected}
                            >{i}</button>
                         ))
                    }
                </div>
                <div className="controls">
                    <Button
                        variant="contained"
                        color='secondary'
                        size='large'
                        style={{width: 185}}
                        href='/'
                        onClick={handleQuit}
                        className='controls-btn'
                    >Quit</Button>
                    <Button
                        variant="contained"
                        color='primary'
                        size='large'
                        style={{width: 185}}
                        onClick={handleNext}
                        className='controls-btn'
                    >Next Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Index
