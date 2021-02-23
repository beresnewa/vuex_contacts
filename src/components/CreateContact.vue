<template>
  <form @submit.prevent="formHandler">
    <div>
      <label>Name</label>
      <input type="text" v-model="nameForm"/>
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="phoneForm"/>
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="emailForm"/>
    </div>
    <input type="submit" @click="addContact(nameForm, phoneForm, emailForm)">
  </form>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  
  data() {
    return {
      nameForm: '',
      phoneForm: '',
      emailForm: '',
    };
  },
  computed: {
    ...mapGetters("friendsState", ["friends"]),
  },
  methods: {
    ...mapActions("friendsState", ["add"]),

    addContact(nameForm, phoneForm, emailForm){
      this.$store.dispatch({ type:"friendsState/add", name: nameForm, phone: phoneForm, email: emailForm })
    },
  }
};
</script>

<style></style>
