export const mutations = {
  CHANGETAB (state, currentTabindex) {
    state.tabIndex = currentTabindex;
  },
  ISGUIDED (state,isGuided){
    state.isGuided = isGuided;
  }
}
