<template>
  <v-card max-width="520" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="orange darken-2" v-if="work.prize">
        <v-tooltip bottom>
          <template v-slot:activator="{on}">
            <v-icon midium color="#f4f4f4" v-on="on">mdi-trophy</v-icon>
          </template>
          <span v-for="p in work.prize" :key="p">
            {{ p }}<br />
          </span>
        </v-tooltip>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ work.name }}</v-list-item-title>
        <v-list-item-subtitle>
          <v-spacer></v-spacer>
          <!-- Webpage -->
          <v-tooltip bottom v-if="work.website_url">
            <template v-slot:activator="{on}">
              <v-btn icon :href="work.website_url" target="_blank" rel="noopener" v-on="on">
                <v-icon>mdi-home</v-icon>
              </v-btn>
            </template>
            <span>Webpage</span>
          </v-tooltip>
          <!-- Demo video -->
          <v-tooltip bottom v-if="work.demo_url">
            <template v-slot:activator="{on}">
              <v-btn icon :href="work.demo_url" target="_blank" rel="noopener" v-on="on">
                <v-icon>mdi-video-vintage</v-icon>
              </v-btn>
            </template>
            <span>Demo video</span>
          </v-tooltip>
          <!-- Presentation slide -->
          <v-tooltip bottom v-if="work.presentation_url">
            <template v-slot:activator="{on}">
              <v-btn icon :href="work.presentation_url" target="_blank" rel="noopener" v-on="on">
                <v-icon>mdi-presentation-play</v-icon>
              </v-btn>
            </template>
            <span>Presentation slide</span>
          </v-tooltip>
          <!-- Share -->
          <v-tooltip bottom v-if="false">
            <template v-slot:activator="{on}">
              <v-btn icon v-on="on">
                <v-icon>mdi-share</v-icon>
              </v-btn>
            </template>
            <span>Share</span>
          </v-tooltip>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-img
      :src="work.src"
      class="align-end primary"
      gradient="to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
      height="200px"
      :alt="work.name"
    />
    <v-card-text>
      <!-- Description -->
      <div class="pb-1" v-for="d in work.description" :key="d">
        {{ d }}
        <br />
      </div>
      <v-expansion-panels flat>
        <v-expansion-panel>
          <v-expansion-panel-header>詳細（期間・役割 など）</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div>
              <h4 class="pt-2">期間</h4>
              <ul>
                <li>{{ work.releaseDate }}</li>
              </ul>
            </div>
            <!-- Role -->
            <div>
              <h4 class="pt-2">役割</h4>
              <ul>
                <li v-for="r in work.role" :key="r">{{ r }}</li>
              </ul>
            </div>
            <!-- Tech -->
            <div v-if="work.tech">
              <h4 class="pt-2">利用技術</h4>
              <ul>
                <li v-for="t in work.tech" :key="t">{{ t }}</li>
              </ul>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Work from "@/models/Work.vue";

@Component
export default class WorkDetailComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly work!: Work;
}
</script>