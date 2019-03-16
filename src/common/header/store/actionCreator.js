/**
 * actionCreator.js文件专门用来创建action
 */

import * as constants from './constants';
import { fromJS } from 'immutable'
import axios from 'axios';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)

})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
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