<template>
  <v-app id="kiss">
    <v-navigation-drawer color="pink-lighten-2" rail permanent>
      <v-btn icon class="d-block text-center mx-auto mt-4" to="/" size="small">
        <v-avatar color="pink-darken-3">
          <v-img
            alt="Profile picture"
            src="https://avatars.githubusercontent.com/u/81266695?v=4"
          ></v-img>
        </v-avatar>
      </v-btn>

      <v-divider class="mx-2 my-3"></v-divider>
      <template v-for="course in courses">
        <v-tooltip :text="course.title">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon
              class="d-block text-center mx-auto mb-5"
              size="x-small"
              :to="course.to"
            >
              <v-avatar color="pink-darken-1" size="small">
                <v-img alt="Avatar" :src="course.avatar"></v-img
              ></v-avatar>
            </v-btn>
          </template>
        </v-tooltip>
      </template>
      <v-divider class="mx-2 my-3"></v-divider>
      <template v-for="course in clubs">
        <v-tooltip :text="course.title">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon
              class="d-block text-center mx-auto mb-5"
              size="x-small"
              :to="course.to"
            >
              <v-avatar color="pink-darken-1" size="small">
                <v-img alt="Avatar" :src="course.avatar"></v-img
              ></v-avatar>
            </v-btn>
          </template>
        </v-tooltip>
      </template>
      <template #append>
        <v-tooltip :text="panelExpanded ? 'Collapse' : 'Expand'">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              :icon="panelExpanded ? 'mdi-arrow-left' : 'mdi-arrow-right'"
              class="d-block text-center mx-auto mb-5"
              size="x-small"
              @click="panelExpanded = !panelExpanded"
            >
            </v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="panelExpanded"
      width="244"
      color="pink-lighten-1"
      :permanent="isMobile"
    >
      <v-sheet color="pink-darken-4" height="128" width="100%">
        <v-img
          alt="Profile picture"
          src="https://avatars.githubusercontent.com/u/81266695?v=4"
        ></v-img
      ></v-sheet>

      <v-list nav density="compact">
        <v-list-item title="Videos" link></v-list-item>
        <v-list-item title="Images" link></v-list-item>
        <v-list-item title="Hypnosis" link></v-list-item>
        <v-list-item title="Tasks" link></v-list-item>
        <v-divider class="mx-2 my-3"></v-divider>
        <v-list-item title="Beginner" link></v-list-item>
        <v-list-item title="Intermediate" link disabled></v-list-item>
        <v-list-item title="Advanced" link disabled></v-list-item>
        <v-list-item title="Master" link disabled></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      class="px-3"
      color="pink-lighten-2"
      height="72"
      flat
      density="compact"
    >
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          bg-color="pink-lighten-4"
          density="compact"
          rounded="pill"
          variant="solo-filled"
          flat
          hide-details
          placeholder="Search"
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-main>
      <NuxtPage></NuxtPage>
    </v-main>

    <v-navigation-drawer location="right" color="pink-lighten-3">
      <v-list nav density="compact">
        <v-list-item
          v-for="n in 5"
          :key="n"
          :title="`Student ${n}`"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer app color="pink-lighten-2">
      <v-text-field
        bg-color="pink-lighten-4"
        class="overflow-hidden"
        density="compact"
        rounded="pill"
        variant="solo-filled"
        flat
        hide-details
        placeholder="Send a message..."
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script setup>
const courses = [
  {
    title: "Anal",
    to: "/course/anal",
    avatar:
      "https://ei.phncdn.com/videos/202308/17/437595011/original/(m=q2I79UYbeGNdHgaaaa)(mh=huTkoPz6RQj719WH)0.jpg",
  },
  {
    title: "Cum",
    to: "/course/cum",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERPcF1aVfTCc_C_KPEckw49W9ur7ZmQlWPLHoeJkTkA&s",
  },
  {
    title: "Submission",
    to: "/course/cum",
    avatar:
      "https://i.pinimg.com/originals/45/a5/c7/45a5c7baa07195f4b758461e13934d82.jpg",
  },
  {
    title: "Speaking",
    to: "/course/cum",
    avatar:
      "https://preview.redd.it/i-love-sissy-porn-captions-v0-s397fjq8wjk91.jpg?width=606&format=pjpg&auto=webp&s=dd3feaaf529a87dbb505e62827b9c643e7ff92ce",
  },
  {
    title: "Oral",
    to: "/course/cum",
    avatar:
      "https://ei.phncdn.com/videos/202107/18/391464631/original/(m=eGNdHgaaaa)(mh=26ijPwb7Idb1dMkk)7.jpg",
  },
  {
    title: "Clothing",
    to: "/course/cum",
    avatar:
      "https://i.pinimg.com/236x/e7/75/6c/e7756cd015c8fe1e645256002c37d4bf.jpg",
  },
  {
    title: "Media",
    to: "/course/cum",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqjFAQW2pOTf4oC1OMzzfyhmWXantZh-5nE8JKljQXA&s",
  },
];
const clubs = [
  {
    title: "Maid",
    to: "/course/anal",
    avatar: "https://i.ebayimg.com/images/g/aK0AAOSwEelgRsa-/s-l1200.webp",
  },
  {
    title: "Stripping",
    to: "/course/anal",
    avatar:
      "https://ei.phncdn.com/videos/201908/02/239201581/original/(m=eaSaaTbaAaaaa)(mh=J9aR2b9xaLrwFiGc)12.jpg",
  },
];
import { useDisplay } from "vuetify";

const { name } = useDisplay();
const isMobile = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return false;
    case "sm":
      return false;
    case "md":
      return true;
    case "lg":
      return true;
    case "xl":
      return true;
    case "xxl":
      return true;
  }
  return false;
});
const panelExpanded = ref(!!isMobile);
</script>
