import React, { Component } from 'react';
import './index.css';
import List from './components/List';
import Recommend from './components/Recommend';
class Home extends Component {
    render(){
        return (
            <div className="home">
                <div className="home-left">
                    <img src="https://upload.jianshu.io/admin_banners/web_images/4620/c56b295694e97397f9845c532122994cdca622a7.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <List />
                </div>
                <div className="home-right">
                    <Recommend />
                </div>
            </div>
        )
    }
}
export default Home;