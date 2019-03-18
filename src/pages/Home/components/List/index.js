import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
class List extends Component {
    render(){
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item) => 
                        <div key={item.get('id')} className="listItem">
                            <img src={item.get('imgUrl')} alt="" />
                            <div className="listInfo">
                                <h3>{item.get('title')}</h3>
                                <p>{item.get('desc')}</p>
                            </div>
                        </div>
                    )
                }
            </div>
           
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home','articleList'])
})

export default connect(mapState)(List);