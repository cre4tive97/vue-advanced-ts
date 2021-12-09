import Vue from "vue";
import { MyStore } from "@/store/types";

// node_modules/vuex/types/vud.d.ts 삭제해야 정상 추론됨
declare module "vue/types/vue" {
  interface Vue {
    $store: MyStore;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
