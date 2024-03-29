import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'
import { Header } from '../components/index'
import paths from '../constants/paths'


const PrivateRoute = ({ component, isAdmin, ...rest }) => {
    const user = localStorage.getItem('codeburger:userData')

    if (!user) {
        return <Redirect to={paths.Login} />
    }


    if (isAdmin && JSON.parse(user).admin !== true) {
        return <Redirect to={paths.Home} />
    }

    return (
        <>
            {!isAdmin && <Header />}
            <Route {...rest} component={component} />
        </>
    )
}



export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired, isAdmin: PropTypes.bool
}

