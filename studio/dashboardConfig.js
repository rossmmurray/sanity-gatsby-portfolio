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
                  buildHookId: '5e9246de802ada118e8bccb1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-97ckp6bw',
                  apiId: '53b40b56-5444-4b66-895c-1903fa485e52'
                },
                {
                  buildHookId: '5e9246de973e3c22e2a9fda8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5c6s1n7g',
                  apiId: 'd95c839f-03ab-48d3-b11a-bb19f6043cb0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rossmmurray/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5c6s1n7g.netlify.com',
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
