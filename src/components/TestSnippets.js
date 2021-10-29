//=============================================================
// Lists 
//=============================================================
// const TestSnippets = () => {
//     return(
//         <h1>My Test</h1>
//     )
// }
// export default TestSnippets



// const TestSnippets = () => {
//     const infos = ['A', 'B', 'C']
//     return(   
//         infos.length === 0 ? "XXXX" :   (infos.map((info) => <p key={info}>{info}</p>))
//     ) 
// }
// export default TestSnippets



// const TestSnippets = () => {
//     const infos = ['A', 'B', 'C']
//     return(   
//         <div>
//  {infos.length === 0 ? "XXXX" :   (infos.map((info) => <p key={info}>{info}</p>))}
//         </div>
//     ) 
// }
// export default TestSnippets
//=============================================================
// Form 1
//=============================================================

// const TestSnippets = () => {

//     const myInput = (e) => {
//         console.log("Input  ====  ", e.target.value)
//     }

//     const submitForm = (e) => {
//         e.preventDefault()
//         console.log("Form  ====  ",e)
//         console.log("submitForm  ====  ",e.target[0].value)
//     }

//     return(
//         <div>
//         <form onSubmit={submitForm}>
//         <input type="text" name="myInput" onChange={myInput}></input>
//         <input type="submit" value="Submit" />
//         </form>
//         </div>
//     )

// }
// export default TestSnippets

//=============================================================
// Form Z
//=============================================================
import React,{useState, useRef} from 'react'
const TestSnippets = () => {
    const myRefInput = useRef('PlaceHolder')

    const [myVal , setMyVal ] = useState()

    const myInput = (e) => {
        console.log("Input  ====  ", e.target.value)
        setMyVal(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log("useRef value  ====  ",myRefInput.current.value)
        console.log("myVal  ====  ",myVal)
        console.log("submitForm  ====  ",e.target[0].value)
    }

    return(
        <div>
        <form onSubmit={submitForm}>
        <input type="text" ref={myRefInput} value={myVal}  onChange={myInput}></input>
        <input type="submit" value="Submit" />
        </form>
        </div>
    )

}
export default TestSnippets