import React from 'react'

function Edit({editFormData , handleEditForm , handleCancelClick}) {
  return (
   <tr>
       <td>
       <input type="text" name = "fullName" value={editFormData.fullName} required="required" placeholder='enter a name' onChange={handleEditForm} />
          
       </td>
       <td>
       
          <input type="text" name = "address" value={editFormData.address} required="required" placeholder='enter the address' onChange={handleEditForm}/>
          
       </td>
       <td>
       
          <input type="text" name = "phoneNumber" value={editFormData.phoneNumber} required="required" placeholder='enter phone number' onChange={handleEditForm} />
          
       </td>

       <td>
      
          <input type="email" name = "email" value={editFormData.email} required="required" placeholder='enter email ' onChange={handleEditForm}/>
       </td>
       <td>
           <button type='submit'>Save</button>
           <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
       </td>

   </tr>
  )
}

export default Edit
