module.exports = {
  siteMetadata: {
    title: 'Aalok Trivedi: U1/UX Designer',
    author: 'Aalok Trivedi',
    description: `Hi, I'm Aalok Trivedi. I’m a UI/UX designer, and I love solving people-problems with simple, elegant, and beautiful solutions.`,
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `aaloktrivedi`,
        accessToken: `MC5XN0pwMlJBQUFDY0FRSGVl.GXhLL34eVzXvv73vv71a77-977-9U--_vRzvv73vv73vv73vv73vv73vv73vv73vv70w77-977-977-977-9Aw4P`,
      },
    },
  ],
}
