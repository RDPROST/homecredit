/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// }
//
// module.exports = nextConfig

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/oapi",
        destination: "https://hcredit.websoft.ru/oapi"
      },
      {
        source: "/_wt/default",
        destination: "https://hcredit.websoft.ru/_wt/default"
      },
      {
        source: "/view_doc.html",
        destination: "https://hcredit.websoft.ru/view_doc.html"
      },
      {
        source: "/scripts",
        destination: "https://hcredit.websoft.ru/scripts"
      },
      {
        source: "/home",
        destination: "https://hcredit.websoft.ru/home"
      },
      {
        source: "/pp",
        destination: "https://hcredit.websoft.ru/pp"
      }
    ];
  };
  return {
    rewrites
  };
};