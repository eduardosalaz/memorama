import { createStore } from "vuex";

export default createStore({
    state () {
      return {
        tiempo: Number
      }
    },
    mutations:{
        addTiempo(state,value){
            state.tiempo = value;
        }
    },
    getters:{
        getTiempo(state){
            return state.tiempo;
        }
    }
  });