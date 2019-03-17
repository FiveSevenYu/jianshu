/**
 * actionCreator.js文件专门用来创建action
 */

import * as constants from './constants';
import { fromJS } from 'immutable'
import axios from 'axios';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data), //转换成普通对象
    totalPage: Math.ceil(data.length / 10) //总共页数
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {  //getList返回一个函数,用它派发一个异步的请求
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                dispatch(changeList(data.data))
            }).catch(() => {
                console.log('error');
            })
    }
};