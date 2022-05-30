import React, {useState} from 'react'
import Affairs from './Affairs'


export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter((af) => af.priority === "high") // неуверен но оказалось что все работает
    if (filter === 'middle') return affairs.filter((af) => af.priority === "middle")
    if (filter === 'low') return affairs.filter((af) => af.priority === "low")
    else return affairs // что бы ts не ругался
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // отфильтруй массив по Id и выдай новый массим без id который пришёл
    return affairs.filter((af) => af._id !== _id) // неуверен
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all') // после нажатия на кнопку меняет фильтр на то значение, которое пришло "middle"

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) //получи id и вызови фукнцию setAffairs
    //в которой вызывается функция deleteAffair и в неё передаётся массив и айди и вызывается фильтрация
    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>

            <hr/>
        </div>
    )
}

export default HW2
