<template>
    <div>
        sitio principal 
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'formulario' }"> Next</b-link>

        <b-col md="6" class="mb-3">
      <p>BIENVENIDO!! </p>
      <b-icon icon="star-fill" animation="fade" font-scale="4"></b-icon>
    </b-col>
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
                },
            ],
        };
    },

    

};
</script>

<style>

</style>