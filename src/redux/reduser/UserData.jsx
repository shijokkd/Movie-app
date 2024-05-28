
const UserData = (state=[],action)=>{
    if(action.type==="AddUser"){
        const updateUser= [...state,action.payload];
        localStorage.setItem('UsersData',JSON.stringify(updateUser))
        return updateUser
    }else {
        return state
    }

}


export default UserData
