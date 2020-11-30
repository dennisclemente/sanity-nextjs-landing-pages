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
                  buildHookId: '5fc452cc330a588c01ac456f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xgt8f3gv',
                  apiId: '1fdddce8-ee16-4d88-bbe9-b5f01f7b8deb'
                },
                {
                  buildHookId: '5fc452cdda660a34de4ad3af',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-no65mmmp',
                  apiId: '9e00b6b0-c124-4622-990d-468aa012ea07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dennisclemente/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-no65mmmp.netlify.app', category: 'apps'}
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
