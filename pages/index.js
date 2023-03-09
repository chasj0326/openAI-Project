import {useState} from 'react';

export default function Home() {
  const [animalInput, setAnimalInput] = useState('');
  const [result, setResult] = useState('...');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       const response = await fetch('./api/generate', {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({animal: animalInput})
      })
      const data = await response.json();
      if(response.status !== 200){ //status(200) : success
        throw data.error || new Error(`Request failed with status ${response.status}`)
      }
      console.log(animalInput);
      setResult(data.result);
      setAnimalInput('');
    }
    catch(error){
      console.error(error)
      alert(error.message)
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
