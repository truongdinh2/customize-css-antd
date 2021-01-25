import React from 'react'
import {A} from './components/A';
import HelloYou from './components/brack';
interface Obj {
    foo?: string,
    x?: number,
    y?: number,

}
export default function Test() {
    let obj1 = { foo: 'bar', x: 42 };
    let obj2 = { foo: 'baz', y: 13 };
    const merge = (...objects: Obj[]) => ({ ...objects });

    let mergedObj1 = merge(obj1, obj2);
    // Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

    let mergedObj2 = merge({}, obj1, obj2);
    const click = () => {
        console.log(mergedObj1)
        console.log(mergedObj2)
        console.log(merge(obj1))
        // console.log({x:2,...obj1})
    }
    const lick = () => {
        let { x, y, ...t } = { x: 1, y: 2, a: 3, b: 4, c: 5, d: 10 };
        console.log(x, y, t);
        let { x1, ...z } = { x1: 1, y1: 2, a: 3, b: 4, c: 5, d: 10 }
        console.log(x1, y, t, z);
        let { y1, ...n } = { ...z }
        console.log(x1, y1, t, n, z);
    }
    const lick1 = () => {
        let a1 ={h:1,t:2}
    let aWithOverrides = { ...a1, x: 1, y: 2 };
    // equivalent to
    let aWithOverrides1 = { ...a1, ...{ x: 1, y: 2 } };
    // equivalent to
    let x = 1, y = 2, aWithOverrides2 = { ...a1, x, y };
        console.log(aWithOverrides, aWithOverrides1, aWithOverrides2, x, y);
    }
    // Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={click} >click me</button>
            <button onClick={lick} >click me1</button>
            
            <button onClick={lick1} >click me2 <A/></button>
            <HelloYou/>
        </div>
    )
}
