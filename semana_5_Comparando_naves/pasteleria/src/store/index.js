import { createStore } from 'vuex'

export default createStore({
    state: {
        id: 1,
        nombre: "",
        telefono: 0,
        email: "",
        limon: 10,
        fresa: 10,
        aleman: 10,
        naranja: 10,
        chocolate: 10,
        tres_leches: 10,
        velas: 10,
        velas_numero: 10,
        astronauta: 10,
        banderillas: 10,
        letrero: 10,
        nave: 10,
        checkLimon: false,
        checkFresa: false,
        checkAleman: false,
        checkNaranja: false,
        checkChocolate: false,
        checkTres_leches: false,
        checkVelas: false,
        checkVelas_numero: false,
        checkAstronauta: false,
        checkBanderillas: false,
        checkLetrero: false,
        checkNave: false,
        sabores: [],
        adornos: [],
        pedidos: []
    },
    getters: {},
    mutations: {
        setNombre(state, nombre) {
            state.nombre = nombre;
        },
        setId(state) {
            return state.pedido.id++;
        },
        setTelefono(state, telefono) {
            state.telefono = telefono;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setSabores(state, sabor) {
            state.sabores.push(sabor);
        },
        popSabores(state) {
            state.sabores.pop();
        },
        setAdornos(state, adorno) {
            state.adornos.push(adorno);
        },
        popAdornos(state) {
            state.adornos.pop();
        },
        setPedidos(state) {
            const id = state.id++;
            const nombre = state.nombre;
            const telefono = state.telefono;
            const email = state.email;
            const adornos = state.adornos;
            const sabores = state.sabores;
            const pedido = {
                id,
                nombre,
                telefono,
                email,
                adornos,
                sabores
            }
            state.pedidos.push(pedido);
            state.adornos = [];
            state.sabores = [];
            state.nombre = '';
            state.telefono = 0;
            state.email = '';
        },
        setLimon(state, num) {
            state.limon = num;
        },
        setFresa(state, num) {
            state.fresa = num;
        },
        setAleman(state, num) {
            state.aleman = num;
        },
        setNaranja(state, num) {
            state.naranja = num;
        },
        setChocolate(state, num) {
            state.chocolate = num;
        },
        setTresLeches(state, num) {
            state.tres_leches = num;
        },
        setVelas(state, num) {
            state.velas = num;
        },
        setNVelasNumero(state, num) {
            state.velas_numero = num;
        },
        setAstronauta(state, num) {
            state.astronauta = num;
        },
        setBanderilla(state, num) {
            state.banderillas = num;
        },
        setNave(state, num) {
            state.nave = num;
        },
        setLetrero(state, num) {
            state.letrero = num;
        },
        setCheckLimon(state, bool) {
            state.checkLimon = bool;
        },
        setCheckFresa(state, bool) {
            state.checkFresa = bool;
        },
        setCheckAleman(state, bool) {
            state.checkAleman = bool;
        },
        setCheckNaranja(state, bool) {
            state.checkNaranja = bool;
        },
        setCheckChocolate(state, bool) {
            state.checkChocolate = bool;
        },
        setCheckTres_leches(state, bool) {
            state.checkTres_leches = bool;
        },
        setCheckVelas(state, bool) {
            state.checkVelas = bool;
        },
        setCheckVelas_numero(state, bool) {
            state.checkVelas_numero = bool;
        },
        setCheckAstronauta(state, bool) {
            state.checkAstronauta = bool;
        },
        setCheckBanderillas(state, bool) {
            state.checkBanderillas = bool;
        },
        setCheckLetrero(state, bool) {
            state.checkLetrero = bool;
        },
        setCheckNave(state, bool) {
            state.checkNave = bool;
        },
    },
    actions: {},
    modules: {}
})