<template>
  <li>
    <h2>
      <span>{{ friends[id].name }} ({{ friends[id].valid ? "valid" : "invalid" }})</span>
      <button class="delete" @click="deleteContact(id)">X</button>
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleValid(id)">
      Toggle Valid
    </button>
    <ul v-if="detailsAreVisible">
      <li> 
        <strong>Phone:</strong>
        <input  v-model="friends[id].phone" />
        <button @click="editPhone(id, friends[id].phone)"> Edit</button>
      </li>
      <li>
        <strong>Email:</strong>
        <input v-model="friends[id].email"/>
        <button @click="editEmail(id, friends[id].email)"> Edit</button>
      </li>
    </ul>
  </li>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  props: ["id"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  computed: {
    ...mapGetters("friendsState", ["friends"]),
    
  },
  methods: {
    ...mapActions("friendsState", ["toggle", "delete", "editPhone", "editEmail"]),

    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleValid(id){
      this.$store.dispatch("friendsState/toggle", id)
    },
    deleteContact(id) {
      this.$store.dispatch("friendsState/delete", id)
    },
    editPhone(id, newPhone){
      this.$store.dispatch("friendsState/editPhone", {id: id, phone: newPhone})
    },
    editEmail(id, newEmail){
      this.$store.dispatch("friendsState/editEmail", {id: id, email: newEmail})
    }
  },
};
</script>

<style scoped>
.delete {
  color: red !important;
  background:transparent !important;
  border: none !important;
  box-shadow: none !important;
  float: right;
}
</style>
