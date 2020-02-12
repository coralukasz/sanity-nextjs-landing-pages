export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e43c695ddd8faafc13d38c3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d1uahj1c',
                  apiId: '9a222ef2-6877-427d-b3fb-359282b1a98f'
                },
                {
                  buildHookId: '5e43c69594b38492d2a676b9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-skq1eavz',
                  apiId: '446ec7a2-fccc-4c6b-adaf-bab4be984227'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coralukasz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-skq1eavz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
