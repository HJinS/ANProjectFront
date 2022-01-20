const LOGIN = 'LOGIN' as const;
const LOGOUT = 'LOGOUT' as const;

export const login = () => ({
    type: LOGIN
});

export const logout = () => ({
    type: LOGOUT
});

type LoginAction = 
| ReturnType<typeof login>
| ReturnType<typeof logout>;

type LoginState = {
    userLogin: boolean;
};

const initialState: LoginState = {
    userLogin: false
};

function userLoginReducer(
    state: LoginState = initialState,
    action: LoginAction
): LoginState{
    switch(action.type){
        case LOGIN:
            return { userLogin: true }
        case LOGOUT:
            return { userLogin: false }
        default:
            return state
    }
}

export default userLoginReducer;