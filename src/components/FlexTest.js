import { Fragment } from 'react'
import classes from './FlexTest.module.css'
const FlexTest = () => {
    // https://www.w3schools.com/css/css3_flexbox_container.asp
    const iclass = [classes.content, classes.content1]
    return (
        <Fragment>
            <h1>Flex Test</h1>
            <div className={classes.container}>
                <div className={classes.valign}>
                <div className={classes.valigncontent}>
                    C1
                    </div>
                </div>
                <div className={classes.contentgrow}>
                    C2
                </div>
                <div className={iclass.join(' ')}>
                    C3
                </div>
            </div>
        </Fragment>
    )
}
export default FlexTest