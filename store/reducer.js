const initialState={
    age:21
}
const myReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADD_AGE":return{...state,age:state.age+1};
        case "SUB_AGE":return {...state,age:state.age-1};
        default:return state;

    }
}
export default myReducer;
