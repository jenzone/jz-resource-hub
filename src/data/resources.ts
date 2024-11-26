interface IResources {
  name: string
  categories: string[]
  description: string
  url: string
}

export const resources: IResources[] = [
  {
    name: 'Coolors',
    categories: ['color'],
    description:
      'A color scheme generator that allows you to create, save, and share color palettes.',
    url: 'https://coolors.co/',
  },
  {
    name: 'Tailwind CSS Colors',
    categories: ['color'],
    description: 'Customizing the default color palette for your project.',
    url: 'https://tailwindcss.com/docs/customizing-colors',
  },
  {
    name: 'My Mind',
    categories: ['productivity-tool', 'color'],
    description:
      'My Mind introduces an extension feature that provides a convenient and private space to save all your notes, bookmarks, inspirations, articles, and images. ',
    url: 'https://mymind.com/',
  },
  {
    name: 'Eraser',
    categories: ['productivity-tool', 'diagramming-tool'],
    description:
      'Eraser.io is a web app that lets you create and save docs and diagrams using markdown, diagram-as-code, and keyboard shortcuts.',
    url: 'https://www.eraser.io/',
  },
  {
    name: 'Lorem Ipsum',
    categories: ['generator'],
    description:
      'Quickly and easily generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!',
    url: 'https://loremipsum.io/generator',
  },
  {
    name: 'LearnSQL MySQL Cheatsheet',
    categories: ['cheatsheet'],
    description:
      'A comprehensive cheat sheet for MySQL, covering essential commands and syntax for database management.',
    url: 'https://learnsql.com/blog/mysql-cheat-sheet/mysql-cheat-sheet-a4.pdf',
  },
  {
    name: 'Icones',
    categories: ['icon'],
    description:
      'Icônes offers a wide range of icons in different styles and categories for all design needs.',
    url: 'https://icones.js.org/',
  },
  {
    name: 'React Icons',
    categories: ['icon'],
    description:
      'Include popular icons in your React projects easly with react-icons.',
    url: 'https://react-icons.github.io/react-icons/',
  },
  {
    name: 'Tailwind CSS Cheatsheet',
    categories: ['cheatsheet'],
    description:
      'Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!',
    url: 'https://www.creative-tim.com/twcomponents/cheatsheet/',
  },
  {
    name: 'Lucid Chart',
    categories: ['diagramming-tool'],
    description:
      'Create next-generation diagrams with AI, data, and automation in Lucidchart.',
    url: 'https://lucidchart.com',
  },
  {
    name: 'Font Joy',
    categories: ['font'],
    description: ' Mix and match different fonts for the perfect pairing.',
    url: 'https://fontjoy.com/',
  },
  {
    name: 'Git Cheat Sheets',
    categories: ['cheatsheet'],
    description:
      ' reference to frequently used Git commands in several languages. Learn more about Git and GitHub with guides, videos and other resources.',
    url: 'https://docs.github.com/en/get-started/getting-started-with-git/git-cheatsheet',
  },
  {
    name: 'Clerk',
    categories: ['authentication'],
    description:
      'Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.',
    url: 'https://clerk.com/',
  },
]
