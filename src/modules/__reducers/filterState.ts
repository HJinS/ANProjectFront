const ADDFILTER = 'FADD' as const;
const DELETEFILTER = 'FDELETE' as const;
const INITFILTER = 'FINIT' as const;

export const addFilter = (filterItem: string) => ({
    type: ADDFILTER,
    payload: filterItem,
});

export const deleteFilter = (filterItem: string) => ({
    type: DELETEFILTER,
    payload: filterItem,
});

export const initFilter = () => ({
    type: INITFILTER,
})

type FilterAction = 
| ReturnType<typeof addFilter>
| ReturnType<typeof deleteFilter>
| ReturnType<typeof initFilter>;

type FilterState = string[];

const initialState: FilterState = [];

function filterReducer(
    state: FilterState = initialState,
    action: FilterAction
): FilterState{
    switch(action.type){
        case ADDFILTER:
            return state.concat(action.payload)
        case DELETEFILTER:
            return state.filter(item => item != action.payload)
        case INITFILTER:
            return state = initialState
        default:
            return state
    }
}

export default filterReducer;