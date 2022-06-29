<template>
  <section class="src-componentes-usuarios">
    <div class="jumbotron">
      <h2>Personas {{contador}}</h2>
      <div v-if="this.personas.length > 0"> 
        <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Index</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Mail</th>
            </tr>
            <tr v-for="(persona, index) in personas" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ persona.nombre }}</td>
              <td>{{ persona.edad }}</td>
              <td>{{ persona.email }}</td>
            </tr>
          </table>
        </div>
      </div>
       <div v-else class="alert alert-danger">mockapi vacio</div> 
     </div>
  </section>
</template>

<script >
export default {
  name: "src-componentes-personas",
  props: ['contador'],
  updated() {
    if (this.contador > this.personas.length) {
      this.getPersonas()
    }
      
  },
  data() {
    return {
      url: "https://62a91830943591102badc8eb.mockapi.io/personas",
      personas: [],
    };
  },
  methods: {
         async getPersonas() {
      try {
        let { data: personas } = await this.axios(this.url);
        console.log("AXIOS GET personas", personas);
        this.personas = personas
      } catch (error) {
        console.error("Error en getPersonas()", error.message);
      }
    },
  },
  computed: {
   
  },
};
</script>

<style scoped lang="css">
.src-componentes-personas {
}
.jumbotron {
  background-color: rgb(151, 88, 5);
  color: white;
}
</style>
