module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://bento.me/petmansion',
        permanent: true,
      },
    ]
  },
}
