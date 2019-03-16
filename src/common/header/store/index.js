/**
 * 我们希望store的出口文件都是index.js.外部不需要应用其他文件.他就可以把所有文件都暴露出去.
 */
import reducer from './reducer';
import * as actionCreator from './actionCreator';
import * as constants from './constants'
export { reducer, actionCreator, constants };