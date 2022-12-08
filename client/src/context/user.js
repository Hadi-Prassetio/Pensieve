import * as React from "react"

export const userContext = React.createContext()

const initial = {
    isLogin : false,
    user : {}
}

const reducer = (state, action) => {
    const {type, payload} = action

    switch (type){
        case "Login":
            localStorage.setItem("token", payload.token)
            return{
                isLogin : true,
                user : payload
            }
        case "logOut":
            localStorage.removeItem("token")
            return{
                isLogin : false,
                user : {}
            }
        default : 
         throw new Error()
    }
}

export const UserContextProvider =({children})=>{
    const [state, dispath] = React.useReducer(reducer, initial)

    return(
        <userContext.Provider value={[state, dispath]}>
            <div>{children}</div>
        </userContext.Provider>
    )
}