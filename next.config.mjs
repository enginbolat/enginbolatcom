/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://instagram.com/enginn.blt",
        permanent: false,
        basePath: false,
      },
      {
        source: "/spotify",
        destination: "https://open.spotify.com/user/ztio5fucs86aweqzu5exufjab",
        permanent: false,
        basePath: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/enginnblt",
        permanent: false,
        basePath: false,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@enginbolat",
        permanent: false,
        basePath: false,
      },
      {
        source: "/github",
        destination: "https://github.com/enginbolat",
        permanent: false,
        basePath: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/enginbolat/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/medium",
        destination: "https://medium.com/@engi.bolat",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
