<template>
    <div>
        <input
                v-bind:value="formatedState"
                v-on:input="onInput($event.target.value)"
                v-bind:class="classes"
                class="ts-result"/>
        <pre>{{classes}}</pre>
    </div>
</template>

<script>
  export default {
    // FIXME, magic number for -1 and -2
    // FIXME, is-invalid with more than 1 char display them
    name: 'TsResult',
    props: {
      result: {
        type: Number
      }
    },
    data: function () {
      return {
        state: this.result
      }
    },
    methods: {
      // @Blaize : should be extracted
      format: function (state) {
        if (!state || state === -2) {
          console.debug('Format state', state, 'as <empty-string>')
          return ''
        } else if (state === -1) {
          console.debug('Format state', state, "as constant 'NC'")
          return 'NC'
        } else {
          console.debug('Format state', state, 'as is (', typeof value, ')')
          return state
        }
      },
      onInput: function (newVal) {
        console.debug('onInput(', newVal, ')')

        // @Blaize : should be extracted
        function isResult() {
          // Must accept "incomplete" floats: "1." or "1,"
          return /^\d+[.,]?\d*$/.test(newVal)
        }

        function isUnknown() {
          return newVal && newVal === '-'
        }

        function isMissing() {
          return !newVal || newVal.trim().length === 0
        }

        if (isResult()) {
          var float = parseFloat(newVal)
          this.state = float
            ? Math.round(float * 10) / 10 + ''
            : newVal
        } else if (isUnknown()) {
          this.state = -1
        } else if (isMissing()) {
          this.state = undefined
        } else {
          this.state = -2
        }
        console.log('State for', newVal, 'is', this.state)
      }
    },
    computed: {
      classes: function () {
        if (!this.state) {
          return 'is-missing'
        } else if (this.state === -2) {
          return 'is-invalid'
        } else if (this.state === -1) {
          return 'is-unknown'
        }
      },
      formatedState() {
        return this.format(this.state);
      }
    }
  }
</script>

<style scoped>
    .ts-result {
        border: 1px solid gray;
    }

    .is-unknown {
        border-color: yellow;
    }

    .is-missing {
        border-color: purple;
    }

    .is-invalid {
        border-color: red;
    }
</style>
