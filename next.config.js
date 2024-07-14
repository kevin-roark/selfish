/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/manikin', destination: '/manikin/index.html', permanent: false },
      { source: '/freelance', destination: '/freelance/index.html', permanent: false },
      { source: '/bird-sculpture', destination: '/bird-sculpture/index.html', permanent: false },
      { source: '/from-tony-rontinos', destination: '/from-tony-rontinos/index.html', permanent: false },
      { source: '/the-watcher', destination: '/the-watcher/index.html', permanent: false },
    ]
  },
}

module.exports = nextConfig
