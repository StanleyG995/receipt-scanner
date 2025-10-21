import Button from './components/Button/Button'

function App() {

  return (
    <>
      <h1>Receipt Scanner</h1>
      <Button 
      variant='primary'
      outline={false}
      onClick={() => console.log('Działa!')}
      >Accept</Button>
    </>
  )
}

export default App
