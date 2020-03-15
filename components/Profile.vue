<template>
  <v-card class="mx-auto">
    <v-row align="top" class="fill-height">
      <v-col cols="4">
        <v-avatar class="profile" color="grey" size="256">
          <v-img :src="profile.src"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <div class="headline pb-4">{{ profile.name }} （{{ profile.name_jp }}）</div>
        <div>
          <p class="text-justify pb-2"
            v-for="b in profile.bio"
            :key="b"
            >
            {{ b }}
          </p>
        </div>
        <!-- <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="headline pb-4">{{ profile.name }} （{{ profile.name_jp }}）</v-list-item-title>
              <v-list-item-subtitle >
                </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> -->
        
      </v-col>
    </v-row>
  </v-card>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Profile from "@/models/Profile.vue";

@Component
export default class ProfileComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly profile!: Profile;
}
</script>