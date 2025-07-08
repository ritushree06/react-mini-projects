import './App.css';
import { useState,useCallback,useEffect,useRef} from 'react';

function App() {

  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState(" ");

  const passwordref=useRef(null);

  const generatePassword=useCallback(()=>{
    //logic for password generation
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberallowed) str+='0123456789';
    if(charallowed) str+='!@#$%^&*()_+';

    for(let i=1;i<=length;i++){
      const index=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(index);
    }

    setpassword(pass);
  },[length,numberallowed,charallowed])

  useEffect(()=>{
    generatePassword();
  },[length,numberallowed,charallowed])

  const copypassword=()=>{
    window.navigator.clipboard.writeText(password);
    passwordref.current.select();
  }

  return (
    <div class='main'>
      <div class='container'>
        <div class='title'>
          Password Generator
        </div>
        <div class='inputbox'>
          <input type='text' placeholder='password' value={password} readOnly ref={passwordref}/>
          <button onClick={copypassword}>Copy</button>
        </div>
        <div class='custom'>
          <div class="inputrange">
            <input type='range' min={6} max={100}
            value={length} onChange={(e) => setlength(e.target.value)}
            />
            <label for="length">Length: {length}</label>
          </div>
          <div class="inputcheck">
            <input type='checkbox' defaultChecked={numberallowed}
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label for="number">Numbers</label>
            <input type='checkbox' defaultChecked={charallowed}
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label for="char">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
