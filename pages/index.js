export default function Home() {
  return (
    <>
      <div>
        <h3>Name My Pet!</h3>
        <form>
          <input
            type = 'text'
            name = 'animal'
            placeholder = 'Enter an animal'
          />
          <input
            type = 'submit'
            value = 'submit'
          />
        </form>
      </div>
    </>
  )
}
