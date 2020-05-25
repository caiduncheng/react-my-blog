import React from 'react'
import styled from 'styled-components'
import img from '../../assets/duck.jfif'
import { Link } from 'react-router-dom'
import { requestGetProfileInfo } from '../../reducers/profile'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


export const StyledProfileCard = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
    text-align: center;
    margin-bottom: 20px;
`
const StyledImageContainer = styled.div`
    padding-top: 30px;
    height: 150px;

    & img {
        width: 120px;
        height: 120px;
        border: 1px solid #eee;
    }
`

const StyledName = styled.div`
    line-height: 2;
    font-weight: 700;
    font-size: 1.3rem;
`

const StyledDescription = styled.div`
    color: #999;
    line-height: 2;
    font-size: 12px;
    margin-bottom: 20px;
`

const StyledInfoContainer = styled.div`
    width: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
`

const StyledInfo = styled.div`
    display: inline-block;
    border-left: 1px solid #eee;
    padding: 0 10px;
    &:first-child {
        border: none;
    }

    & span {
        display:block;

        &:first-child {
            color: #585858;
            font-weight: 900;
        }

        &:last-child {
            color: #999;
            font-size: 14px;
        }
    }
`

const StyledSocialMedia = styled.div`

    padding-bottom: 20px;

    & a {
        color: #000000;
        margin-right: 10px;
    }
`

const SocialMedia = () => (
    <StyledSocialMedia>
        <a>
            <i className="fab fa-github"></i>
        </a>
        <a>
            <i className="fab fa-weibo"></i>
        </a>
        <a>
            <i className="fab fa-linkedin-in"></i>
        </a>
    </StyledSocialMedia>
)

class ProfileCard extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.requestGetProfileInfo()
    }

    render() {
        return (
            <StyledProfileCard>
                <StyledImageContainer>
                    <img src={img} alt="avatar"></img>
                </StyledImageContainer>
                <StyledName>Caidc</StyledName>
                <StyledDescription>奔涌吧，后浪</StyledDescription>
                <StyledInfoContainer>
                    <StyledInfo>
                        <Link>
                            <span>{this.props.blogCount}</span>
                            <span>日志</span>
                        </Link>
                    </StyledInfo>
                    <StyledInfo>
                        <Link>
                            <span>{this.props.categoryCount}</span>
                            <span>分类</span>
                        </Link>
                    </StyledInfo>
                    <StyledInfo>
                        <Link>
                            <span>{this.props.categoryCount}</span>
                            <span>标签</span>
                        </Link>
                    </StyledInfo>
                </StyledInfoContainer>
                <SocialMedia />
            </StyledProfileCard>
        )
    }
}

const mapStateToProps = state => ({
    blogCount: state.profile.blogCount,
    categoryCount: state.profile.categoryCount,
    tagCount: state.profile.tagCount
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        requestGetProfileInfo
    },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)