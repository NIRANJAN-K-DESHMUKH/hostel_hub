
const setShowComponent = (inputData) => {
    return {
        type: "SET_COMPONENT",
        payload: {
            id: inputData
        }
    }
};

const LoginStart = () => ({
    type: "LOGIN_START",
});
  
const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});
  
const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});

export {setShowComponent, LoginStart, LoginSuccess, LoginFailure};