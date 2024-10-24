import { defineStorage } from '@aws-amplify/backend'

export const storage = defineStorage({
  name: 'recipe-manager-bucket',
  access: (allow) => ({
    'recipe-manager/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete']),
    ],
  }),
})
