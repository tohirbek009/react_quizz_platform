import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import Result from './pages/Result/Result'
import axios from 'axios';

function App() {

  const [name, setName] = useState("")
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('')

  const fetchQuestions = async(category='', difficulty='', time) => {
    setDifficulty(difficulty)
    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`}${
        difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    
    setQuestions(data.results)
    console.log(data)
  }

  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage:"url(./quizBACK.jpg)", backgroundSize:'cover'}}>
        <Header />
        <ToastContainer />

        <Switch>

          <Route path='/' exact>
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions} questions={questions}/>
          </Route>
          <Route path='/quiz' exact>
            <Quiz 
              name={name}
              questions={questions}
              setQuestions={setQuestions}
              score={score}
              setScore={setScore}
              difficulty={difficulty}
            />
          </Route>
          <Route path='/result' exact>
            <Result name={name} score={score}/>
          </Route>

        </Switch>

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
