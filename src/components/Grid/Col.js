import styled from 'styled-components'
import PropTypes from 'prop-types'
import {getPixelString} from '../../utils'

const getWidthString = span => {
    if (span === undefined) {
        return undefined
    } else if (span === 0) {
        return 'display: none;'
    }

    const width = span / 12 * 100
    return `width: ${width}%`
}

const Col = styled.div`
    float: left;
    padding: 0 ${({ gutter }) => getPixelString(gutter, 15)};

    @media only screen and (min-width: 1px) {
        display: block;
        ${({ xs }) => getWidthString(xs)}
    }

    @media only screen and (min-width: 576px) {
        display: block;
        ${({ sm }) => getWidthString(sm)}
    }

    @media only screen and (min-width: 768px) {
        display: block;
        ${({ md }) => getWidthString(md)}
    }

    @media only screen and (min-width: 992px) {
        display: block;
        ${({ lg }) => getWidthString(lg)}
    }

    @media only screen and (min-width: 1200px) {
        display: block;
        ${({ xl }) => getWidthString(xl)}
    }
`

export default Col