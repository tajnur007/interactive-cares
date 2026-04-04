import { useState, useRef, useEffect } from 'react'
import './App.css'
import FullName from './FullName';

function App() {
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  const [fullName, setFullName] = useState('');
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const manualRef = useRef(null);
  const [value, setValue] = useState(5);
  // const valueRef = useRef(5);

  // let value = 5;

  useEffect(() => {
    console.log('::Component Mounted::');
  }, []);

  useEffect(() => {
    console.log('::Component Updated::');
  }, [fullName, value]);


  const handleSubmit = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const fullName = firstName + ' ' + lastName;
    setFullName(fullName);
    // value = 10;
    // setValue(10);
    // valueRef.current = 10;
  }

  const handleAnotherBtnClick = () => {
    setFullName('');
  }

  return (
    <>
      <section id="center">
        <div className="">
          {fullName && <FullName name={fullName} />}
          <p>
            First Name: 
            {/* <input type="text" onChange={(e) => setFirstName(e.target.value)} />  */}
            <input type="text" ref={firstNameRef} /> 
          </p>
          <p>
            Last Name:
            {/* <input type="text" onChange={(e) => setLastName(e.target.value)} /> */}
            <input type="text" ref={lastNameRef} /> 
          </p>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          {/* <p ref={manualRef}>Manual: </p> */}
          <div>
            <button onClick={handleAnotherBtnClick}>Reset</button>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
