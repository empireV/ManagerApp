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
        <draggable :delay="200" group="cards" v-model="cards" @start="drag=true" @end="drag=false">
          <transition-group type="transition" name="flip-list">
          <div v-for="e in cards" :key="e">
            <card :name="e"></card>
          </div>
          </transition-group>
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
      cards: [1, 2, 3, 4],
      drag: false
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
  }
}
</script>
<style>
.flip-list-move {
  transition: transform 0.5s;
}
</style>
