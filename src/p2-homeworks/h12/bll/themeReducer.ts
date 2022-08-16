export type initStateThemeType = typeof initState
const initState = {
    theme:"dark"
};

export const themeReducer = (state = initState, action: ChangeThemeACType): initStateThemeType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state,theme:action.theme};
        }
        default: return state;
    }
};

type ChangeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme:string) => {
    return {
        type: "CHANGE_THEME",
        theme
    } as const
};