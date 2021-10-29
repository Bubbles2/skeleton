import {useRef} from 'react'
import {useChkColor} from './useChkColor'
export const C1 = () => {
    const colVal = useChkColor(8)
    const inputRef = useRef(null)
    console.log("Val ==>", inputRef)
    //const setRed = false
    const showAlert = () => {
        alert(inputRef.current.value)
    }
    return(
        <div>
        <div style={ colVal ? { color : 'red'} : {color : 'black'} } >
        Component 1
        </div>
        <div>
        <input type='text' ref={inputRef}></input>
        </div>
        <div>
      <button onClick={showAlert}>Show Value</button>
        </div>
         </div>
        
        )
}
export default C1