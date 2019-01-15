import {request} from "./api.js";

exports.install = function(Vue, option){
    Vue.prototype.say = function(){
        alert("Hello,world");
    };
    
    Vue.prototype.$api = request;
};