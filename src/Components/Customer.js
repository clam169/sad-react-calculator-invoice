import { useState } from "react";

export default function Customer() {

  const [info, setInfo]=useState();

  return (
    <div>
      <h1> INVOICE</h1>
      <form onSubmit={e=>console.log(e.target[0].value)}>
        <label for="firstName">First name</label>
        <input type="text" name="firstName" id="firstName"></input><br/>
        <label for="lastName" >Last name</label>
        <input type="text" name="lastName" id="lastName"></input><br/>
        <label for="address">Address</label>
        <input type="text" name="address" id="address"></input><br/>
        <button type="submit">Submit Address</button>
      </form>
    </div>
  )
}