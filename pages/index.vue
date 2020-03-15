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
      <v-container fluid id="Profile" class="pt-10">
        <h1 class="white--text">Profile</h1>
        <ProfileView :profile="profile" />
      </v-container>
      <v-container fluid id="MyWorks" class="pt-10">
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
      <v-container fluid id="CompanyWorks" class="pt-10">
      <h1 class="white--text">Company Works</h1>
        <v-row dense>
            <v-col
                v-for="work in company_works"
                :key="work.name"
            >
              <CompanyWorkItem :work="work" />
            </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Work } from "@/models/Work";
import { Profile } from "@/models/Profile";
import Works from "@/data/works.json";
import CompanyWorks from "@/data/company_works.json";
import MyProfile from "@/data/profile.json";

@Component({
  components: {
    Logo: () => import("@/components/Logo.vue"),
    VuetifyLogo: () => import("@/components/VuetifyLogo.vue"),
    ProfileView: () => import("@/components/Profile.vue"),
    WorkItem: () => import("@/components/WorkItem.vue"),
    CompanyWorkItem: () => import("@/components/CompanyWorkItem.vue")
  },
  data() {
    const profile: Profile = MyProfile;
    const works: Work[] = Works;
    const company_works: Work[] = CompanyWorks;
    return { profile, works, company_works }
  }
})

export default class Index extends Vue {}
</script>
