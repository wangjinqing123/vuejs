let VueDialog = function(){} //noop

import dialog from "./vue-dialog.vue";

VueDialog.install= function(){
  Vue.component('vue-dialog',dialog);
};

export default VueDialog;


//对话框插件 html
// <vue-dialog></vue-dialog>

// js
// import VueDialog from "../plugins/dialog.js";
// Vue.use(VueDialog);
// new VueDialog();
