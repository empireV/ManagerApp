<template>
    <b-collapse :open="false" class="card" animation="slide" aria-id="contentIdForA11y3">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title">
                   {{ task.name }}
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <div v-if="!isEdit"  @dblclick="isEdit = true">
                    {{ task.description }}
                  </div>
                  <b-field v-else>
                    <b-input v-model="task.description" maxlength="200" type="textarea"></b-input>
                  </b-field>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item" @click="removeMe">Delete</a>
            </footer>
    </b-collapse>
</template>

<script>
export default {
  name: 'Card',
  props: {
    task: Object
  },
  data: function() {
    return {
      isEdit: false,
    }
  },
  methods: {
    removeMe() {
      this.$emit('remove-me')
    }
  }
}
</script>