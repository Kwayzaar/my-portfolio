import sanityclient from '@sanity/client'
import { markChanged } from 'immer/dist/internal'

export default sanityClient({
  // also find PJ at manage.sanity.io
  projectId: "oc1i75ya",
  dataset: "production"
})