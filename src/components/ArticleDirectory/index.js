import React from 'react'
import * as Styled from './Styled'
import { connect } from 'react-redux'


class ArticleDirectory extends React.Component {
    render() {
        const toc = this.props.toc
        return (
            <Styled.ArticleDirectoryContainer>
                <Styled.Title>目录</Styled.Title>
                <Styled.Directory>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: toc
                        }}
                    >
                    </div>
                </Styled.Directory>
            </Styled.ArticleDirectoryContainer>
        )
    }
}

const mapStateToProps = state => ({
    toc: state.blog.data.toc
})

export default connect(mapStateToProps)(ArticleDirectory)