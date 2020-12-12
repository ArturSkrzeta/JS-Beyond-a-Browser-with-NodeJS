import React from 'react'

const CreateUser = ({onChangeForm, createUser }) => {


    return(
        <div className="container">
          <h3>Create a New Contact</h3>
          <h6 id="success">User created!</h6>
          <form id="create-user-form" className="container_form">
            <input type="text" onChange={(e) => onChangeForm(e)} name="firstname" id="firstname" placeholder="First Name" />
            <input type="text" onChange={(e) => onChangeForm(e)} name="lastname" id="lastname" placeholder="Last Name" />
            <input type="text" onChange={(e) => onChangeForm(e)} name="email" id="email" placeholder="Email" />
            <input type="text" onChange={(e) => onChangeForm(e)} name="phonenumber" id="phonenumber" placeholder="Phone Number" />
            <button type="button" onClick={() => createUser()}>Create</button>
          </form>
        </div>
    )
}

export default CreateUser
