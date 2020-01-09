import { KeycloakService } from 'keycloak-angular';

export function keycloakinitializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => keycloak.init(

        {
            config: {
                url: 'http://localhost/keycloak/auth',
                realm: 'iot',
                clientId: 'frontend'
            },
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false
            },
            enableBearerInterceptor: true,
            bearerExcludedUrls: ['/public'],
            bearerPrefix: 'Bearer'
        }
    );
}