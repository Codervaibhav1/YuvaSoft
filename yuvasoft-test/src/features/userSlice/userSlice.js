import { createSlice } from "@reduxjs/toolkit";

const localState = ()=>{
    try {
        const userState =  localStorage.getItem('User')
        if(userState === null){
            return undefined
        }
        console.log(userState)
        return JSON.parse(userState)
    } catch (error) {
        console.log(error)
    }
}

const saveLoaclStorage = (state)=>{
    try {
        const userState = JSON.stringify(state)
        localStorage.setItem('User' ,userState)
    } catch (error) {
         console.log(error)
    }
}
const userSlice = createSlice({
    name:'User',
    initialState: localState()||{
        User:[],
        Admin:null,
        edit:{
            editUser:{},
            isEdit: false
        }
    },
    reducers:{
        userLogin:(state , action) =>{
              const updateState ={
                ...state,
           Admin:[action.payload , ...state.User]
              }
              saveLoaclStorage(updateState)
            return updateState
        },
        userSave:(state , action) =>{
            const updateState = {
             ...state ,
             User :[action.payload , ...state.User]
            } 
            saveLoaclStorage(updateState)
            return updateState
         },
         userRemove:(state , action) =>{
               const updateState = {
                 ...state,
                 User:state.User.filter((item) => item.id !== action.payload)
               }
               saveLoaclStorage(updateState)
               return updateState
         },
         userEdit:(state , action)=>{
             const updateState ={
                 ...state,
                 edit:{editUser : action.payload , isEdit:true}
             }
             saveLoaclStorage(updateState)
             return  updateState
         },
         userUpdate:(state ,action)=>{
            const updateState = {
                 ...state,
                 User:state.User.map(item => (item.id === action.payload.id ?{...item ,...action.payload}:item)),
                 edit: { editUser: {}, isEdit: false }
             }
             saveLoaclStorage(updateState)
             return updateState
                }       }
})

export const {userLogin,userSave ,userEdit,userRemove,userUpdate} = userSlice.actions
export default userSlice.reducer

