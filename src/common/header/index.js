import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreator } from './store'
import './index.css'



class Header extends Component  {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    getListArea() {
        const { focused, list, page } = this.props;
        const pageList = []
        for (let i = (page-1) * 10; i < page * 10; i++) {
            pageList.push()
            
        }

        if(focused) {
            return (
                <div className="searchInfo">
                    <div className="searchHd">
                        <div className="searchInfoTitle">热门搜索</div>
                        <div className="searchInfoSwitch">换一批</div>
                    </div>
                    <div className="searchContent">
                    {
                        list.map((item) =>
                            <a href="/" className="hotWord" key={ item }>{ item }</a>
                        )
                    } 
                    </div>
                </div>   
            );
        }else{
            return null;
        }
    }

    render(){
        const { focused, handleInputFocus, handleInputBlur } = this.props;
        return(
            <div className="HeaderWrapper">
                <a href="/" className="logo">logo</a>
                <div className="Nav">
                    <div className="left">
                        <div className="NavItem active">首页</div>
                        <div className="NavItem">下载APP</div>  
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames='slide'
                        >
                            <div 
                                className={"NavSearch " + (focused ? 'focused' : '')}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                                <input placeholder="搜索" />
                                <i className="iconfont icon-fangdajing"></i>
                                {
                                    this.getListArea(focused)
                                }
                            </div>
                        </CSSTransition>
                    </div>
                    <div className="right">
                        <div className="NavItem">登录</div>
                        <div className="NavItem">
                            <i className="iconfont icon-Aa"></i>
                        </div>
                    </div>
                </div>
                <div className="login">
                    <button>注册</button>
                    <button>
                        <i className="iconfont icon-icon-test"></i>
                        写文章
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       focused: state.getIn(['header','focused']),
       list: state.getIn(['header','list']),
       page: state.getIn(['header','page'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.getList())
            //应该用actionCreator来创建action,并且type类型应为常量
            dispatch(actionCreator.searchFocus());
            
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        }
    }
}
//容器组件: 它是connect方法返回的一个组件
export default connect(mapStateToProps,mapDispatchToProps)(Header);
/**
 * react动画 react-transition-group
 *  CSSTransition组件
 *  使用: 
 *     1. 导入组件:   import { CSSTransition } from 'react-transition-group'
 *     2. 使用<CSSTransition></CSSTransition>包裹要动画的元素
 *     3. CSSTransition的props: 
 *          "in={bool}" : true是入场,false是出场  
 *          "timeout={num}" : 动画时间
 *          "calssNames= object || string"
 *          
 */