const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'usirin',
  authorAddress: 'umutsirin1@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-constructs',
  repositoryUrl: 'https://github.com/usirin/cdk-constructs.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();