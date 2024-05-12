<template>
  <NuxtPwaManifest />
  <NuxtLayout />
</template>

<script setup>
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp();
$pwa.install();
$pwa.updateServiceWorker();
onMounted(async () => {
  if ($pwa.offlineReady) console.log("App ready to work offline");

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    }
  });
  navigator.permissions
    .query({ name: "periodic-background-sync" })
    .then(async (status) => {
      if (status === "granted") {
        console.log("Registering periodic sync");
        const registration = await navigator.serviceWorker.ready;
        await registration.periodicSync.register("main", {
          minInterval: 24 * 60 * 60 * 1000,
        });
      }
    });
  setInterval(() => {
    navigator.serviceWorker.controller.postMessage({
      action: "main",
    });
  }, 5000);
});
</script>
