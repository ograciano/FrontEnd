import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0
    },
    getters: {
        cuadrado(state) {
            return state.counter * state.counter;
        }
    },
    mutations: {
        subirContador(state, random) {
            state.counter += random;
        },
        bajarContador(state, random) {
            state.counter -= random;
        }
    },
    actions: {
        async subirContador({ commit }) {
            const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
            const results = await res.json();
            console.log(results);
            commit('subirContador', results)
        },
        async bajarContador({ commit }) {
            const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
            const results = await res.json();
            console.log(results);
            commit('bajarContador', results)
        },
    },
    modules: {}
})