// Gamla slóðin /hverfishringur/ er flutt á /spolur/.
// Þessi service worker skráir sig út og sendir opna glugga á nýja staðinn.
// (Skyndiminnið er sameiginlegt með /spolur/ og er því látið vera.)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  await self.registration.unregister();
  const cs = await self.clients.matchAll({ type: 'window' });
  cs.forEach((c) => c.navigate('/spolur/'));
})()));
