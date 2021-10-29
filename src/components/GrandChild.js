import  React, { useContext }  from "react"

const GrandChild = (props) => {
      const con = useContext(props.con)
      console.log('GC Context ==>',con) 
    return (
        <div>
        GrandChild
        </div>
    )
}
export default GrandChild