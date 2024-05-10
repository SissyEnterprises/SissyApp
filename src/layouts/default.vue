<template>
  <v-app id="kiss">
    <v-navigation-drawer color="pink-lighten-2" rail>
      <v-avatar
        class="d-block text-center mx-auto mt-4"
        color="pink-darken-3"
        size="36"
      ></v-avatar>

      <v-divider class="mx-3 my-5"></v-divider>

      <v-avatar
        v-for="n in 6"
        :key="n"
        class="d-block text-center mx-auto mb-6"
        color="pink-darken-1"
        size="28"
      ></v-avatar>
    </v-navigation-drawer>

    <v-navigation-drawer width="244" color="pink-lighten-1">
      <v-sheet color="pink-lighten-4" height="128" width="100%"></v-sheet>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          :title="`Item ${n}`"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="px-3" color="pink-lighten-3" height="72" flat>
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          bg-color="pink-lighten-4"
          density="compact"
          rounded="pill"
          variant="solo-filled"
          flat
          hide-details
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-main>
      <NuxtPage></NuxtPage>
    </v-main>

    <v-navigation-drawer location="right" color="pink-lighten-2">
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          :title="`Item ${n}`"
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
