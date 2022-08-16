const initState = {
    isLoading: false
}
export type initStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: initStateType = initState, action: loadingACType): initStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.loading}
        }
        default:
            return state
    }
}

export type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (loading: boolean) => {
    return {
        type: "CHANGE_LOADING",
        loading
    } as const
}