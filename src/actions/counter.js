export const PLUS = 'PLUS';

export const plus = num => ({
  type: PLUS,
  num
});

export const plusIfOdd = num => (dispatch, getState) => {
  const state = getState();
  if (state.counter.count % 2 === 0) {
    return;
  }
  dispatch(plus(num));
};
