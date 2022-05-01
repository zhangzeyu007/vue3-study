/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-05-01 12:21:16
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 12:56:37
 * @FilePath: \vue3-study\src\view\about\app.tsx
 */

import { ref } from 'vue';

const v = ref<string>('');
const flag = true;
let arr = [1, 2, 3];
type Props = {
    title: string;
};

// ctx 上下文
const renderDom = (props: Props, ctx: any) => {
    return (
        <div>
            <div>{props.title}</div>
            <h1>Hello tsx</h1>
            <input v-model={v.value}></input>
            <div>{v.value}</div>
            <div v-show={flag}>景天</div>
            <div>{flag ? <div>雪见</div> : <div>景甜</div>}</div>
            <div>
                {arr.map((item, index) => {
                    return (
                        <div onClick={clickTap.bind(this, ctx, item)} data-index={index} key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const clickTap = (ctx: any, item: number) => {
    console.log('clickTap', ctx, item);
};

export default renderDom;
