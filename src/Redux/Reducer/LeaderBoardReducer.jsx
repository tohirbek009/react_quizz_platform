

const LeaderBoardReducer = (state=[], action) => {
    switch(action.type){
        case "RESULT_IN_LEADERBOARD":
            state=[...state, action.payload]
            return state
        default:
            return state;
    }
}

export default LeaderBoardReducer
