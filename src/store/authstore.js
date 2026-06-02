
export const authStore = {
    currentUser : JSON.parse(localStorage.getItem("currentUser")) || null,
    login(user){
        this.currentUser = user
        localStorage.setItem("currentUser", JSON.stringify(user))
    },
    logout(){
        this.currentUser = null
        localStorage.removeItem("currentUser")
    },
    isAuthenticated(){
        return this.currentUser !== null
    },
    getUser(){
        return this.currentUser
    }
}

