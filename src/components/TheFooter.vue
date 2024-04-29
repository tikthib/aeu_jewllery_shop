<template>
  <div class="header">
    <h1>Footer</h1>
     
     
   
    <slot />


    
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(14, 14, 14);
}

</style>
