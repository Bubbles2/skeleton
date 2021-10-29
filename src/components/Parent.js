import  React, {createContext} from "react"
import Child from "./Child"
import GrandChild from "./GrandChild"
const MyContext = createContext()
const Parent = () => {
    return (
        <MyContext.Provider value="AA1">
        <div>
        Parent
        <Child></Child>
        <GrandChild con={MyContext}></GrandChild>
        </div>
        </MyContext.Provider>
      
    )
}
export default Parent