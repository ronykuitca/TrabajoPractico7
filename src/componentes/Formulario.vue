<template>
  <section class="src-componentes-formulario-av">
    <div class="jumbotron">
      <h2>Componente Formulario</h2>
      <hr />
      <hr />
      <br />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- Campo nombre -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre"
            required
            no-espacios
            valida-nombre
          />

          <!-- Mensaje de validación -->
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success mt-1"> Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">
              Este campo requerido
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
            <div slot="valida-nombre" class="alert alert-danger mt-1">
              La cantidad de caracteres debe ser entre 3 y 15
            </div>
          </field-messages>
        </validate>
        <br />

        <!-- Campo edad -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
          />

          <!-- Mensaje de validación -->
          <field-messages name="edad" show="$dirty">
            <!-- <div class="alert alert-success mt-1"> Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">
              Este campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad maxima permitida es de {{ edadMax }} años.
            </div>
          </field-messages>
        </validate>

        <br />
        <!-- Campo email -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email"
            required
          />

          <!-- Mensaje de validación -->
          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success mt-1"> Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">
              Este campo requerido
            </div>
            <div slot="email" class="alert alert-danger mt-1">
              Email no válido
            </div>
          </field-messages>
        </validate>

        <!-- Botón de envío -->
        <button class="btn btn-success my-5" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>

       <Personas :contador="contador"/>
    </div>
  </section>
</template>

<script>
import Personas from "./Personas.vue";

export default {
  name: "src-componentes-formulario-av",
  components : {
    Personas
  },
  props: [],
  mounted() {},
  data() {
    return {
      formState: {},
      formData: this.getInicialData(),
      edadMin: 18,
      edadMax: 120,
      url: "https://62a91830943591102badc8eb.mockapi.io/personas",
      contador: 0,
    };
  },
  methods: {
    getInicialData() {
      return {
        nombre: "",
        edad: "",
        email: "",
      };
    },
    async enviar() {
      console.log({ ...this.formData });
      try {
        let { data: usuario } = await this.axios.post(this.url, this.formData);
        console.log("AXIOS POST usuario", usuario);
      } catch (error) {
        console.error("Error en postUsuario()", error.message);
      }
      this.contador++;
      console.log(this.contador);
      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-componentes-formulario-av {
}

.jumbotron {
  background-color: rgb(9, 97, 119);
  color: white;
}

hr {
  background-color: #bbb;
}

pre {
  color: white;
}
</style>
