import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const getMaxWidth = css`
    @media only screen and (min-width: 576px) {
        max-width: 540px;
    }

    @media only screen and (min-width: 767px) {
        max-width: 720px;
    }

    @media only screen and (min-width: 992px) {
        max-width: 960px;
    }

    @media only screen and (min-width: 1200px) {
        max-width: 1140px;
    }
`

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    ${({ fluid }) => (fluid ? undefined: getMaxWidth)}
`

export default Container