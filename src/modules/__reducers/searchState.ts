const SETSEARCH = 'SETS' as const;

export const setSearch = (keyword: string) => ({
    type: SETSEARCH,
    payload: keyword,
});

type SearchAction = 
| ReturnType<typeof setSearch>

type SearchState = string;

const initialState: SearchState = "";

function searchReducer(
    state: SearchState = initialState,
    action: SearchAction
): SearchState{
    switch(action.type){
        case SETSEARCH:
            return action.payload
        default:
            return state
    }
}

export default searchReducer;