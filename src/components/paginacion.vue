<template>
  <div>
     paginación
     <b-breadcrumb :items="items"></b-breadcrumb>
        
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Inicio",
                    href: "#",
                    to: "inicio",
                },
                {
                    text: "Sitio Principal",
                    href: "#",
                    to:"sitio-principal"
                },
                {
                    text: "formulario",
                    href: "#",
                    to:"formulario"
                },
                {
                    text: "paginacion",
                    href: "#",
                   
                },
            ],
        };
    },

    

};
</script>

<style>

</style>