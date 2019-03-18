import { fromJS } from 'immutable'
const defaultState = fromJS({
  articleList:  [
    {
      id: 1,
      imgUrl: 'https://upload-images.jianshu.io/upload_images/14205181-7d9fda6e0b2216c6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      title: '以前，打扰了；以后，不会了。' ,
      desc: '你在一个人那儿重不重要， 发个信息就知道； 一个人在不在乎你， 看关注你的程度就知晓！ 什么忙啊，累啊，脱不开身， 都是搪塞你的借口， 都是不想...'
    },
    {
      id: 2,
      imgUrl: 'https://upload-images.jianshu.io/upload_images/14205181-7d9fda6e0b2216c6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      title: '冷笑话：一个程序员在肯德基编程，一个乞丐过来向他乞讨' ,
      desc: '1、 我上次回家，拿点自种的黄豆，我：妈，配猪蹄，黄豆炖猪脚好吃！ 过了几天，哥又拿点香菇来，我：妈，配只鸡，香菇烧鸡好吃！ 昨天，哥把不用的婴...'  
    },
    {
        id: 3,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/14205181-7d9fda6e0b2216c6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        title: '3月起，深圳市985/211一年名校本科启动' ,
        desc: '“简然，虽然我们已是合法夫妻，但我不会强迫你做不愿意做的事情。” 有了秦越的保证，简然紧绷的神经慢慢放松，没多久便进入了梦乡。 醒来时，天色已大...'  
    },
    {
        id: 4,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/14205181-7d9fda6e0b2216c6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        title: '这个全宇宙最牛逼算法，python实现导弹追踪功能！' ,
        desc: '自动追踪算法，在我们设计2D射击类游戏时经常会用到，这个听起来很高大上的东西，其实也并不是军事学的专利，在数学上解决的话需要去解微分方程， 这个...'  
    }
]
});
export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}
