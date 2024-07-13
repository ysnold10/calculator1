const { createApp, ref } = Vue

  createApp({
    setup() {
      const firstnum = ref('')
      const secondnum = ref('')
      const sum = ref(null)
      const home = ref(true)
      const result = ref(false)
      const keys = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
      const firstnumshow = ref(true)
      const secondnumshow = ref(false)
      const operations = ref(false)
      const inputone = ref(true)
      const inputtwo = ref(false)
      const showok = ref(true)
      const keys2 = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
      function buttons(key){
        this.firstnum += key
      }
      function buttonstwo(keyy){
        this.secondnum += keyy
      }
      function showbuuts(){
        inputone.value = false
        inputtwo.value = true
      }
      function plus(){
        sum.value = parseFloat(firstnum.value) + parseFloat(secondnum.value)
        operations.value = false
      }
      function sub(){
        sum.value = parseFloat(firstnum.value) - parseFloat(secondnum.value)
        operations.value = false
      }
      function mul(){
        sum.value = parseFloat(firstnum.value) * parseFloat(secondnum.value)
        operations.value = false
      }
      function div(){
        sum.value = parseFloat(firstnum.value) / parseFloat(secondnum.value)
        operations.value = false
      }
      function clear(){
        sum.value = null
         firstnum.value = ''
         secondnum.value = ''
        result.value = false 
      }
      function showresult(){
        home.value = true
        result.value = true
         firstnum.value = ''
         secondnum.value = ''
      }
      function showsedcondnum(){
        secondnumshow.value = true
        firstnumshow.value = false
        
      }
      function buttonok(){
        showok.value = false
      }
      return {
        firstnum,secondnum,sum,plus,sub,mul,div,clear,home,result,showresult,keys,buttons,secondnumshow,firstnumshow,showsedcondnum,operations,inputone,inputtwo,keys2,buttonstwo,showbuuts,showok,buttonok
      }
    }
  }).mount('#app')