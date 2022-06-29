import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
    validators:{
        'no-espacios' : function(value) {
           return !value.includes(' ')
            //return /[^ ]+/.test(value)
        }, 
        'valida-nombre' : function(value) {
            return value.length > 3 && value.length < 15
        }

    }

}


Vue.use(VueForm, options)