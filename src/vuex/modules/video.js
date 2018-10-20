export default {
  state: {
    videoInfo: {},
  },

  mutations: {
    SET_VIDEO_INFO(state, obj) {
        state.videoInfo = JSON.parse(JSON.stringify(obj));
    },
  },

  actions: {
    _setVideoInfo({ commit }, obj) {
      commit("SET_VIDEO_INFO", obj);
    },
  },
};
