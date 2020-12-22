module.exports = {
  siteMetadata: {
    title: "Angie Rodriguez - Front End Developer",
    description: "Portfolio and blog website of Angie Rodriguez",
    url: "https://angierodriguez.dev",
    image: "https://angierodriguez.dev/images/profile-pic-1.jpg",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "contents/blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "contents/portfolio",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/contents/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Angie Rodriguez Developer Website",
        short_name: "Angie Rodriguez Dev",
        start_url: "/",
        background_color: "#f6f2ff",
        theme_color: "#f6f2ff",
        display: "standalone",
        icon: "static/images/icon.ico",
        crossOrigin: "use-credentials",
      },
    },
    "gatsby-plugin-offline",
  ],
};
