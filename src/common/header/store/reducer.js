/**
 * header组件要存放的所有内容都存放在这个store下面的reducer里面
 * reducer中不能改变state,但是为了避免出现在reducer中改变state,需要引入immutable.js
 * immutable会帮我们生成一个immutable对象,它是不可改变的.假设state是一个immutable对象,那它就是不可改变的.
 * 安装: yarn add immutable
 * 
 */
import * as constants from './constants';
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1
})
export default (state = defaultState, action) => {
    switch(action.type)
    {
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage);
        default:
            return state;
    }
}