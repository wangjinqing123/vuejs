export const tabChanger = function({dispatch, state}, tabIndex) {
  dispatch('CHANGETAB', tabIndex);
};

export const isGuided = function({dispatch,state},isGuided){
  dispatch("ISGUIDED",isGuided);
};
