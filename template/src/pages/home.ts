import Vue, { ComponentOptions }  from 'vue';

interface Home extends Vue {
  message: string
  onClick (): void
}

export default {
  name: 'Home',
  data(){
    return {
      dingtalk:true
    }
  },
  template: `
    <div v-if="dingtalk">12345</div>
  `
} as ComponentOptions<Home>
