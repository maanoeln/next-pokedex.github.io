import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/next-pokedex',
  images: {
    domains: ['assets.pokemon.com'],
  },
};

export default nextConfig;
