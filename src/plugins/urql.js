import urql, { createClient } from '@urql/vue'
import app from 'vue'
import * as Realm from 'realm-web'

const appRealm = Realm.getApp('fullspinnaker-ydwol') // TODO move to config

const getToken = async() => {
  if (!appRealm.currentUser)
    await appRealm.logIn(Realm.Credentials.anonymous())
  else
    await appRealm.currentUser.refreshToken
}

app.use(urql, createClient({
  url: 'https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/fullspinnaker-ydwol/graphql', // TODO move to config
  fetchOptions: () => {
    const token = getToken()
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  },
}))
