import React , {useState, Fragment} from 'react'
import {nanoid} from 'nanoid' 
import Readonly from './Readonly'
import Edit from './Edit'



function TodoForm() {

const [emp , setEmp] = useState([])

const [editEmpId , setEditEmpId] = useState(null);

const [addData , setAddData] = useState({
    fullName : '',
    address : '',
    phoneNumber : '',
    email : ''
})

const [editFormData,setEditFormData] =useState({
    fullName : '',
    address : '',
    phoneNumber : '',
    email : ''
})

const handleEditForm = e =>{
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;
    
    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData)

}

const handleAdd = e =>  {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...addData};
    newFormData[fieldName] = fieldValue;
    
    setAddData(newFormData);
}

const handleSubmit= e =>{
e.preventDefault();

const newEmp = {
    id: nanoid(),
    fullName: addData.fullName,
    address: addData.address,
    phoneNumber: addData.phoneNumber,
    email: addData.email
}



const newEmps = [...emp , newEmp]
setEmp(newEmps);
console.log(newEmps)
}

const handleEditSubmit = e => {
    e.preventDefault();

    const editedEmp = {
    id : editEmpId,
    fullName: editFormData.fullName,
    address: editFormData.address,
    phoneNumber: editFormData.phoneNumber,
    email: editFormData.email

    }
    const newEmps = [...emp]
    
    const index= emp.findIndex( (item) => item.id === editEmpId)

    newEmps[index] = editedEmp;
    setEmp(newEmps);
    setEditEmpId(null);
}

const handleEditClick =(e,employee) =>{
    e.preventDefault();
    setEditEmpId(employee.id)

    const formValues = {
        fullName: employee.fullName,
    address: employee.address,
    phoneNumber: employee.phoneNumber,
    email: employee.email
    }

    setEditFormData(formValues)
}



const handleCancelClick = () => {
    setEditEmpId(null);
  };


  const handleDeleteClick = (empId) => {
    const newEmps = [...emp];

    const index = emp.findIndex((item) => item.id === empId);

    newEmps.splice(index, 1);

    setEmp(newEmps);
  };


  return (
    <div>
        <form onSubmit={handleEditSubmit}>
        <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              
               {
                emp.map((item,i) => (
                    
                    <Fragment>
                        { editEmpId == item.id ?  
                        (<Edit  editFormData = {editFormData}  handleEditForm={handleEditForm} handleCancelClick={handleCancelClick}/> ): 
                        (<Readonly key={i} item={item} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>) }
                    </Fragment>
                 
                ) ) }

              
          </tbody>
      </table>
     
        </form>
      
    
      <h2>Add employee</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" name = "fullName" required="required" placeholder='enter a name' onChange={handleAdd}/>
          <input type="text" name = "address" required="required" placeholder='enter the address' onChange={handleAdd}/>
          <input type="text" name = "phoneNumber" required="required" placeholder='enter phone number' onChange={handleAdd}/>
          <input type="email" name = "email" required="required" placeholder='enter email 'onChange={handleAdd}/>

          <button type='submit' >ADD</button>

        
      </form>
      
    </div>
  )
}

export default TodoForm
