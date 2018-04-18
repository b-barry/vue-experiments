<template>
  <div id="app">
    <table>
      <tr>
        <th>Input</th>  <th>Display</th>  <th>Class</th>
      </tr>
      <tr>
        <td>Any positive &lt;number&gt;</td>
        <td>&lt;number&gt;</td>
        <td>&lt;none&gt;</td>
      </tr>
      <tr>
        <td><kbd>-</kbd></td>
        <td>NC</td>
        <td>is-unknown</td>
      </tr>
      <tr>
        <td>Nothing, empty string</td>
        <td>&lt;empty&gt;</td>
        <td>is-missing</td>
      </tr>
      <tr>
        <td>Other</td>
        <td>&lt;empty&gt;</td>
        <td>is-invalid</td>
      </tr>
    </table>
    <ts-result></ts-result>
  </div>
</template>

<script>
import TsResult from '@/TsResult.cmp'

export default {
  name: 'App',
  components: {
    TsResult
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
