//** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  async redirects() {
    return [
      // 🔁 Redireciona todo o tráfego do domínio Vercel para o domínio principal
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'loesch-oraculo-site.vercel.app' }],
        destination: 'https://loescheoraculo.com/:path*',
        permanent: true, // 308 - redirect permanente
      },
    ];
  },
};

export default nextConfig;
