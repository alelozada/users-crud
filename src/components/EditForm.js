import { useEffect } from "react";
import { useForm } from "react-hook-form"

const EditForm = ({defValues, onEdit})  => {

  const { register, handleSubmit, reset } = useForm();

  const emptyValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
  }

  useEffect(() => {
    if(defValues){
      reset(defValues)
    }
  }, [reset, defValues])

  const onSubmit = (data) => {
    console.log(data);
    onEdit(data)
    reset(emptyValues)
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="first_name">Name: </label>
      <input id="first_name" type="text" {...register("first_name")} required/>
      <br />
      <label htmlFor="last_name">Last Name: </label>
      <input id="last_name" type="text" {...register("last_name")} required/>
      <br />
      <label htmlFor="password">Password: </label>
      <input id="password" type="password" {...register("password")} required/>
      <br />
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" {...register("email")} required/>
      <br />
      <label htmlFor="birthday">Birthday: </label>
      <input id="birthday" type="date" {...register("birthday")} />
      <br />
      <input type="submit" value="Submit" />
      <hr />
    </form>
  )
}

export default EditForm