import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordReference = useRef()

  // Cashes the function definition
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers){
      str = str.concat("1234567890");
    }
    if(character){
      str = str.concat("<>;:{}[]+=_-)(*&^%$#@!")
    }
    for(let i=0; i<length; i++){
      let idx = Math.floor(Math.random() * str.length )
      pass += str.charAt(idx);
    }
    setPassword(pass);
  }, [length, numbers, character, setPassword]) 
  // if  array is empty, then the function definition will have hardcoded values of variables. then the output will be of constant length of characters only, even after changing teh length or including special characters



  // Runs the callback after initial render and change in dependency array
  useEffect(()=>{
    passwordGenerator()
  }, [length, character, numbers ]) 


  const copyPassword = useCallback(()=>{
    // Selects the password copied
    passwordReference.current?.select() 
    
    // Selects the range of copies password, but entire passowrd is copied
    // passwordReference.current?.setSelectionRange(0, 5) 
    
    // copies the argument in clipboard
    window.navigator.clipboard.writeText(password)    
  }, [password])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} readOnly placeholder='Password' className='outline-none w-full py-1 px-3' ref={passwordReference}/>
        <button  className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='felx items-center gap-x-1'>
          <input type="range" min={8} max={40} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultValue={numbers} onChange={()=>{setNumbers((previous)=>!previous)}} />
          <label >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultValue={character} onChange={()=>{setCharacter((previous)=>!previous)}} />
          <label >Character</label>
        </div>
      </div>
    </div>
    </>


    

  )
}

export default App
