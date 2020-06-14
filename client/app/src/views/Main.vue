<template>
  <div>
    <b-navbar shadow>
      <template slot="brand">
        <b-navbar-item>
          <span class="is-size-5">ManagerApp</span>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          {{ user.name }}
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-light" @click="logout">
              Logout
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="hero is-fullheight">
      <div class="columns is-multiline">
        <card-list :title="titles[index]" v-for="(list, index) in cardLists" @submit-data="save" :key="index" :list="list" class="column"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CardList from '../components/CardList'
  export default {
    name: 'Main',
    props: {
    },
    components: { CardList },
    data: function() {
      return {
        cardLists: [],
        titles: ['Backlog','In progress','Blocked','Done']
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    }
    ,
    mounted () {
      this.loadData()
    },
    methods: {
      async logout() {
        await this.$store.dispatch('logout')
        this.$router.push('/login')
      },
      async loadData() {
        this.cardLists = await this.$store.dispatch('getTasks')
      },
      async save() {
        console.log('SAVE')
        await this.$store.dispatch('saveTasks', this.cardLists)
      }
    },
    watch: {
      cardLists: function() {
        this.save()
      }
    }
  }
</script>