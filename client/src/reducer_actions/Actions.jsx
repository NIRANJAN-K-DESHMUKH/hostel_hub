
const setShowComponent = (inputData) => {
    return {
        type: "SET_COMPONENT",
        payload: {
            id: inputData
        }
    }
};

export {setShowComponent};