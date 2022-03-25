<template>
    <form v-on:submit.prevent="onSubmit" id="form">
            <div class="fila">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" v-model="nombre" placeholder="Escriba su Nombre"><br>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <label for="telefono">Telefono:</label>
                    <input type="number" v-model="telefono" id="telefono" placeholder="Escriba su Telefono" maxlength="10"><br>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <label for="correo">Correo Electronico:</label>
                    <input type="email" v-model="email" id="correo" placeholder="Escriba su correo electronico"><br>
                </div>
            </div>

            <p>Selecciona el sabor o los sabores que quieras incluir en tu pastel</p>
            <div class="fila">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                    <label class="label" for="limon">Limon
                        <input type="checkbox" v-model="checkLimon" id="limon" value="Limon">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label" for="fresa">Fresa
                        <input type="checkbox" v-model="checkFresa" id="fresa" value="Fresa">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label" for="aleman">Aleman
                        <input type="checkbox" v-model="checkAleman" id="aleman" value="Aleman">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                    <label class="label" for="naranja">Naranja
                        <input type="checkbox" v-model="checkNaranja" id="naranja" value="Naranja">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label" for="chocolate">Chocolate
                        <input type="checkbox" v-model="checkChocolate" id="chocolate" value="Chocolate">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label" for="tres_leches">Tres Leches
                        <input type="checkbox" v-model="checkTres_leches" id="tres_leches" value="Tres Leches">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>


            <p>Va a decorar su pastel?</p>
            <div class="fila">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-0"></div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <center>
                        <label class="radio">Si
                            <input type="radio" name="decorado">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio">No
                            <input type="radio" name="decorado">
                            <span class="checkmark"></span>
                        </label>
                    </center>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-0"></div>
            </div>

            <p>Seleccione la decoracion para su pastel</p>
            <div class="fila">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label class="label" for="velas">Velas
                        <input type="checkbox" v-model="checkVelas" id="velas" value="Velas">
                        <span class="checkmark"></span>
                    </label>
                    <input type="number" v-model="velasCuantos" id="velasCuantos" placeholder="Cuantas?">

                    <label class="label" for="velasNum">Velas de numero
                        <input type="checkbox" v-model="checkVelasNum" id="velasNum" value="velasNum">
                        <span class="checkmark"></span>
                    </label>
                    <input type="number" v-model="velasnumCuantos" id="velasnumCuantos" placeholder="Cuatas?">

                    <label class="label" for="nave">Nave
                        <input type="checkbox" v-model="checkNave" id="nave" value="nave">
                        <span class="checkmark"></span>
                    </label>
                    <input type="number" v-model="naveCuantos" id="naveCuantos" placeholder="Cuantas?">
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label class="label" for="astronauta">astronauta
                    <input type="checkbox" v-model="checkAstronauta" id="astronauta" value="astronauta">
                        <span class="checkmark"></span>
                    </label>
                    <input type="number" v-model="astronautaCuantos" id="astronautaCuantos" placeholder="Cuantos?">

                    <label class="label" for="banderillas">banderillas con forma de estrella
                        <input type="checkbox" v-model="checkBanderillas" id="banderillas" value="banderillas">
                        <span class="checkmark"></span>
                    </label>
                    <input type="number" v-model="banderillasCuantos" id="banderillasCuantos" placeholder="Cuantas?">

                    <label class="label" for="letrero">letrero de feliz cumpleaños
                        <input type="checkbox" v-model="checkLetrero" id="letrero" value="letrero">
                        <span class="checkmark"></span>
                    </label>
                    <input type="number" v-model="letreroCuantos" id="letreroCuantos" placeholder="Cuantos?">
                </div>
            </div>
            <div class="fila">

            </div>

            <center>
                <input class="boton" type="submit" value="Enviar" v-on:click="envForm()">
            </center>
        </form>
</template>
 
<script>
export default {
    name: 'FormPedido',
    computed: {
        nombre: {
            get(){
                
            },
            set(value){
                this.$store.commit('setNombre', value)
            }
        },
        telefono: {
            get(){
                
            },
            set(value){
                this.$store.commit('setTelefono', value)
            }
        },
        email: {
            get(){
                
            },
            set(value){
                this.$store.commit('setEmail', value)
            }
        },  
        checkLimon: {
            get(){
               
            },
            set(value){
                this.$store.commit('setCheckLimon', value)
                if(this.$store.state.checkLimon == true){
                    this.$store.commit('setLimon', this.$store.state.limon - 1);
                    this.$store.commit('setSabores', 'Limon');
                } else{
                    this.$store.commit('setLimon', this.$store.state.limon + 1);
                    this.$store.commit('popSabores');
                }
            }
        }, 
        checkFresa: {
            get(){
                
            },
            set(value){
                this.$store.commit('setCheckFresa', value)
                if(this.$store.state.checkFresa == true){
                    this.$store.commit('setFresa', this.$store.state.fresa - 1);
                    this.$store.commit('setSabores', 'Fresa');
                } else{
                    this.$store.commit('setFresa', this.$store.state.fresa + 1);
                    this.$store.commit('popSabores');
                }
            }
        },
        checkAleman: {
            get(){
                
            },
            set(value){
                this.$store.commit('setCheckAleman', value)
                if(this.$store.state.checkAleman == true){
                    this.$store.commit('setAleman', this.$store.state.aleman - 1);
                    this.$store.commit('setSabores', 'Aleman');
                } else{
                    this.$store.commit('setAleman', this.$store.state.aleman + 1);
                    this.$store.commit('popSabores');
                }
            }
        },
        checkNaranja: {
            get(){
               
            },
            set(value){
                this.$store.commit('setCheckNaranja', value)
                if(this.$store.state.checkNaranja == true){
                    this.$store.commit('setNaranja', this.$store.state.naranja - 1);
                    this.$store.commit('setSabores', 'Naranja');
                } else{
                    this.$store.commit('setNaranja', this.$store.state.naranja + 1);
                    this.$store.commit('popSabores');
                }
            }
        },
        checkChocolate: {
            get(){
                
            },
            set(value){
                this.$store.commit('setCheckChocolate', value)
                if(this.$store.state.checkChocolate == true){
                    this.$store.commit('setChocolate', this.$store.state.chocolate - 1);
                    this.$store.commit('setSabores', 'Chocolate');
                } else{
                    this.$store.commit('setChocolate', this.$store.state.chocolate + 1);
                    this.$store.commit('popSabores');
                }
            }
        },
        checkTres_leches: {
            get(){
                
            },
            set(value){
                this.$store.commit('setCheckTres_leches', value)
                if(this.$store.state.checkTres_leches == true){
                    this.$store.commit('setTresLeches', this.$store.state.tres_leches - 1);
                    this.$store.commit('setSabores', 'Tres_leches');
                } else{
                    this.$store.commit('setTresLeches', this.$store.state.tres_leches + 1);
                    this.$store.commit('popSabores');
                }
            }
        },
        checkVelas: {
            get(){
                
            },
            set(value){
                this.$store.commit('setCheckVelas', value)
                if (this.$store.state.checkVelas == false) {
                    const lenAdorno = this.$store.state.pedido.adornos.length
                    this.$store.commit('setVelas', this.$store.state.velas + this.$store.state.pedido.adornos[lenAdorno -1].cantidad);
                    this.$store.commit('popAdornos');
                }
            }

        },
        velasCuantos: {
            get(){
            },
            set(num){
                if(this.$store.state.checkVelas == true) {
                    this.$store.commit('setVelas', this.$store.state.velas - num);
                    this.$store.commit('setAdornos', {adorno:'Vela', cantidad: num});
                }
            }
        },
        checkVelasNum: {
            get(){
                
            },
            set(value){
                this.$store.commit('setCheckVelas_numero', value)
                if (this.$store.state.checkVelas_numero == false) {
                    const lenAdorno = this.$store.state.pedido.adornos.length
                    this.$store.commit('setNVelasNumero', this.$store.state.velas_numero + this.$store.state.pedido.adornos[lenAdorno -1].cantidad);
                    this.$store.commit('popAdornos');
                }
            }

        },
        velasnumCuantos: {
            get(){
            },
            set(num){
                if(this.$store.state.checkVelas_numero == true) {
                    this.$store.commit('setNVelasNumero', this.$store.state.velas_numero - num);
                    this.$store.commit('setAdornos', {adorno:'Vela_numero', cantidad: num});
                }
            }
        },
        checkAstronauta: {
            get(){
               
            },
            set(value){
                this.$store.commit('setCheckAstronauta', value)
                if (this.$store.state.checkAstronauta == false) {
                    const lenAdorno = this.$store.state.pedido.adornos.length
                    this.$store.commit('setAstronauta', this.$store.state.astronauta + this.$store.state.pedido.adornos[lenAdorno -1].cantidad);
                    this.$store.commit('popAdornos');
                }
            }

        },
        astronautaCuantos: {
            get(){
            },
            set(num){
                if(this.$store.state.checkAstronauta == true) {
                    this.$store.commit('setAstronauta', this.$store.state.astronauta - num);
                    this.$store.commit('setAdornos', {adorno:'Astronauta', cantidad: num});
                }
            }
        },
        checkBanderillas: {
            get(){
                
            },
            set(value){
                this.$store.commit('setCheckBanderillas', value)
                if (this.$store.state.checkBanderillas == false) {
                    const lenAdorno = this.$store.state.pedido.adornos.length
                    this.$store.commit('setBanderilla', this.$store.state.banderillas + this.$store.state.pedido.adornos[lenAdorno -1].cantidad);
                    this.$store.commit('popAdornos');
                }
            }

        },
        banderillasCuantos: {
            get(){
            },
            set(num){
                if(this.$store.state.checkBanderillas == true) {
                    this.$store.commit('setBanderilla', this.$store.state.banderillas - num);
                    this.$store.commit('setAdornos', {adorno:'Banderillas', cantidad: num});
                }
            }
        },
        checkLetrero: {
            get(){
                
            },
            set(value){
                this.$store.commit('setCheckLetrero', value)
                if (this.$store.state.checkLetrero == false) {
                    const lenAdorno = this.$store.state.pedido.adornos.length
                    this.$store.commit('setLetrero', this.$store.state.letrero + this.$store.state.pedido.adornos[lenAdorno -1].cantidad);
                    this.$store.commit('popAdornos');
                }
            }

        },
        letreroCuantos: {
            get(){
            },
            set(num){
                if(this.$store.state.checkLetrero == true) {
                    this.$store.commit('setLetrero', this.$store.state.letrero - num);
                    this.$store.commit('setAdornos', {adorno:'Letrero', cantidad: num});
                }
            }
        },
        checkNave: {
            get(){
            },
            set(value){
                this.$store.commit('setCheckNave', value)
                if (this.$store.state.checkNave == false) {
                    const lenAdorno = this.$store.state.pedido.adornos.length
                    this.$store.commit('setNave', this.$store.state.nave + this.$store.state.pedido.adornos[lenAdorno -1].cantidad);
                    this.$store.commit('popAdornos');
                }
            }

        },
        naveCuantos: {
            get(){
            },
            set(num){
                if(this.$store.state.checkNave == true) {
                    this.$store.commit('setNave', this.$store.state.nave - num);
                    this.$store.commit('setAdornos', {adorno:'Nave', cantidad: num});
                }
            }
        },
        

    },
    methods:{
        envForm(){
            this.$store.commit('setPedidos');
            document.getElementById('form').reset();
            console.log(this.$store.state);
            window.alert("Pedido tomado Espere un Momento")
        }
    }

}
</script>