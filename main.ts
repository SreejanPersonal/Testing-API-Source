import { serve } from "https://deno.land/std@0.184.0/http/server.ts";

const handler = async (request: Request): Promise<Response> => {
  const { pathname } = new URL(request.url);

  // Root endpoint
  if (pathname === "/") {
    return new Response("Welcome to my API!");
  }

  // Hello endpoint
  if (pathname === "/hello") {
    return new Response(JSON.stringify({
      message: "Hello, World!"
    }), {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  // 404 for everything else
  return new Response("Not Found", { status: 404 });
};

console.log("Server running on http://localhost:8000");
await serve(handler, { port: 8000 });