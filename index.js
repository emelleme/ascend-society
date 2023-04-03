import { Router } from 'itty-router'
const base = "http://localhost:3003"
const statusCode = 302

async function handleRedirect(request) {
  const url = new URL(request.url);
    let { pathname, search, hash } = url;
    const destinationURL = base + pathname + search + hash;
  return Response.redirect(destinationURL, statusCode)
}

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

const router = Router()

router
.get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = request => router.handle(request)