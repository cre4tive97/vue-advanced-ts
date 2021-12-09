import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { state, RootState } from "@/store/state";
// import getters from "./getters.js";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions,
};

export default new Vuex.Store(store);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== "production",
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// });
