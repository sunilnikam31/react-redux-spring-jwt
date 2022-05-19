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
export const editUser = (poyload) =>{
    return {
        type:"EDIT_USER",
        poyload
    }
}
export const updateUser = (poyload) =>{
    return {
        type:"UPDATE_USER",
        poyload
    }
}
export const editUserData = (id) => {
    return async function(dispatch) {
     const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await fetch("http://localhost:8087/edit/"+id,requestOptions);
        const data = await response.json();
        dispatch(editUser(data));
    }
}
export const updateUserData = (id,name,city) => {
    return async function() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id,name:name,city:city })
        };
        const response = await fetch('http://localhost:8087/update', requestOptions);
        const data = await response.json();
    }
}
export const getUserData = (token) => {
    return async function(dispatch) {
      const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json','Authorization': 'Bearer '+token }
            };
            console.log('sunil',requestOptions)
        const response = await fetch("http://localhost:8087/getEmployee",requestOptions);
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
        const response = await fetch('http://localhost:8087/publish', requestOptions);
        const data = await response.json();
    }
}
export const checkLogin = (userName,password,callback) => {
    return async function() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:userName,password:password })
        };
        const response = await fetch('http://localhost:8087/authenticate', requestOptions);
        const data = await response.json();
        console.log("token",data);
        callback(data);
    }
}