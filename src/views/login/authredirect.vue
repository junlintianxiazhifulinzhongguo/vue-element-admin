
<script>
export default {
  name: 'AuthRedirect',
  created() {
    const hash = window.location.hash.slice(1)
    console.log(hash)
    window.opener.location.href = window.location.origin + '#/login?' + hash.split("?")[1]
    window.close()
  }
  // mounted() {
  //   console.log(222)
  //   const hash = window.location.search.slice(1)
  //   console.log(hash)
  //   window.opener.location.href = window.location.origin + '#/login?' + hash
  //   window.close()
  // }
}
</script>
