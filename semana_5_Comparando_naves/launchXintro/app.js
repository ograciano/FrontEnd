const app = Vue.createApp({
    data() {
        return {
            nombre: 'Oscar Omar',
            apellido: 'Graciano Simental',
            email: 'oscar.g.simental@gmail.com',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async cambiarUsuario() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            const rand = results[0];
            this.nombre = rand.name.first;
            this.apellido = rand.name.last;;
            this.email = rand.email;
            this.genero = rand.gender;
            this.foto = rand.picture.large;
        }
    }
})

app.mount('#app')