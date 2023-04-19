<template>
  <div></div>
</template>

<script>
import { commonPageFields, imageWithAlt } from './cms_helpers'
export default {
  layout: 'empty',
  mounted() {
    if (process.client) {
      window.CMS_MANUAL_INIT = true
      const { init } = require('netlify-cms')

      init({
        config: {
          backend: {
            name: 'git-gateway',
          },
          local_backend: true,
          load_config_file: false,
          media_folder: 'static/uploads',
          public_folder: '/uploads',
          collections: [
            {
              label: 'Indstillinger & komponenter',
              name: 'globals',
              editor: {
                preview: false,
              },
              files: [
                {
                  label: 'Navbar',
                  name: 'navbar',
                  file: 'content/globals/navbar.md',
                  fields: [
                    {
                      label: 'Navbar color',
                      name: 'navbar_color',
                      widget: 'color',
                      default: '#ffffff',
                      hint: 'Default color #ffffff',
                      enableAlpha: true,
                    },
                    {
                      label: 'Text color',
                      name: 'text_color',
                      widget: 'color',
                      default: '#000000',
                      hint: 'Default color #000000',
                      enableAlpha: true,
                    },
                    {
                      label: 'Show products in navbar',
                      name: 'show_products_navbar',
                      widget: 'boolean',
                      default: true,
                    },
                    {
                      label: 'Show design in navbar',
                      name: 'show_design_navbar',
                      widget: 'boolean',
                      default: true,
                    },
                    {
                      label: 'Show press in navbar',
                      name: 'show_press_navbar',
                      widget: 'boolean',
                      default: true,
                    },
                    {
                      label: 'Show stories in navbar',
                      name: 'show_stories_navbar',
                      widget: 'boolean',
                      default: true,
                    },
                  ],
                },
                {
                  label: 'SoMe',
                  name: 'company',
                  file: 'content/globals/soMe.md',
                  fields: [
                    {
                      label: 'Activate Email icon',
                      name: 'mailIconBool',
                      widget: 'boolean',
                    },
                    {
                      label: 'Email',
                      name: 'emailLink',
                      widget: 'string',
                    },
                    {
                      label: 'Activate LinkedIn icon',
                      name: 'linkedInIconBool',
                      widget: 'boolean',
                    },
                    {
                      label: 'Link to LinkedIn',
                      name: 'linkedInLink',
                      widget: 'string',
                    },
                    {
                      label: 'Activate Vimeo icon',
                      name: 'vimeoIconBool',
                      widget: 'boolean',
                    },
                    {
                      label: 'Link to Vimeo',
                      name: 'vimeoLink',
                      widget: 'string',
                    },
                    {
                      label: 'Activate YouTube icon',
                      name: 'youTubeIconBool',
                      widget: 'boolean',
                    },
                    {
                      label: 'Link to YouTube',
                      name: 'youTubeLink',
                      widget: 'string',
                    },
                    {
                      label: 'Activate Instagram icon',
                      name: 'instaIconBool',
                      widget: 'boolean',
                    },
                    {
                      label: 'Link to Instagram',
                      name: 'instaLink',
                      widget: 'string',
                    },
                  ],
                },
                {
                  label: 'Product Order',
                  name: 'order',            
                  file: 'content/globals/productOrder.md',
                  fields: [
                    {
                      label: 'Order',
                      name: 'order',
                      widget: 'list',
                      fields: [
                        {
                          label: 'Title',
                          name: 'title',
                          widget: 'relation',
                          collection: 'products',
                          search_fields: ['title'],
                          value_field: 'title'
                        }
                      ]
                    }
                  ]
                },                
                {
                  label: 'Footer informations',
                  name: 'footerInformation',
                  file: 'content/globals/footerinformation.md',
                  fields: [
                    {
                      label: 'Company name',
                      name: 'company_name',
                      widget: 'string',
                    },
                    {
                      label: 'Company industry',
                      name: 'company_industry',
                      widget: 'string',
                    },
                    {
                      label: 'Company location',
                      name: 'company_location',
                      widget: 'string',
                    },
                    {
                      label: 'Email',
                      name: 'email',
                      widget: 'string',
                    },
                    {
                      label: 'Phone',
                      name: 'phone',
                      widget: 'string',
                    },
                    // {
                    //   label: 'Portfolio',
                    //   name: 'portfolio',
                    //   widget: 'file',
                    //   media_folder: '/static/uploads/documents',
                    //   public_folder: '/uploads/documents',
                    // },
                    // {
                    //   label: 'CV',
                    //   name: 'cv',
                    //   widget: 'file',
                    //   media_folder: '/static/uploads/documents',
                    //   public_folder: '/uploads/documents',
                    // },
                    {
                      label: 'Footer link 1',
                      name: 'footerlink1',
                      widget: 'object',
                      fields: [
                        { label: 'Link name', name: 'linkname', widget: 'string' },
                        { label: 'Link Shown', name: 'displayed', widget: 'boolean' },
                        { label: 'File', name: 'file', widget: 'file', media_folder: '/static/uploads/documents', public_folder: '/uploads/documents' }
                      ]
                    },
                    {
                      label: 'Footer link 2',
                      name: 'footerlink2',
                      widget: 'object',
                      fields: [
                        { label: 'Link name', name: 'linkame', widget: 'string' },
                        { label: 'Link Shown', name: 'displayed', widget: 'boolean' },
                        { label: 'File', name: 'file', widget: 'file', media_folder: '/static/uploads/documents', public_folder: '/uploads/documents' }
                      ]
                    },               
                    {
                      label: 'Credit list first column',
                      name: 'credit_list',
                      widget: 'list',
                      label_singular: 'credit',
                      summary: '{{fields.credit_headline}}',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Credit headline',
                          name: 'credit_headline',
                          widget: 'string',
                        },
                        {
                          label: 'Credit names',
                          name: 'credit_names',
                          widget: 'list',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Name',
                              name: 'name',
                              widget: 'string',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Credit list second column',
                      name: 'credit_list2',
                      widget: 'list',
                      required: false,
                      label_singular: 'credit',
                      summary: '{{fields.credit_headline}}',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Credit headline',
                          name: 'credit_headline',
                          widget: 'string',
                        },
                        {
                          label: 'Credit names',
                          name: 'credit_names',
                          widget: 'list',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Name',
                              name: 'name',
                              widget: 'string',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Cookiepolitik',
                  name: 'cookiepolicy',
                  file: 'content/globals/cookiepolicy.md',
                  fields: [
                    {
                      label: 'CookiePolitik',
                      name: 'body',
                      widget: 'markdown',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Pages',
              name: 'pages',
              editor: {
                preview: false,
              },
              files: [
                {
                  label: 'Front Page',
                  name: 'index',
                  file: 'content/pages/index.md',
                  collapsed: true,
                  fields: [
                    ...commonPageFields,
                    {
                      label: 'Hero',
                      name: 'hero',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Hero Heading',
                          name: 'hero_heading',
                          widget: 'string',
                        },

                        ...imageWithAlt('Hero billede', 'hero_image'),
                      ],
                    },
                    {
                      label: 'Left Column',
                      name: 'left',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'English section',
                          name: 'english_section',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'English',
                              name: 'english',
                              widget: 'markdown',
                            },
                            {
                              label: 'English Button Label',
                              name: 'english_btn_label',
                              widget: 'string',
                            },
                            {
                              label: 'English Button URL',
                              name: 'english_btn_url',
                              widget: 'string',
                            },
                            {
                              label: 'Quote',
                              name: 'quote',
                              widget: 'markdown',
                            },
                          ],
                        },

                        {
                          label: 'Japanese section',
                          name: 'japanese_section',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Japanese',
                              name: 'japanese',
                              widget: 'markdown',
                            },
                            {
                              label: 'Japanese Button Label',
                              name: 'japanese_btn_label',
                              widget: 'string',
                            },
                            {
                              label: 'Japanese Button URL',
                              name: 'japanese_btn_url',
                              widget: 'string',
                            },
                          ],
                        },

                        {
                          label: 'Buttons',
                          name: 'btns',
                          widget: 'list',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Label',
                              name: 'label',
                              widget: 'string',
                            },
                            {
                              label: 'Link',
                              name: 'url',
                              widget: 'string',
                            },
                          ],
                        },
                        {
                          label: 'My process',
                          name: 'process',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Heading',
                              name: 'heading',
                              widget: 'string',
                            },
                            {
                              label: 'Content',
                              name: 'body',
                              widget: 'markdown',
                            },
                            {
                              label: 'Video',
                              name: 'video',
                              widget: 'file',
                            },
                            {
                              label: 'Label',
                              name: 'label',
                              widget: 'string',
                            },
                            {
                              label: 'Link',
                              name: 'url',
                              widget: 'string',
                            },
                          ],
                        },

                        {
                          label: 'Stories',
                          name: 'stories',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Heading',
                              name: 'heading',
                              widget: 'string',
                            },

                            {
                              label: 'Story',
                              name: 'story',
                              widget: 'list',
                              collapsed: true,
                              summary: '{{fields.heading}}',
                              fields: [
                                {
                                  label: 'Heading',
                                  name: 'heading',
                                  widget: 'string',
                                },
                                {
                                  label: 'Show on Index',
                                  name: 'show',
                                  widget: 'boolean',
                                },

                                {
                                  label: 'Images',
                                  name: 'images',
                                  widget: 'list',
                                  collapsed: true,
                                  fields: [...imageWithAlt('Billede', 'image')],
                                },
                                {
                                  label: 'Body',
                                  name: 'body',
                                  widget: 'markdown',
                                },
                                {
                                  label: 'Label',
                                  name: 'label',
                                  widget: 'string',
                                },
                                {
                                  label: 'Link',
                                  name: 'url',
                                  widget: 'string',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'right Column',
                      name: 'right',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Products Column 1',
                          name: 'products_1',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Product',
                              name: 'product',
                              widget: 'list',
                              collapsed: true,
                              fields: [
                                {
                                  label: 'Title',
                                  name: 'title',
                                  widget: 'string',
                                },
                                {
                                  label: 'Show on Index',
                                  name: 'show',
                                  widget: 'boolean',
                                },

                                ...imageWithAlt('Image', 'image'),

                                {
                                  label: 'Description',
                                  name: 'body',
                                  widget: 'markdown',
                                },

                                {
                                  label: 'Link',
                                  name: 'url',
                                  widget: 'string',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Products Column 2',
                          name: 'products_2',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Product',
                              name: 'product',
                              widget: 'list',
                              collapsed: true,
                              fields: [
                                {
                                  label: 'Title',
                                  name: 'title',
                                  widget: 'string',
                                },
                                {
                                  label: 'Show on Index',
                                  name: 'show',
                                  widget: 'boolean',
                                },

                                ...imageWithAlt('Image', 'image'),

                                {
                                  label: 'Description',
                                  name: 'body',
                                  widget: 'markdown',
                                },

                                {
                                  label: 'Link',
                                  name: 'url',
                                  widget: 'string',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Designer',
                  name: 'designer',
                  file: 'content/pages/designer.md',
                  fields: [
                    ...commonPageFields,
                    {
                      label: 'Hero',
                      name: 'hero',
                      widget: 'object',

                      fields: [
                        {
                          label: 'Hero Heading',
                          name: 'hero_heading',
                          widget: 'string',
                          required: false,
                        },

                        ...imageWithAlt('Hero billede', 'hero_image'),
                      ],
                    },
                    {
                      label: 'Left Column',
                      name: 'left',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Section 1',
                          name: 'section1',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'English',
                              name: 'english',
                              widget: 'markdown',
                            },
                            {
                              label: 'Japanese',
                              name: 'japanese',
                              widget: 'markdown',
                            },
                          ],
                        },
                        {
                          label: 'Quote',
                          name: 'quote',
                          widget: 'markdown',
                        },
                        {
                          label: 'Section 2',
                          name: 'section2',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'English',
                              name: 'english',
                              widget: 'markdown',
                            },
                            {
                              label: 'Japanese',
                              name: 'japanese',
                              widget: 'markdown',
                            },
                          ],
                        },

                        {
                          label: 'Buttons',
                          name: 'btns',
                          widget: 'list',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Label',
                              name: 'label',
                              widget: 'string',
                            },
                            {
                              label: 'Link',
                              name: 'url',
                              widget: 'string',
                            },
                          ],
                        },
                        {
                          label: 'Quote 2',
                          name: 'quote2',
                          widget: 'markdown',
                        },
                      ],
                    },
                    {
                      label: 'Right',
                      name: 'right',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Heading',
                          name: 'heading',
                          widget: 'string',
                        },
                        {
                          label: 'Content',
                          name: 'body',
                          widget: 'markdown',
                        },

                        {
                          label: 'Videos and media',
                          name: 'videos',
                          widget: 'list',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Title',
                              name: 'title',
                              widget: 'string',
                            },
                            {
                              label: 'Image placeholder',
                              name: 'placeholderImage',
                              widget: 'boolean',
                            },
                            ...imageWithAlt('Image', 'image'),
                            {
                              label: 'Video',
                              name: 'video',
                              widget: 'file',
                            },

                            {
                              label: 'Description',
                              name: 'body',
                              widget: 'markdown',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Press',
                  name: 'press',
                  file: 'content/pages/press.md',
                  fields: [
                    ...commonPageFields,

                    {
                      label: 'Collaborators',
                      name: 'collaborators',
                      widget: 'list',
                      fields: [
                        {
                          label: 'Name',
                          name: 'name',
                          widget: 'markdown',
                        },
                      ],
                    },
                    {
                      label: 'Grants',
                      name: 'grants',
                      widget: 'list',
                      fields: [
                        {
                          label: 'Type',
                          name: 'type',
                          widget: 'string',
                        },
                        {
                          label: 'Year',
                          name: 'year',
                          widget: 'string',
                        },
                        {
                          label: 'Institution',
                          name: 'institution',
                          widget: 'string',
                        },
                      ],
                    },
                    {
                      label: 'Awards',
                      name: 'awards',
                      widget: 'list',
                      fields: [
                        {
                          label: 'Type',
                          name: 'type',
                          widget: 'string',
                        },
                        {
                          label: 'Year',
                          name: 'year',
                          widget: 'string',
                        },
                        {
                          label: 'Institution',
                          name: 'institution',
                          widget: 'string',
                        },
                      ],
                    },
                    {
                      label: 'Publications',
                      name: 'publications',
                      widget: 'list',
                      fields: [
                        {
                          label: 'Title',
                          name: 'title',
                          widget: 'string',
                        },
                        {
                          label: 'Link',
                          name: 'link',
                          widget: 'string',
                          required: false,
                        },
                        ...imageWithAlt('Image', 'image'),
                      ],
                    },
                  ],
                },
                {
                  label: 'Stories',
                  name: 'stories',
                  file: 'content/pages/stories.md',
                  fields: [
                    ...commonPageFields,
                    {
                      label: 'Posts',
                      name: 'posts',
                      widget: 'list',
                      collapsed: true,
                      summary: '{{fields.title}}',
                      label_singular: 'post',
                      fields: [
                        {
                          label: 'Title',
                          name: 'title',
                          widget: 'string',
                        },
                        {
                          label: 'Tags',
                          name: 'tags',
                          widget: 'relation',
                          collection: 'tags',

                          search_fields: ['name'],
                          value_field: 'name',
                          display_fields: ['name'],
                          multiple: true,
                        },

                        {
                          label: 'English',
                          name: 'english',
                          collapsed: true,

                          summary: 'English',
                          widget: 'object',
                          fields: [
                            {
                              label: 'Title',
                              name: 'title',
                              widget: 'string',
                            },
                            {
                              label: 'Subtitle',
                              name: 'subtitle',
                              widget: 'string',
                            },
                            {
                              label: 'Body',
                              name: 'body',
                              widget: 'markdown',
                            },
                          ],
                        },
                        {
                          label: 'Japanese',
                          name: 'japanese',
                          widget: 'object',
                          collapsed: true,
                          fields: [
                            {
                              label: 'Title',
                              name: 'title',
                              widget: 'string',
                            },
                            {
                              label: 'Subtitle',
                              name: 'subtitle',
                              widget: 'string',
                            },
                            {
                              label: 'Body',
                              name: 'body',
                              widget: 'markdown',
                            },
                          ],
                        },
                        {
                          label: 'Images',
                          name: 'images',
                          widget: 'list',
                          collapsed: true,
                          minimize_collapsed: true,
                          fields: [...imageWithAlt('Image', 'image')],
                        },
                      ],
                    },
                    {
                      label: 'Films',
                      name: 'films',
                      widget: 'list',
                      fields: [
                        {
                          label: 'Title',
                          name: 'title',
                          widget: 'string',
                        },
                        {
                          label: 'Year',
                          name: 'year',
                          widget: 'string',
                        },
                        {
                          label: 'Video',
                          name: 'video',
                          widget: 'file',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Page colors',
                  name: 'pageColors',
                  file: 'content/pages/colors.md',
                  fields: [
                    {
                      label: 'Front Page',
                      name: 'frontPage',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Text color',
                          name: 'text_color',
                          widget: 'color',
                          default: '#000000',
                          hint: 'Default color #000000',
                        },
                        {
                          label: 'Left color',
                          name: 'leftColor',
                          widget: 'color',
                          allowInput: true,
                        },
                        {
                          label: 'Right color',
                          name: 'rightColor',
                          widget: 'color',
                          allowInput: true,
                        },
                      ],
                    },
                    {
                      label: 'Products Page',
                      name: 'productsPage',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Text color',
                          name: 'text_color',
                          widget: 'color',
                          default: '#000000',
                          hint: 'Default color #000000',
                        },
                        {
                          label: 'Left color',
                          name: 'leftColor',
                          widget: 'color',
                          allowInput: true,
                        },
                        {
                          label: 'Right color',
                          name: 'rightColor',
                          widget: 'color',
                          allowInput: true,
                        },
                      ],
                    },
                    {
                      label: 'Designer Page',
                      name: 'designerPage',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Text color',
                          name: 'text_color',
                          widget: 'color',
                          default: '#000000',
                          hint: 'Default color #000000',
                        },
                        {
                          label: 'Left color',
                          name: 'leftColor',
                          widget: 'color',
                          allowInput: true,
                        },
                        {
                          label: 'Right color',
                          name: 'rightColor',
                          widget: 'color',
                          allowInput: true,
                        },
                      ],
                    },
                    {
                      label: 'Press Page',
                      name: 'pressPage',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Text color',
                          name: 'text_color',
                          widget: 'color',
                          default: '#000000',
                          hint: 'Default color #000000',
                        },
                        {
                          label: 'Left color',
                          name: 'leftColor',
                          widget: 'color',
                          allowInput: true,
                        },
                        {
                          label: 'Right color',
                          name: 'rightColor',
                          widget: 'color',
                          allowInput: true,
                        },
                      ],
                    },
                    {
                      label: 'Stories Page',
                      name: 'storiesPage',
                      widget: 'object',
                      collapsed: true,
                      fields: [
                        {
                          label: 'Text color',
                          name: 'text_color',
                          widget: 'color',
                          default: '#000000',
                          hint: 'Default color #000000',
                        },
                        {
                          label: 'Left color',
                          name: 'leftColor',
                          widget: 'color',
                          allowInput: true,
                        },
                        {
                          label: 'Right color',
                          name: 'rightColor',
                          widget: 'color',
                          allowInput: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: 'Products',
              name: 'products',
              editor: {
                preview: false,
              },
              label_singular: 'Product',
              folder: 'content/products',
              create: true,
              slug: '{{slug}}',
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                  hint: 'This will end up being the permanent ending of this products URL',
                },
                { label: 'Subtitle', name: 'subtitle', widget: 'string' },

                {
                  label: 'SEO Title',
                  name: 'seo_title',
                  widget: 'string',
                },
                {
                  label: 'Product tags',
                  name: 'product_tags',
                  widget: 'relation',
                  collection: 'product_tags',
                  search_fields: ['name'],
                  value_field: 'name',
                  display_fields: ['name'],
                  multiple: true,
                },
                {
                  label: 'Background color',
                  name: 'product_color',
                  widget: 'color',
                  default: '#E0CE6A',
                  hint: 'Default color #E0CE6A',
                },
                {
                  label: 'SEO Description',
                  name: 'seo_description',
                  widget: 'text',
                },
                {
                  label: 'Details',
                  name: 'details',
                  collapsed: true,
                  widget: 'list',
                  fields: [
                    {
                      label: 'Heading',
                      name: 'heading',
                      widget: 'string',
                    },
                    {
                      label: 'Content',
                      name: 'content',
                      widget: 'markdown',
                    },
                  ],
                },
                {
                  label: 'Vector images',
                  name: 'vector',
                  collapsed: true,
                  widget: 'list',
                  hint: 'For best result please only upload svg. or png.',
                  fields: [...imageWithAlt('Image', 'image')],
                  optional: true,
                },
                { label: 'Featured Image', name: 'image', widget: 'image' },
                {
                  label: 'Videos',
                  name: 'videos',
                  collapsed: true,
                  widget: 'list',
                  summary: '{{fields.youTubeVideoLink}} - {{fields.video}}',
                  fields: [
                    {
                      label: 'YouTube link',
                      name: 'videoType',
                      widget: 'boolean',
                      hint: 'Remember to provide link',
                    },
                    {
                      label: 'YouTube video link',
                      name: 'youTubeVideoLink',
                      widget: 'string',
                      required: false,
                    },
                    {
                      label: 'Video',
                      name: 'video',
                      widget: 'file',
                      required: false,
                    },
                  ],
                },
                {
                  label: 'Images',
                  name: 'images',
                  collapsed: true,
                  widget: 'list',
                  fields: [...imageWithAlt('Image', 'image')],
                },
                {
                  label: 'Process Video',
                  name: 'process_video',
                  collapsed: true,
                  widget: 'object',
                  summary: '{{fields.youTubeVideoLink}} - {{fields.video}}',
                  fields: [
                    {
                      label: 'Add video to page',
                      name: 'add_video',
                      widget: 'boolean',
                      hint: 'A video for the top of the process section',
                    },
                    {
                      label: 'YouTube link',
                      name: 'videoType',
                      widget: 'boolean',
                      hint: 'Remember to provide link',
                    },
                    {
                      label: 'YouTube video link',
                      name: 'youTubeVideoLink',
                      widget: 'string',
                      required: false,
                    },
                    {
                      label: 'Video',
                      name: 'video',
                      widget: 'file',
                      required: false,
                    },
                  ],
                },
                {
                  label: 'Process',
                  name: 'process',
                  collapsed: true,
                  widget: 'list',
                  fields: [...imageWithAlt('Image', 'image')],
                },
                { label: 'English', name: 'english', widget: 'markdown' },
                { label: 'Japanese', name: 'japanese', widget: 'markdown' },
              ],
            },
            {
              name: 'tags',
              label: 'Tag',
              folder: 'content/tags',
              create: true,
              slug: '{{slug}}',
              fields: [{ label: 'Tag name', name: 'name', widget: 'string' }],
            },
            {
              name: 'product_tags',
              label: 'Product tag',
              folder: 'content/product_tags',
              create: true,
              slug: '{{slug}}',
              fields: [{ label: 'Tag name', name: 'name', widget: 'string' }],
            },
          ],
        },
      })
    }
  },
}
</script>
<style lang="scss">
h2 {
  &:after {
    background: transparent;
  }
}
</style>
