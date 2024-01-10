import React from 'react'

import Orders from './Orders'
import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'

import PropTypes from 'prop-types'
import paths from '../../constants/paths'




export const Admin = ({ match: { path } }) => {





    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {path === paths.Order && <Orders />}
                {path === paths.ProductsList && <ListProducts />}
                {path === paths.NewProduct && <NewProduct />}
            </ContainerItems>
        </Container >
    )
}


Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string

    })
}
