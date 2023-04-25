import { useState } from "react"
import axios from "axios"

const Form = () =>{

const [form,setform] =useState({
    name:"",
    dificultad:"",
    duracion:"",
    temporada:"",
    body:""
})

const [errors,setErrors] = useState({
    name:"",
    dificultad:"",
    duracion:"",
    temporada:"",
    body:""
})

const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    // validate({...form, [property]:value})

    setform({...form, [property]:value})
}

const submitHandler = (event) => {
event.preventDefault()
axios.post("http://localhost:3001/activities", form)
.then(res=>{
    console.log(res, "h")
})
.catch(err =>{
console.log(err, "ño")
})
};

    return(
        <form onSubmit={submitHandler}> 
        <div>
            <label>name</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" />
        </div>
        <div>
            <label>dificultad</label>
            <input type="text"value={form.dificultad} onChange={changeHandler} name="dificultad" />
        </div>
        <div>
            <label>duracion</label>
            <input type="text" value={form.duracion} onChange={changeHandler} name="duracion" />
        </div>
        <div>
            <label>temporada</label>
            <input type="text" value={form.temporada} onChange={changeHandler} name="temporada" />
        </div>
        <div>
            <label>body</label>
            <input type="text" value={form.body} onChange={changeHandler} name="body"/>
        </div>
        <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form;