import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../redux/slices/usersReducer'
import UsersList from '../../components/UsersList/UsersList'

export default function Users() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(json => dispatch(setUsers(json.data)))
            .catch(err => console.log('Произошла ошибка при загрузке данных'))
    }, [])

    return (
        <div>
            <UsersList users={users} />
        </div>
    )
}
