import {useState} from 'react';

export default function Home() {
  const [animalInput, setAnimalInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(animalInput===''){
      alert('please Input Your Animal!')
      return;
    }
    console.log(animalInput);
    setAnimalInput('');
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
    </>
  )
}
