import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')


    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        // немного добавил из тудулиста)
        setError("")
        e.key === "Enter" && addUser()

    }
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)

    }
    const addUser = () => {
        if (name.trim() === "") {
            setName("")
            setError("Field is empty")
            return;
        }
        addUserCallback(name);
        alert(`Hello ${name.trim()} !`)
        setName("")


// проверку на пробел и пустую строку подглядел в тудулисте 4 выпуск
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressEnter={pressEnter}
        />
    )
}

export default GreetingContainer
