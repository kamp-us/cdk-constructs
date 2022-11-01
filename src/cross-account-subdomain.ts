import {
  CertificateValidation,
  Certificate,
} from 'aws-cdk-lib/aws-certificatemanager';
import {
  PublicHostedZone,
  CrossAccountZoneDelegationRecord,
} from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import { ICrossAccountDelegationRole } from './cross-account-delegation-role';

export interface CrossAccountSubdomainProps {
  readonly subdomain: string;
  readonly rootDomain: string;
  readonly delegationRole: ICrossAccountDelegationRole;
}

export class CrossAccountSubdomain extends Construct {
  public readonly hostedZone: PublicHostedZone;
  public readonly certificate: Certificate;

  constructor(scope: Construct, id: string, props: CrossAccountSubdomainProps) {
    super(scope, id);

    const domainName = `${props.subdomain}.${props.rootDomain}`;

    this.hostedZone = new PublicHostedZone(this, 'HostedZone', {
      zoneName: domainName,
    });

    new CrossAccountZoneDelegationRecord(
      this,
      'CrossAccountZoneDelegationRecord',
      {
        delegatedZone: this.hostedZone,
        parentHostedZoneName: props.rootDomain,
        delegationRole: props.delegationRole.role,
      }
    );

    this.certificate = new Certificate(this, 'DomainCertificate', {
      domainName: domainName,
      validation: CertificateValidation.fromDns(this.hostedZone),
    });
  }
}
