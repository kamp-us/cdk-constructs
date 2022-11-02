import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'kampus',
  authorAddress: 'infra@kamp.us',
  authorOrganization: true,
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'kampus-cdk-constructs',
  repositoryUrl: 'https://github.com/kamp-us/cdk-constructs.git',
  description:
    'cdk constructs that are used to deploy kamp.us applications on aws',
  packageName: '@kampus/cdk-constructs',
  npmAccess: NpmAccess.PUBLIC,
  prerelease: 'beta',

  minNodeVersion: '16.14.2',

  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
    },
  },
  eslint: true,
  eslintOptions: {
    dirs: ['src'],
    devdirs: [],
    fileExtensions: ['.ts'],
    ignorePatterns: [
      '*.js',
      '!.projenrc.js',
      '*.d.ts',
      'node_modules/',
      '*.generated.ts',
      'coverage',
      '.projenrc.ts',
    ],
  },

  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
});
project.synth();
