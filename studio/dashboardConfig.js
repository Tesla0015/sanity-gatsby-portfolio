export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6186e287457cb4d6a67cfa14',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vc5y2nb3',
                  apiId: 'a22deb5b-64a3-4fd7-af1b-e243d61c7b21'
                },
                {
                  buildHookId: '6186e2873b832b9fd3569e79',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-drjvonqs',
                  apiId: '6a00ef56-79da-4610-b800-529e16e76114'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tesla0015/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-drjvonqs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
