<template>
  <span class="pa-4">
    <v-btn 
      :href="contact.href" target="_blank" rel="noopener"
      :color="contact.icon_color"  fab x-large dark>
      <v-icon>{{ contact.icon }}</v-icon>
    </v-btn>
  </span>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Contact from "@/models/Contact.vue";

@Component
export default class ContactComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly contact!: Contact;
}
</script>