export default {
    namespaced: true,
    state(){
        return {
            friends: [
                {
                  idUser:"",
                  name: "Manuel Lorenz",
                  phone: "0123 45678 90",
                  email: "manuel@localhost.com",
                  valid: true,
                },
                {
                  idUser: "",
                  name: "Julie Jones",
                  phone: "0987 654421 21",
                  email: "julie@localhost.com",
                  valid: false,
                },
            ], 
        }
    },
    getters: {
        friends(state) {
            return state.friends
        }
    },
    mutations: {
        add(state, payload) {
            state.friends.push(payload)
        },
        delete(state, id) {
            state.friends.splice([id], 1)
        },
        toggle(state, id) {
            state.friends[id].valid = !state.friends[id].valid 
        },
        editPhone(state, payload) {
            state.friends[payload.id].phone = payload.phone
        },
        editEmail(state, payload) {
            state.friends[payload.id].email = payload.email
        }  
    },
    actions: {
        add(context, payload) {
            context.commit("add", payload)
        },
        delete(context, id) {
            setTimeout(() => {
                context.commit("delete", id)
            }, 3000)
        },
        toggle(context, id) {
            context.commit("toggle", id)
        },
        editPhone(context, payload) {
            context.commit("editPhone", payload)
        },
        editEmail(context, payload) {
            context.commit("editEmail", payload)
        }
    },
}