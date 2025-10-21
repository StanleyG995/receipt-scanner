import Button from './components/Button/Button'
import InputImage from './components/InputImage/InputImage'

function App() {

  return (
    <>
      <h1>Receipt Scanner</h1>

      <InputImage 
      onImageSelect={(file) => console.log(file)}
      className=''
      previewWidth={300}
      previewHeight={300}
      />
    </>
  )
}

export default App
