<template>
  <v-card>
    <v-img
      :src="work.src"
      class="align-end primary"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="workName"></v-card-title>
    </v-img>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Work from "@/models/Work.vue";

@Component
export default class WorkDetailComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly work!: Work;

  get workName(): string {
    return `${this.$props.work.name}（${this.$props.work.releaseDate}）`;
  }
}
</script>