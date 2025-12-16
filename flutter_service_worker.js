'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4b9b27a33ad44050b0b6f2a865bcb3a5",
".git/config": "dadb12ab9c718929d20669ed5a4757b8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4f765fba34fd4001dc92c1883c2a4705",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9c43dacce7ce0b1e7e7d77796d9ed9b",
".git/logs/refs/heads/main": "749f6b5eb1c009c8c03f7c9453c24463",
".git/logs/refs/remotes/origin/main": "21b873ec95a5c9dc1d0df6607c7c6123",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/31fb32ac1662ec71989bf2988ebbe30f924070": "e6e128709f0bb961ad7a66653197586c",
".git/objects/04/056a09ce010cdc1e4be9821824acff9d66573f": "503491ed814ebd9994a1de810ef0320e",
".git/objects/05/f5a660001f80043ceeb06369150157d4f3254a": "c30a7bf8c684116cd191b3b209363182",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/09/83402575441fde290e5434eb4a83de0d67fcf8": "509bb023d300e09f60f81f7bb5c3e40a",
".git/objects/0a/218e9cddf89ad27ca08fb332c1f7100d393eb2": "e9293c7456c500b427b2c27890dd001c",
".git/objects/0c/bfe518789dcd4db1cc4f488666f6acb38a56d2": "45417937bd7e9f335d4d445d645f8a98",
".git/objects/0c/e749fd63d4e1c47a6291d00004e8172ac02721": "b8f7985029a88e234c14c14ca3a51da8",
".git/objects/10/d67df4259abda3891f3f8d5ea597b29e4b2071": "cf1100e8db417bbe5e8fc795682a7dae",
".git/objects/11/4c83114c481ba57217620349eb75e6acdab998": "a985ea0f23d9cb8a7050f9f2023705a8",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/ab8a67d95bdcd50f8a73f0fd0f8953787a25fe": "b1376a02dfc022720d9a2dbec1cd3327",
".git/objects/2c/96340fd52a0048402d02604ccc0344054a75f3": "60e353cf18cd928cc1fc91a74e22df0b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/38/e4f5fb324c07d555fe4969c2c660ee0f81314d": "4f660a27896f0ffd57cf207c9542918f",
".git/objects/3b/28b89a7f1a98e70dbd07dd2f6acf256d7fc4fb": "299713f366f1163ad8aaa2b9436e5110",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/44/905526c427f64c2dc3d22d56a9666c34b01355": "4d73e4ef56ffb19ada8f7dbcd0a21ae4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/f6da3f0697d1117836e84902cba1cfcb826f71": "676467c348cb58ca81f09327e1dcf3f3",
".git/objects/4c/f4ae3114637a0e3f1170b914ec2ed85231429b": "286c5946ea7a79eb9517c7311679dd43",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/0faa06b3331d4fe8660856f3fec7226dd114f0": "330d2b0b5f6e20ee86076e58f1912fc0",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/4a9d3963943de3d861523b5a93cc989ae3ca5f": "ce2963b0487679ae5f8695bb8c60a3a7",
".git/objects/67/19417a63e15099f879cfcffbdf575f03d38e66": "81709f7166cfbd5e9c347e923759da80",
".git/objects/67/53b7e869400ef5ad3358f73b7653af7c5a79f0": "01027b2f5d86897dc245ce39955173e1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/eb159a219c83a98134f0604b75387d29295221": "b3d31c1d226c27fdbd509009e83bc610",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/1a75b33e12174316febb061d5ee1bf2cbafb44": "20131575e3dfa2be0be1b7f91a43a38c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7914c9bff84a9ff55d07c44adfce3a63432c56": "0a91c691d8643e4663a72d623d686fa8",
".git/objects/8f/23475a378dd65efcb7cb2a644a9542d704707c": "75b3127857355173bcc115d99264d9bd",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/259fbfddce74ea5260e7577b4e338da21c0a75": "5bad1ea3956744e5004d50fb55b54d54",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/e74d6eba77e3463c4596226d80087527a5b073": "2a8a01ea5a23a67375813ab961e0be72",
".git/objects/9c/a645fbe6376d95eec5bf7de1117502e46e138f": "5b6e5cd2f8ec2c8c2c3e67e85f448939",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/0fcf6095dace271bbcac5511d24ef63c152db9": "3aa96c917e1e1b80bc61d81d8dc5679c",
".git/objects/9f/18442263dac00d794383824ff53afda90fe687": "51ab2102f54bd231e55665ceea008ea3",
".git/objects/a4/d665264fc64eeac0edab7390c81ec4b33dfac1": "b35f931395ef4e67c7c4dc6e006cab6b",
".git/objects/a6/77506dcaddec498d00b4b9745217ed31580bb2": "fdd84ebd435af53b65338b207a299998",
".git/objects/a7/5d65b03fec017260d29a5ef33ede7a47057a5f": "126ecc8bd79629e36e2ccbb8ab433e7d",
".git/objects/a9/5f02ffe9f19e12d0e8eb8aa7fe479a3f981dca": "322b42b01a55459e71fc8d9630778f9b",
".git/objects/ae/d8f792d9940a28daefc3eeabda04deec14ff75": "30231caef65b4a47051dae79c2c7c914",
".git/objects/b0/38ca195dfc087fd10f14ce0b032c8cedca24d1": "50cfc1b818bbaa330e6c3971cbd0f7d1",
".git/objects/b0/a4c438d7eb180fd185c12839c643e91044f60b": "1225af738094fde9414c1295af3b5d0d",
".git/objects/b5/e68b66fa53eb346940f081cbd8a36399325e5e": "13821e6b88a197247215ba28f6ebcb78",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/65838417e3b541000d23e9382f10e588c4b90d": "e4039e47c2990ef68a76769321a86607",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/063d5a2eb8bdbbf6b766d4ddf8ec0ed61f3944": "be7155a12c2faf63ad235b113fea1cca",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/f0733930371158b0f3b440642a276060314a20": "4bd103b5f11a15c6dae7de2a3f84590a",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cf/40bb0cc971ad394c9e2342ec2d8e0d5b95e343": "e63c092406c49effe52c0c5064eda4e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/315d6062f3838cf9bbd646d315a107c5158b07": "9bae93dfd032c1400eabaf311172902a",
".git/objects/dc/1c38ab2ad9d6860fad9fba2fe3fad663c61890": "780666955e9eb2b15cf1d6baaa609056",
".git/objects/e2/704eae6cacc2568aeeb311931b6363dcc594a4": "a6a728035e9ae68df812d301437948e7",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/6ed4cb47aa268996b3942ef724394bcc49ec99": "3bf58f557ba46ef261047cc4dcc1bc3f",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "a66fb2f4273d18ad93989142dd411707",
".git/refs/remotes/origin/main": "a66fb2f4273d18ad93989142dd411707",
"assets/AssetManifest.bin": "65c7f8e2ac6c6ddb027cc3f6aad21ad6",
"assets/AssetManifest.bin.json": "e08a4f523c2ce66a1b715b382457c201",
"assets/AssetManifest.json": "0695efc690bbb915ed322b6c43ca5bb4",
"assets/assets/images/badr_logo.png": "e59340d319a21e8919213d2ac95bc174",
"assets/assets/translations/ar.json": "ce138208cc795afc5af7a8e2892eacdb",
"assets/assets/translations/en.json": "c5598de1c079f434b375b27a1755c6b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eb434594dd4b67ae6d3b9a787fbe2be9",
"assets/NOTICES": "c54d8f3de62e219d8ad86daa037a4008",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "0a718441a81c595492cbdc072cc19c85",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a7908500fbc8974e3541d35471473ffe",
"/": "a7908500fbc8974e3541d35471473ffe",
"main.dart.js": "06d2c6f91938633555caee0209e0f11c",
"manifest.json": "2cca43533a827ce0f5dd8710697eb565",
"README.md": "5e5def3fd3e12efddacc2294d0319cf6",
"version.json": "e096a95c50c47cc3a6a74091fc06f4b1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
