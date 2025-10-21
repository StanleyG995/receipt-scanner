import InputImage from './components/InputImage/InputImage'

function App() {

  return (
    <div className='app'>
      <h1>Receipt Scanner</h1>

      <InputImage 
      onImageSelect={(file) => console.log(file)}
      className=''
      previewWidth={300}
      previewHeight={300}
      />
    </div>
  )
}

export default App
