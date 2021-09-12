import { Button } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router'
// import { useSelector, useDispatch } from 'react-redux'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Result = ({name, score}) => {

    const [check, setCheck] = useState(false)

    const history=useHistory()
    // const LeaderboardResult = useSelector(state=>state)
    // const dispatch = useDispatch()
    const seeRank =() =>{
        setCheck(true)
    }
   

    useEffect(() => {
        if(!name){
            history.push('/')
        }
    }, [name, history])



    return (
        <div className='result'>
            <div className="left-block">
                <span className='title'>Final score: {score}</span>

                <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    style={{alignSelf:'center', marginTop:20}}
                    href='/'
                >
                    Go To Homepage
                </Button>
            </div>
            <div className="right-block">
                <Button
                    variant='contained'
                    color='success'
                    size='large'
                    style={{alignSelf:'center', marginTop:20, width:'70%'}}
                    onClick={() => seeRank()}
                >
                    See Your Rank
                </Button>
                <div className="rank">
                    <table className='table table-hover' style={{width:'70%', margin:'auto'}}>
                        <thead className='text-center'>
                            <tr>
                                <th scope='col'>Place</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Category</th>
                                <th scope='col'>Score</th>
                                <th>Difficulty</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {check&&
                                JSON.parse(localStorage.getItem('natija')).sort((a, b) => b.score-a.score).map((value, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.category}</td>
                                        <td>{value.score}</td>
                                        <td>{value.difficulty}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>  
        </div>
    )
}

export default Result
