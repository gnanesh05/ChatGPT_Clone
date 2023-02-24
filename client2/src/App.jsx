import { useState } from 'react'
import './App.css'

function App() {
  const[search, setSearch] = useState("")
  const handleSubmit = (e)=>{
     e.preventDefault()
     console.log(search)
  }

  const keyPress = (e)=>{
    if(e.keyCode === 13)
      {
        console.log("pressed")
        handleSubmit(e)
      }
      
  }
  return (
    <div className="app">
      <div id='chat_container'></div>
      <form>
      <textarea name="prompt" cols="1" rows="1" placeholder="Ask Away!" 
         onChange={(e)=>setSearch(e.target.value)}></textarea>
        <button type="submit" onClick={handleSubmit} onKeyUp={keyPress}><img src="src\assets\send.svg" alt="send"/></button>
      </form> 
    </div>
  )
}

export default App
