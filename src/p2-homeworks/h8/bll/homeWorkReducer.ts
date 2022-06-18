import {UserType} from "../HW8";
type ActionType = {
    type:'sort' | 'check'
    payload: string | number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b)=>a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)
            return action.payload === "up" ?  newState : newState.reverse()
        }
        case 'check': {
            const newState = [...state].filter(el=>el.age > action.payload)
            return newState
        }
        default: return state
    }
}