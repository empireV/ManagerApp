<template>
  <section class="section">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          TITLE
        </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
      <div class="container">
        <draggable group="people">
          <div v-for="e in cards" :key="e" class="item">
            <card :name="e"></card>
          </div>
        </draggable>
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card'
import draggable from "vuedraggable";
export default {
  name: 'CardList',
  props: {
    taskList: Array
  },
  components: { Card, draggable },
  data: function() {
    return {
      cards: [1, 2, 3, 4]
    }
  },
  methods: {
  }
}
</script>