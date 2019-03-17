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
    /**
     * 换一批
     * 思路: 
     *  1. 在reducer.js中添加两个默认的配置项 page: 1 totalPage: 1 page是当前页码,totalPage是一共多少页
     *  2. 获取当前页的数据,存储在pageList里面
     *  3. 问题? 点击换一批 input框会失去焦点,随即隐藏 
     *      所以searchInfo模块的显示和隐藏并不能完全由input框的焦点来控制,在初始状态给一个mouseIn:false,
     *      现在searchInfo模块的显示和隐藏有focused和mouseIn一起控制,二者只要有一个成立那么显示
     *
     */
    getListArea() {
        const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();  //把list转化为一个普通数组
        const pageList = [];
        if(newList.length) {
            for (let i = (page-1) * 10; i < page * 10; i++) {
                /**
                 * 这里会报错,说没有key值.但是我们这里已经给了key值,为什么?
                 * 分析: 初始化的时候page是1,所以这个for循环会执行i会执行从0到9,而此时的pageList是个空数组
                 * 所以newList[i]是undefined,自然也取不到key值.
                 * 解决: 当newList为空的时候不走循环,同样当newList[i]的值为空的时候也不push
                 */
                if(newList[i]){
                    pageList.push(
                        <a href="/" className="hotWord" key={ newList[i] }>{ newList[i] }</a>
                    )
                }
            }     
        }


        if(focused || mouseIn) {
            return (
                <div 
                    className="searchInfo" 
                    onMouseEnter = { handleMouseEnter }
                    onMouseLeave = { handleMouseLeave }
                >
                    <div className="searchHd">
                        <div className="searchInfoTitle">热门搜索</div>
                        <div 
                            className="searchInfoSwitch" 
                            onClick={ () => handleChangePage(page, totalPage, this.spinIcon) } 
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-spin"></i>
                            换一批
                        </div>
                    </div>
                    <div className="searchContent">
                        { pageList } 
                    </div>
                </div>   
            );
        }else{
            return null;
        }
    }

    render(){
        const { focused, handleInputFocus, handleInputBlur,list } = this.props;
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
                                onFocus={() => handleInputFocus(list)}
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
       page: state.getIn(['header','page']),
       totalPage: state.getIn(['header','totalPage']),
       mouseIn: state.getIn(['header','mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            //如果list有值那么就不用再派发action了
            (list.size === 0) && dispatch(actionCreator.getList())
            //应该用actionCreator来创建action,并且type类型应为常量
            dispatch(actionCreator.searchFocus());
            
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/g,'');
            //如果有值转换成数字,没有设置为0
            if(originAngle) {
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform ='rotate('+ (originAngle + 360) +'deg)';
            //判断,如果小于总页数,那么+1,否则改变为第一页
            if(page < totalPage) {
                dispatch(actionCreator.changePage(page + 1))
            } else {
                dispatch(actionCreator.changePage(1))
            }
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