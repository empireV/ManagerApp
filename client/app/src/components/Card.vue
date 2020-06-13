<template>
    <b-collapse :open="false" class="card" animation="slide" aria-id="contentIdForA11y3">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title">
                   {{ name }}
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                  <div v-if="!isEdit">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a>#buefy</a>.
                  </div>
                  <b-field v-else>
                    <b-input maxlength="200" type="textarea"></b-input>
                  </b-field>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">Save</a>
                <a class="card-footer-item" @click="startEdit">Edit</a>
                <a class="card-footer-item">Delete</a>
            </footer>
    </b-collapse>
</template>

<script>
export default {
  name: 'Card',
  props: {
    task: Object,
    name: String
  },
  data: function() {
    return {
      isEdit: false,
    }
  },
  methods: {
    startEdit () {
      this.isEdit = !this.isEdit
    }
  }
}
</script>