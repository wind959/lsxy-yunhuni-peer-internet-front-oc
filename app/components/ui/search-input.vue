<template>
  <div class="search-box">
    <input class="form-control search"
      placeholder="{{placeholder}}" 
      v-model="value"
      type="text"
       />
    <i class="iconfont icon-oc-search cursor" @click="action" ></i>
  </div>
</template>

<style lang="sass" scoped>
  .search-box{
    position: relative;
    i{
      position: absolute;
      right:5px;
      top:5px;
      color:#d4d4d4;
      font-size: 1.8rem;
    }
  }
</style>

<script>
  export default {
    data(){
      return{
        searchName: '',
      }
    },
    props: {
      value:{
        type: String,
        twoWays:true,
        default:''
      },
	    action: {
      	type: Function,
        default: function(){
      		console.log('defaut action')
      	  return
        }
      },
      placeholder: {
      	type: String,
        default: ''
      },
    },
    methods: {},
    ready(){}
  }
</script>
