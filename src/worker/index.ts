// @ts-check
/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
/** @param worker {ServiceWorkerGlobalScope} */ ((
  worker: ServiceWorkerGlobalScope
) => {
  worker.addEventListener("periodicsync", (event: any) => {
    if (event.tag === "main") {
      // event.waitUntil(
      //     worker.registration.showNotification('Checking stuff', options)
      // );
      gameLoop();
    }
  });

  worker.addEventListener("message", (event: any) => {
    if (event.data.action === "main") {
      // const options = {
      //     body: 'Some body',
      //     icon: null,
      //     badge: '/path/to/badge.png',
      //     vibrate: [100, 50, 100],
      //     data: {
      //         url: null  // URL to open when the user clicks the notification
      //     }
      // };
      // event.waitUntil(
      //     worker.registration.showNotification('Message checking stuff', options)
      // );
      gameLoop();
    }
  });

  async function gameLoop(): Promise<void> {
    console.log("Main loop");
    // Inside your service worker
    worker.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          msg: "Hello from the service worker!",
        });
      });
    });
  }
})(<ServiceWorkerGlobalScope>(<unknown>self));
