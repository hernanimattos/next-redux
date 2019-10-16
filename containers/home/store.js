import { namespaceConfig } from "fast-redux";
import { bindActionCreators } from "redux";

const state = { build: 1, teste: 33, stars: 0 };

const { actionCreator, getState } = namespaceConfig("homepage", state);

const actions = {
  bumpBuild: actionCreator((state, increment) => {
    return { ...state, build: state.build + increment };
  }),
  testeFn: actionCreator(({ teste, ...state }, increment) => {
    return { ...state, teste: teste + increment };
  }),
  gitFetch: actionCreator(async state => {
    const { stars } = state;
    const res = await fetch("https://api.github.com/repos/developit/preact");
    const json = await res.json(); // better use it inside try .. catch
    console.log(json, "fggggg");
  })
};

const mappers = {
  mapDispatchToProps: dispatch => bindActionCreators({ ...actions }, dispatch),
  mapStateToProps: state => getState(state)
};

const Store = (function() {
  return {
    storeHome: {
      mappers: {
        ...mappers
      }
    }
  };
})();

export { Store };
