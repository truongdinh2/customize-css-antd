import React from 'react'
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
    // Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={click} >click me</button>
        </div>
    )
}
