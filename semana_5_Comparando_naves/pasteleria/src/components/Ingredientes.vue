<template>
        <div class="fila">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h3>Ingrdientes para pasteles</h3>
                <ul>
                    <li>Limon
                        <span>cantidad {{this.$store.state.limon}}</span>
                    </li>
                    <li>Fresa
                        <span>cantidad {{this.$store.state.fresa}}</span>
                    </li>
                    <li>Aleman
                        <span>cantidad {{this.$store.state.aleman}}</span>
                    </li>
                    <li>Naranja
                        <span>cantidad {{this.$store.state.naranja}}</span>
                    </li>
                    <li>Chocolate
                        <span>cantidad {{this.$store.state.chocolate}}</span>
                    </li>
                    <li>Tres Leches
                        <span>cantidad {{this.$store.state.tres_leches}}</span>
                    </li>
                </ul>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">


                <h3>Dercoracion para pasteles</h3>

                <ul>
                    <li>Velas
                        <span>cantidad {{this.$store.state.velas}}</span>
                    </li>
                    <li>Nave
                        <span>cantidad {{this.$store.state.nave}}</span>
                    </li>
                    <li>Astronauta
                        <span>cantidad {{this.$store.state.astronauta}}</span>
                    </li>
                    <li>Banderillas con forma de estrella
                        <span>cantidad {{this.$store.state.banderillas}}</span>
                    </li>
                    <li>Letrero feliz cumpleaños
                        <span>cantidad {{this.$store.state.letrero}}</span>
                    </li>
                    <li>Velas Numero
                        <span>cantidad {{this.$store.state.velas_numero}}</span>
                    </li>
                </ul>
            </div>
        </div>
</template>
 
<script>
export default {
name: 'Ingredientes'
}
</script>