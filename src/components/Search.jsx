import React,{useState} from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+ input)
    };
    
  return (
    <FormStyle onSubmit={submitHandler}>
    <div>
        <FaSearch />
        <input onChange={(e)=> setInput(e.target.value)} type="text" value={input}/>
    </div>
    </FormStyle>
  )
};

const FormStyle = styled.form`
    div{
        margin: 0 auto;
        position: relative;
    }
    input{
            width: 100%;
            height: 30px;
            outline: none;
            border: none;
            border-radius: 1rem;
            font-size: 20px;
            background:linear-gradient(35deg, #494949, #313131);
            color: white;
            padding: 1rem 3rem;
            font-size: 1.5rem;
            margin-left: 1rem;

    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
        font-size: 1.5rem;

    }
`


export default Search