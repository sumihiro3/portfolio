<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-container fluid>
        <h1 class="white--text">My Works</h1>
        <v-row dense>
            <v-col
                v-for="work in works"
                :key="work.name"
            >
              <WorkItem :work="work" />
            </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Work } from "@/models/Work";
import Works from "@/data/works.json";

@Component({
  components: {
    Logo: () => import("@/components/Logo.vue"),
    VuetifyLogo: () => import("@/components/VuetifyLogo.vue"),
    WorkItem: () => import("@/components/WorkItem.vue")
  },
  data() {
    const works: Work[] = Works;
    return { works }
  }
})

export default class Index extends Vue {}
</script>
