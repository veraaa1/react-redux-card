import axios from 'axios';
const showLists=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3008/products').then(res=>{
            
            dispatch({
                type:"SHOW_LISTS",
                goodlists:res.data
            })
        })
    }

}
export default showLists