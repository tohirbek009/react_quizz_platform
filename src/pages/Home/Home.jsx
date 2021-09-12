import React, {useState} from 'react'
import './Home.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Button, MenuItem, TextField } from '@material-ui/core'
import Categories from '../../data/Categories'
import { useHistory } from 'react-router'
import ErrorMessage from '../../components/ErrorMessage/Index'

const Home = ({ name, setName, fetchQuestions }) => {

    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false)
    const history = useHistory()

    


    const handleSubmit = () => {
        if (!category || !difficulty || !name){
            setError(true)
            toast.error("Fill all fields!")
        }
        else{
            setError(false)
            fetchQuestions(category, difficulty, new Date().getSeconds())
            history.push("/quiz")
        }
    }

    return (
        <div className='content'>
            
            <div className='settings'>
                <span style={{fontSize:'30px'}}>Quiz Settings</span>

                <div className="settings_select">
                  
                  {error && <ErrorMessage>Please</ErrorMessage>}

                    <TextField 
                        style={{marginBottom: '25px'}} 
                        label='Enter Your Name' 
                        variant='outlined'
                        onChange={(e) => setName(e.target.value)}
                        value={name} 
                    />

                    <TextField
                        select
                        label='Select Category'
                        variant='outlined'
                        style={{marginBottom: 30}}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category} 
                    >
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }
                        
                    </TextField>

                    <TextField
                        select
                        label='Select Difficulty'
                        variant='outlined'
                        style={{marginBottom: 30}}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty} 
                    >
                        <MenuItem key="Easy" value='easy'>
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value='medium'>
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value='hard'>
                            Hard
                        </MenuItem>

                    </TextField>

                    <Button variant='contained' color='primary' size='large'
                     onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                    <ToastContainer />

                </div>

            </div>

            <img src="/bg.png" alt="quiz img" className='banner' />

        </div>
    )
}

export default Home
