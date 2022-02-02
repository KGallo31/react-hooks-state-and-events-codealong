import React, { useState }from "react";

function Toggle() {
  const [toggle,setToggle] = useState(false)
  function changeToggle(){
    setToggle(!toggle)
  }
  const color = toggle? 'red' : 'blue'
  return <button style={{background: color}} onClick={changeToggle}>{toggle?'ON':'OFF'}</button>;
}
export default Toggle;