
// create Action Creator SelectedLibrary which returns an action with the
// payload of a new LibraryId
export const SelectLibrary = (libraryId) => ({
    type: 'select_Library',
    payload: libraryId
});
