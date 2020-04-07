import styled from 'styled-components'

const Row = styled.div`
    &::after {
        content: '';
        display: table;
        clear: both;
    }

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
`

export default Row
