import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config, { isServer }) => {
    config.resolve.alias['pages'] = './src/pages';
    return config;
  },
};

export default nextConfig;
