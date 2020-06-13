<template>
  <section class="section hero is-fullheight is-error-section">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-two-fifths">
              <div class="card">
                <div class="card-header">
                  <p class="card-header-title">
                    Login
                  </p>
                </div>
                <form @submit.prevent="submit" class="card-content">
                  <b-field label="Login">
                    <b-input type="text" v-model="name" required>
                    </b-input>
                  </b-field>
                  <b-field label="Password">
                    <b-input type="password" v-model="password" password-reveal required>
                    </b-input>
                  </b-field>
                  <hr>
                  <b-field class="field" grouped>
                    <b-button class="control is-black" @click="login">Login</b-button>
                  </b-field>
                 </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Login',
  props: {
  },
  data: function() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    async login () {
        try {
          await this.$store.dispatch('login', { name: this.name, password: this.password })
          this.$router.push({ name: 'main' })
        } catch (e) {
          this.$buefy.toast.open({
            duration: 2000,
            message: e.message,
            position: 'is-top',
            type: 'is-danger'
          })
        }
    }
  }
}
</script>