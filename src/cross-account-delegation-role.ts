import { Stack } from 'aws-cdk-lib';
import { IRole, Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface CrossAccountDelegationRoleProps {
  readonly organizationAccountID: string;
  readonly delegationResourceName: string;
}

export interface ICrossAccountDelegationRole {
  readonly role: IRole;
}

export class CrossAccountDelegationRole extends Construct {
  public readonly roleArn: string;
  public readonly role: IRole;

  constructor(
    scope: Construct,
    id: string,
    props: CrossAccountDelegationRoleProps
  ) {
    super(scope, id);

    this.roleArn = Stack.of(this).formatArn({
      region: '',
      service: 'iam',
      account: props.organizationAccountID,
      resource: 'role',
      resourceName: props.delegationResourceName,
    });

    this.role = Role.fromRoleArn(this, 'DelegationRole', this.roleArn);
  }
}
