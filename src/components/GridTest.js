import { Fragment } from 'react'
import classes from './GridTest.js.module.css'
const GridTest = () => {
    // https://www.w3schools.com/css/css3_flexbox_container.asp
    return (
        <Fragment>
            <h1>Flex Test</h1>
            <div className={classes.gridcontainer}>
                <div className={classes.griditem}>C1</div>
                <div className={classes.griditem}>C2</div>
                <div className={classes.griditem}>C3</div>
                <div className={classes.griditem}>C4</div>
                <div className={classes.griditem}>C5</div>
                <div className={classes.griditem}>C6</div>
                <div className={classes.griditem}>C7</div>
                
            </div>
        </Fragment>
    )
}
export default GridTest