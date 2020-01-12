module.exports = {
  siteMetadata: {
    title: `useAuth`,
    description: `Add authentication to your React app.`,
    twitter: "@swizec",
    image: "https://twitter.com/Swizec/photo"
  },

  plugins: [
    "gatsby-theme-docz",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `useAuth!`,
        short_name: `useAuth!`,
        start_url: `/`,

        icon: `src/images/Swizec2.png`
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
