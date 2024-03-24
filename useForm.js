import { useState } from "react";

export const useForm = (inicialForm = {}) => {
   
    const [formState, setFormState]= useState(inicialForm);

    const onInputChange = ({ target }) => {
       
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const onResetForm =()=>{
    setFormState(inicialForm);
    }
  
  
    return {
        ...formState,
        onInputChange,
        formState,
        onResetForm,
        
  }
}
