import "./lib/error-capture";

import { renderErrorPage } from "./lib/error-page";

type StaticAssetsEnv = {
  ASSETS?: {
    fetch: (request: Request) => Promise<Response> | Response;
  };
};

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: StaticAssetsEnv) {
    try {
      if (env.ASSETS) {
        return await env.ASSETS.fetch(request);
      }

      return new Response("Static asset binding is not configured.", {
        status: 500,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
