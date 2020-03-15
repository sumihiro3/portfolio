<template>
  <v-app>
    <v-app-bar fixed app color="primary" class="white--text">
      <v-app-bar-nav-icon class="white--text">
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item 
              v-for="(item, i) in items" 
              :key="i"
              :href="item.href"
            >
              <v-list-item-title href="https://googole.com">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; Sumihiro Kagawa</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Menu } from "@/models/Menu";
import Menus from "@/data/menus.json";

@Component({
  data() {
    const items: Menu[] = Menus;
    return { items };
  }
})
export default class extends Vue {
  get title() {
    return "Sumihiro Kagawa's portfolio";
  }
}
</script>