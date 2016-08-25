import React from 'react'
import Main from '../components/layout/Main'

const Template = (props) => {
    return (
        <Main>
            {props.children}
        </Main>
    )
}

Template.propTypes = {
    children: React.PropTypes.any,
}


export default Template
