/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/guest-pass',
        destination: '/files/guest-pass.pdf',
        permanent: true,
      },
      {
        source: '/medical-form',
        destination: '/files/medical.pdf',
        permanent: true,
      },
      {
        source: '/prospectus',
        destination: '/files/prospectus.pdf',
        permanent: true,
      },
      {
        source: '/donate',
        destination: 'https://hcb.hackclub.com/donations/start/viking-hacks',
        permanent: true,
      },
      {
        source: '/python',
        destination: 'https://forms.gle/xfqgW4Naupcxi2GU8',
        permanent: true,
      },

      {
        source: '/feedback',
        destination: 'https://forms.gle/ZWS9gU67MxZdQQTT9',
        permanent: true,
      },

      {
        source: '/greenlight',
        destination: 'https://share.greenlight.com/25619981',
        permanent: true,
      },

      {
        source: '/photos',
        destination: 'https://photos.app.goo.gl/xbdtsegKgpsz1Ytd9',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["upcdn.io", "replicate.delivery"],
  },
};
