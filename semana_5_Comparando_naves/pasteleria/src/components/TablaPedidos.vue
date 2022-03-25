<template>
    <div class="fila">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <table border>
                    <thead>
                        <tr>
                            <th>id pastel</th>
                            <th>Nombre Cliente</th>
                            <th>Correo Cliente</th>
                            <th>Sabores</th>
                            <th>Adornos</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in this.$store.state.pedidos" :key="index">
                        <tr>
                            <td>{{item.id}}</td>
                            <td>{{item.nombre}}</td>
                            <td>{{item.email}}</td>
                            <td >{{item.sabores.toString()}}</td>
                            <td>
                                <span v-for="(adorno, index) in item.adornos" :key="index">{{adorno.cantidad}} {{adorno.adorno + ", "}} </span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>id pastel</th>
                            <th>Nombre Cliente</th>
                            <th>Correo Cliente</th>
                            <th>Sabores</th>
                            <th>Adornos</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
</template>
 
<script>
export default {
name: 'TablaPedidos',
methods: {
    listaTabla(){
        let tabla;
        const tablaHtml = document.getElementById('tabla');
        console.log(object);
        tabla += `<tr>`;
        tabla += `<td>${this.$store.state.pedidos[0].id}</td>`;
        tabla += `<td>${this.$store.state.pedidos[0].nombre}</td>`;
        tabla += `<td>${this.$store.state.pedidos[0].email}</td>`;
        tabla += `<td>${this.$store.state.pedidos[0].sabores}</td>`;
        tabla += `<td>${this.$store.state.pedidos[0].adornos}</td>`;
        tabla += `</tr>`;
        tablaHtml.innerHTML = tabla;
        console.log(tabla);
    }
}
}
</script>