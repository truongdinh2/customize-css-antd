import { type } from 'os'
import React, { useState } from 'react'
interface ValueIp {
    [x: string]: any

}
interface Index{
    
}
export default function FormBonus() {
    // const arrIp:string[] = ['']
    const [valueIp, setValueIp] = useState<ValueIp>(['df'])
    const [arrIp, setArrIp] = useState([''])
    const addIp = () => arrIp.map((value, index) => {
        return (
            <div key={index}>
                <input key={index} name={index.toString()} type="text"
                    onChange={handleChangeValueIp}
                ></input>
                <button onClick={()=>handleRemoveInput(index)} type="button"> Remove </button>
            </div>

        )
    })
    const handleChangeValueIp = (e: any) => {
        var index = parseInt(e.target.name);
        var value = e.target.value;
        // var len = valueIp.length;
        console.log(valueIp)
        console.log(typeof (index))
        valueIp[index] = value;
        setValueIp({ ...valueIp })
        // console.log(valueIp.len)
        // valueIp[valueIp.length]
        // console.log(index,value)
        // console.log(e)
        // console.log(params)
        // setValueIp([{
        //     [params]: e.target.value
        // }])
    }
    const handleAddInput = () => {
        setArrIp([...arrIp, 'hi'])
        console.log(arrIp)
    }
    const handleRemoveInput = (index:number) => {
        // var key = parseInt(index)
        console.log(index)
        arrIp.splice(index,1)
        setArrIp([...arrIp])
        console.log(arrIp)
    }
    const onSubmit = (event: any) => {
        event.preventDefault()
    }
    const handleSubmit = () => {
        console.log(valueIp)
    }
    // console.log(valueIp[valueIp.length])
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" />
                {addIp()}
                <button onClick={handleAddInput} type="button"> add </button>
                <button onClick={handleSubmit} type="submit"> sub </button>
            </form>
        </div>
    )
}
