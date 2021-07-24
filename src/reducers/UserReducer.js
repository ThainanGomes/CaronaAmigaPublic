import { defineAnimation } from "react-native-reanimated";

export const InitialState ={
    avatar:'',
    historico:[],
    menu:''
};

export const UserReducer = (state, action) =>{
    switch(action.type){
        //armazeno o state do avatar e tem uma ação que possibilita trocar o avatar
        case 'setAvatar':
            return({...state, avatar: action.payload.avatar})
            break;
            default:
                return state;
        
    }
}