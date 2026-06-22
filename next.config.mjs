/** @type {import('next').NextConfig} */
const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || "https://app.setu.company";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // The marketing site owns the funnel; deep app routes live on the main platform.
    // /app/* and /dashboard convenience redirects send users to the GCP-hosted platform.
    return [
      { source: "/app", destination: `${APP_ORIGIN}/`, permanent: false },
      { source: "/dashboard", destination: `${APP_ORIGIN}/home`, permanent: false },
    ];
  },
};

export default nextConfig;
