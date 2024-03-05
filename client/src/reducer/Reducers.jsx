
const initialData = {
    showComponents : [
        {id: "dashboard", show: true},
        {id: "cleaning", show: false},
        {id: "complaint", show: false}
    ] 
}

const Reducers = (state=initialData, action) => {
    switch(action.type) {
        case "SET_COMPONENT":
            return {
                ...state,
                showComponents: state.showComponents.map(component => {
                    if(component.id !== action.payload.id){
                        return {
                            ...component,
                            show: false
                        }
                    }
                    return {
                        ...component,
                        show: true
                    }
                })
            }
        default:
            return state;
    }

};

export default Reducers;