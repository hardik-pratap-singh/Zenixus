import React from 'react'

const Table = (props) => {
    const {userid , username  , name , email , phone , role} = props ; 
    return (
            <tr>
                <th scope="row">{userid}</th>
                <td>{username}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{role === 2 && "Lead"}{role === 1 && "Manager"}{role === 3 && "Developer"}</td>
            </tr>
    )
}

export default Table
