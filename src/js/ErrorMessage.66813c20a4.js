import store from"./store.872368a767.js";export default class ErrorMessage{constructor(){this.$node=document.querySelector("#error-message")}toggleVisibility(){const{leaderboardError:e,leaderboardLoaded:t}=store.getState();e?this.$node.removeAttribute("hidden"):t||this.$node.setAttribute("hidden","hidden")}init(){store.subscribe(this.toggleVisibility.bind(this))}}