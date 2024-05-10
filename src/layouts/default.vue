<template>
  <v-app id="kiss">
    <v-navigation-drawer color="pink-lighten-2" rail>
      <v-btn icon class="d-block text-center mx-auto mt-4" to="/" size="small">
        <v-avatar color="pink-darken-3"></v-avatar>
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
              <v-avatar color="pink-darken-1" size="small"></v-avatar>
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
              <v-avatar color="pink-lighten-1" size="small"></v-avatar>
            </v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer width="244" color="pink-lighten-1">
      <v-sheet color="pink-darken-4" height="128" width="100%"></v-sheet>

      <v-list nav density="compact">
        <v-list-item title="Videos" link></v-list-item>
        <v-list-item title="Images" link></v-list-item>
        <v-list-item title="Hypnosis" link></v-list-item>
        <v-list-item title="Tasks" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="px-3" color="pink-lighten-2" height="72" flat>
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

    <v-footer height="72" app color="pink-lighten-2">
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
  },
  {
    title: "Cum",
    to: "/course/cum",
  },
  {
    title: "Submission",
    to: "/course/cum",
  },
  {
    title: "Speaking",
    to: "/course/cum",
  },
  {
    title: "Oral",
    to: "/course/cum",
  },
  {
    title: "Clothing",
    to: "/course/cum",
  },
  {
    title: "Media",
    to: "/course/cum",
  },
];
const clubs = [
  {
    title: "Maid",
    to: "/course/anal",
  },
  {
    title: "Stripping",
    to: "/course/anal",
  },
];
</script>
