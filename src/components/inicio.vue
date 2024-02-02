<template>
  <b-container>
  <b-breadcrumb :items="items"></b-breadcrumb>
</b-container>
</template>


<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '#',
            to: { name: 'sitio-principal' }
          },
           
           {
             text: 'Inicio',
             active: true   
             //aqui este active es simplemente en donde me encuentro 
          }
        ]
      }
    }
  }
</script>