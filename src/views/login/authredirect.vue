<template>
  <div class="authredirect">
    <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="" srcset="">
    {{passwordType}}
  </div>
</template>

<script>
export default {
  name: 'AuthRedirect',
  data(){
    return {
      hash: null,    
    }
  },
  created() {
    const hash = window.location.hash.slice(1)
    console.log(hash)
    this.hash = hash
    alert(hash)
    window.opener.location.href = window.location.origin + '/#' + hash
    window.close()
  }
  // mounted() {
  //   console.log(222)
  //   const hash = window.location.search.slice(1)
  //   console.log(hash)
  //   window.opener.location.href = window.location.origin + '/login#' + hash
  //   window.close()
  // }
}
</script>
