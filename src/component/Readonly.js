import React from 'react'

function Readonly({item,handleEditClick , handleDeleteClick}) {
  return (
    <tr key={item.id}>
                        <td>{item.fullName}</td>
                        <td>{item.address}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.email}</td>
                        <td>
                            <button type='button'  onClick={ (e) => handleEditClick(e,item)}>
                              Edit
                            </button>
                            <button type="button" onClick={() => handleDeleteClick(item.id)}>
          Delete
        </button>
                        </td>
                    </tr>
  )
}

export default Readonly
