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
                  <div>
                    {{ task.description }}
                  </div>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item" @click="edit">Edit</a>
                <a class="card-footer-item" @click="removeMe">Delete</a>
            </footer>

            <b-modal :active.sync="isEdit"
                 has-modal-card
                 trap-focus
                 :destroy-on-hide="false"
                 aria-role="dialog"
                 aria-modal>
            <card-edit @submit-data="$emit('submit-data')" :task="this.task"></card-edit>
            </b-modal>
    </b-collapse>
</template>

<script>
import CardEdit from './CardEdit'
export default {
  name: 'Card',
  components: { CardEdit },
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
    },
    edit() {
      this.isEdit = true
    }
  }
}
</script>