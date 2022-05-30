import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {

    affair: AffairType //элемент массива
    deleteAffairCallback:(id:number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)} // вызвавшись вызови функцию deleteAffairCallback и передай ей значение _id

    return (
        <div className={style.tasks}>
            {props.affair.name}
            <button className={style.deletbutton} onClick={deleteCallback}>Delet</button>
        </div>
    )
    //нажав вызави deleteCallback
}

export default Affair
