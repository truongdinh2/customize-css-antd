import * as type from './../constants'
export const FilterTable = (data)=>({
    type:type.FILTER,
    payload: data
});
export const SearchTable = (data)=>{
    console.log(data)
    return ({
    type:type.SEARCH,
    payload: data
})}
export const GetApi= (data) => {
    return{
        type: type.GET_DATA_FROM_API,
        payload: data,
    }
}