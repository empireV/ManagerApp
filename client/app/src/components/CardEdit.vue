<template>
    <form action="">
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Edit Card</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Name">
                    <b-input
                            v-model="form.name"
                            required>
                    </b-input>
                </b-field>

                <b-field label="Description">
                    <b-input
                            type="textarea"
                            v-model="form.description"
                            required>
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <b-button @click="close">Save</b-button>
                <b-button @click="$parent.close()">Close</b-button>
            </footer>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            task: Object
        },
        data: () => {
            return {
                form: {
                    name: '',
                    description: ''
                }
            }
        },
        mounted() {
            console.log(this.task)
            this.form.name = this.task.name
            this.form.description = this.task.description
        },
        methods: {
            close() {
                this.$parent.close()
                this.task.name = this.form.name
                this.task.description = this.form.description
                this.$emit('submit-data')
            }
        }
    }
</script>