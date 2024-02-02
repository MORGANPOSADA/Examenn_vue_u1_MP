<template>
    <div>
        sitio principal 
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'formulario' }"> Next</b-link>
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