export function hasErrored(bool) {
  return {
    type: 'HAS_ERRORED',
    hasErrored: bool
  }
}

export function isLoading(bool) {
  return {
    type: 'IS_LOADING',
    isLoading: bool
  };
}


export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function fetchData(url) {
  return (dispatch) => {
    dispatch(isLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(isLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(hasErrored(true)));
    
  };
}