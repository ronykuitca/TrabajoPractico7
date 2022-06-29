<template>
<div class="container-fluid mt-3">
  <div class="jumbotron">
    Trabajo Práctico Rony Kuitca
    <hr>

    <Formulario />
     <!-- <Personas /> -->
  </div>
</div>
</template>

<script>
import Formulario from './componentes/Formulario.vue'
/* import Personas from './componentes/Personas.vue'  */


export default {
  name: 'App',
  components: {
    Formulario,
/*      Personas  */
  }
}
</script>

<style>

</style>
