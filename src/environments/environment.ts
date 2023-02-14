// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // Live
  // backendUrl: 'https://dev.pixtar.ae:5005',
  // baseUrl: 'https://www.3dotscreatives.com',

  // Local
  backendUrl: 'http://localhost:3000',
  baseUrl: 'http://localhost:4200',

  recaptcha_key: '6Le_lT4cAAAAAK9VEk4nEBoKy0ydYrE-P9A_wj2U',
};
