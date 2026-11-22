// Nettoyage : l'ancienne version du jeu (installée à la racine) utilisait un cache hors ligne.
// Ce fichier vide ce cache et se désinstalle, pour que le sommaire s'affiche normalement.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((c) => c.navigate(c.url));
  })());
});
