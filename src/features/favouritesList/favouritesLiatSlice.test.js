import reducer, {
    initialState,

    setFetchingFlag,
    addFavorite,
    removeFavorite,
    errorMessage,

    selectFavouritesList,
    selectFavouritesIndexes,
    selectFetchingFlag,
    selectErrorMessage,
} from './favouritesListSlice';

describe('FavouritesList slice', () => {
    describe('state, reducers, actions', () => {
        it('should return initial state', () => {
            const nextState = initialState;
            const result = reducer(undefined, {});

            expect(result).toEqual(nextState);
        });

        it('should properly set fetching flag', () => {
            const nextState = reducer(initialState, setFetchingFlag());
            const rootState = { favouritesList: nextState };

            expect(selectFetchingFlag(rootState)).toBe(true);
        });

        it('should properly add favourite item id to array', () => {
            const id = 1;
            const nextState = reducer(initialState, addFavorite(id));
            const rootState = { favouritesList: nextState };

            expect(selectFavouritesIndexes(rootState)).toEqual([id]);
        });

        it('should properly remove favourite item id from array', () => {
            const id = 3;
            const favItem = {id};
            const restIds = [2, 4, 10];
            const restFavItems = restIds.map(id => ({id: id}));
            const currentState = {
                ...initialState,
                favouritesIndexes: [...restIds, id],
                favouritesList: [favItem, ...restFavItems],
            }
            const nextState = reducer(currentState, removeFavorite(id));
            const rootState = { favouritesList: nextState };

            expect(selectFavouritesList(rootState)).toEqual(restFavItems);
            expect(selectFavouritesIndexes(rootState)).toEqual(restIds);
        });

        it('should properly save error mesage and reset flag', () => {
            const message = {message: 'example error'};
            const nextState = reducer(initialState, errorMessage(message));
            const rootState = { favouritesList: nextState };

            expect(selectFetchingFlag(rootState)).toBe(false);
            expect(selectErrorMessage(rootState)).toEqual(message);
        });
    });

    describe('async thunks', () => {
        // TODO
    })
});
