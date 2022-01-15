import * as Realm from 'realm-web'

const app = Realm.getApp('fullspinnaker-ydwol') // TODO move to config

export default async function useRealmFunctions(name, path, form) {
  const results = await app.currentUser?.functions[name](path, form)
  return {
    results,
  }
}
