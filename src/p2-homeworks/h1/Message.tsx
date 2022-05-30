import React from 'react'
import style from "./Message.module.css"

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.MainBox}>

            <img className={style.avatar} src={props.avatar} alt={"img"}/>

            <div className={style.ang}> </div>

            <div className={style.messageBox}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>

    )
}

export default Message
