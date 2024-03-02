import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const ContactDetails = () => {
    const navigate = useNavigate();
    const click = () =>{
        return navigate('/')
    }

    const { id } = useParams();
    const contatos = [
        {
            name:  "Raylan Cordeiro",
            username: "raylancordeiro"
        },
        {
            name:  "Dirceu dos Santos",
            username: "dirceusljr"
        }
       
        
    ];

  return (
    <div>
        <h3>{contatos[id-1].name}</h3>
        <img src={`http://github.com/raylancordeiro${contatos[id-1].username}.png`} alt=' ' />
        <button onClick={click}>Voltar</button>
    </div>
  )
}

export default ContactDetails
