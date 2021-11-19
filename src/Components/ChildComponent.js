import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ChildComponent = ({ name, age, skills, lang, isStudent, getName, children, callBackFn }) => {
    // console.log(props)

    const data = "Data from child component"
    return (
        <div className="childComponent">
            <h1>Child Component</h1>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>Skills : {skills}</h3>
            <h3> English : {lang.english}, French : {lang.french}</h3>
            {children}
            <div>
                {isStudent &&
                    <Button variant="outline-light" style={{ marginRight: "20px" }}
                        onClick={() => getName(name)}
                    >Get the name</Button>

                }
                <Button variant="outline-light"
                    onClick={() => callBackFn(data)}
                >Test Call Back</Button>
            </div>
        </div>
    )
}

export default ChildComponent

/********* PropTypes */
ChildComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    skills: PropTypes.arrayOf(PropTypes.string),
    // lang: PropTypes.objectOf(PropTypes.string)
    lang: PropTypes.shape({
        english: PropTypes.string,
        french: PropTypes.string
    }),
    getName: PropTypes.func
}

/********* Default props */
ChildComponent.defaultProps = {
    name: "No name",
    age: -1
}


