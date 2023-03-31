import { useState } from "react";

export default function () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e){
    const {name, value} = e.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]:value
    }))
  }

  return (
    <form action="#">
      <input type="text" name="name" value={formData.name} placeholder="name" onChange={handleChange} />
      <input type="email" name="email" value={formData.email} placeholder="email" onChange={handleChange} />
      <input type="text" name="message" value={formData.message} placeholder="message" onChange={handleChange} />
      <button onClick={submit}>submit</button>
    </form>
  );
}
