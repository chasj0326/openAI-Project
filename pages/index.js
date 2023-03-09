import axios from 'axios';
import {useState} from 'react';

export default function Home() {
  const [animalInput, setAnimalInput] = useState('');
  const [result, setResult] = useState('...');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios('./api/generate',{
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        data: {
          animal:animalInput
        }
      });
      const data = response.data;
      if(response.status === '200'){ 
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data.result);
      setAnimalInput('');
    }
    catch(error){
      console.log(error);
      alert(error.message);
    }
  }
  
  return (
    <>
      <div>
        <h3>Name My Pet!</h3>
        <form onSubmit={handleSubmit}>
          <input
            type = 'text'
            name = 'animal'
            value = {animalInput}
            onChange = {(e)=>{
              setAnimalInput(e.target.value);
              // console.log(animalInput)
            }}
            placeholder = 'Enter an animal'
          />
          <input
            type = 'submit'
            value = 'Generate names'
          />
        </form>
      </div>
      <div>
        {result}
      </div>
    </>
  )
}
