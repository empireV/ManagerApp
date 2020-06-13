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
              <div class="buttons">
                <a class="button is-light" @click="logout">
                  Logout
                </a>
              </div>
            </b-navbar-item>
          </template>
    </b-navbar>
    <div class="hero is-fullheight">
      <div class="columns">
        <div class="column">
          <card-list/>
        </div>
       <div class="column">
          <card-list/>
        </div>
        <div class="column">
          <card-list/>
        </div>
        <div class="column">
          <card-list/>
        </div>
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
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>