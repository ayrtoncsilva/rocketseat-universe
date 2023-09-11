import { Router } from './scripts/router.js'

const router = new Router()

router.add("/", "index.html")
router.add("/universe", "./pages/universe.html")
router.add("/explore", "./pages/explore.html")
router.add("/404", "./pages/404.html")

window.onload = () => {
  router.handle()
  window.onpopstate = () => router.handle();
}
