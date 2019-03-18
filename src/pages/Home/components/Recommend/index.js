import React, { Component } from 'react';
import './index.css';
class Recommend extends Component {
    render(){
        return (
            <div className="recommend">
                <div className="recomHd">
                    <span>推荐作者</span>
                    <div>
                        <i className="inconfont icon-spin"></i>
                        换一批
                    </div>
                </div>
                <div className="recomItem">
                    <img src="" alt=""/>
                    <div className="recominfo">
                        <div className="infoTit">
                            <h4>念远怀人</h4>
                            <p>写了<span>659</span>k字,<span>18.8</span>k喜欢</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recommend;