export const setUser = (poyload) =>{
    return {
        type:"SET_USER",
        poyload
    }
}
export const getUser = (poyload) =>{
    return {
        type:"GET_USER",
        poyload
    }
}
export const getUserData = () => {  
    return async function(dispatch) {
        const response = await fetch("http://localhost:8087/");
        const data = await response.json();
        dispatch(getUser(data));
    }
}
export const setUserData = (name,city) => {  
    return async function() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name,city:city })
        };
        const response = await fetch('http://localhost:8086/publish', requestOptions);
        const data = await response.json();
    }
}