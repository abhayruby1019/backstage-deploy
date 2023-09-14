import {
  createRouter,
  providers,
  defaultAuthProviderFactories,
} from '@backstage/plugin-auth-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import {
  stringifyEntityRef,
  DEFAULT_NAMESPACE,
} from '@backstage/catalog-model';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    discovery: env.discovery,
    tokenManager: env.tokenManager,
    providerFactories: {
      ...defaultAuthProviderFactories,
      oauth2Proxy: providers.oauth2Proxy.create({
        signIn: {
          async resolver({ result }, ctx) {
            const name = result.getHeader('x-forwarded-email')
              || result.getHeader('x-forwarded-preferred-username')
              || result.getHeader('x-forwarded-user');
            if (!name) {
              console.log(result);
              throw new Error('Request did not contain a user')
            }
            const [localPart, domain] = name.split('@');
            // if (domain !== 'thoughtworks.com') {
            //   throw new Error(
            //     `Login failed, this email ${name} does not belong to the expected domain`,
            //   );
            // }
            const userEntity = stringifyEntityRef({
              kind: 'User',
              name: localPart,
              namespace: DEFAULT_NAMESPACE,
            });
            // return ctx.signInWithCatalogUser({
            //   entityRef: { name },
            // });
            return ctx.issueToken({
              claims: {
                sub: userEntity,
                ent: [userEntity],
              },
            });
          },
        },
      }),
    },
  });
}
