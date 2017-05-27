export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isRecommend: false
    }
  },
  methods: {
    recommend () {
      this.isRecommend = !this.isRecommend;
    },
  }
}
