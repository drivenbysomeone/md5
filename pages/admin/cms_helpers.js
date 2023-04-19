export const commonPageFields = [

  {
    label: 'Meta Titel',
    name: 'meta_title',
    widget: 'string',
  },
  {
    label: 'Meta Beskrivelse',
    name: 'meta_description',
    widget: 'text',
  },
]

export const imageWithAlt = (label, name) => {
  return [
    { label, name, widget: 'image', required: false },
    {
      label: `${label} Alt tekst`,
      name: `${name}_alt`,
      widget: 'string',
      required: false
    },
  ]
}
