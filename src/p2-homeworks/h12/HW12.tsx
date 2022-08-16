import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useDispatch()


    const theme = useSelector<AppStoreType, string>(state => state.themeReducer.theme)
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
