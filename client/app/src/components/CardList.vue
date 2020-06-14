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
        <draggable :delay="200" :delayOnTouchOnly="true" group="cards" :list="list" @start="drag=true" @end="drag=false">
          <transition-group type="transition" name="flip-list">
            <card v-for="(e, index) in list" :key="e.name" :task="e" @submit-data="$emit('submit-data')" v-on:remove-me="list.splice(index, 1)" ></card>
          </transition-group>
        </draggable>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="add">Add</a>
      </footer>
    </div>
  </section>
</template>

<script>
  import Card from './Card'
  import draggable from "vuedraggable";
  export default {
    name: 'CardList',
    props: {
      list: Array
    },
    components: { Card, draggable },
    data: function() {
      return {
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
      add() {
        this.list.push({name: Math.random().toString(36).substring(7) , description: 'Some description'})
      }
    }
  }
</script>
<style>
  .flip-list-move {
    transition: transform 0.5s;
  }
  .flip-list-enter-active, .flip-list-leave-active {
    transition: all 0.5s;
  }
  .flip-list-enter, .flip-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>