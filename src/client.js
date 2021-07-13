import sanityClient from '@sanity/client'

export default sanityClient({
  // also find ProjId at manage.sanity.io
  projectId: "oc1i75ya",
  dataset: "production",
  apiVersion: '2021-07-13'
})