import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (el:FilterType)=>void //функция
    deleteAffairCallback: (id:number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback} //передай в пропсы функцию deleteAffairCallback
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        // после вызова вызывает функцию setFilter(переданную через пропсы) и делает значение фильтр = "middle"
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }
    
    return (
        <div className={style.Mainbox}>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
        // нажав на кнопку вызываем функцию callback SetAll/Middle/Low
    )
}

export default Affairs
