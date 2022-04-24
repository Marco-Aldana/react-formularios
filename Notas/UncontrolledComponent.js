function App() {
  const submit = (e) => {
    const data = Array.from(new FormData(e.target))
    const formData = Object.fromEntries(data)
    console.log(formData)
    e.preventDefault()
    fetch('/lala', {method: 'POST', body:formData})
  }

  return (
    // <form action='/lala' method='POST'>
    <form onSubmit={submit}>
      <div>
        <span>lala</span>
        <input name='campo' />
      </div>
      <input name='campo-2' />
      <input type='file' value='archivo' />
      <input type='submit' value='Enviar' />
    </form>
  )
}

export default App;
