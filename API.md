# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CrossAccountDelegationRole <a name="CrossAccountDelegationRole" id="@kampus/cdk-constructs.CrossAccountDelegationRole"></a>

#### Initializers <a name="Initializers" id="@kampus/cdk-constructs.CrossAccountDelegationRole.Initializer"></a>

```typescript
import { CrossAccountDelegationRole } from '@kampus/cdk-constructs'

new CrossAccountDelegationRole(scope: Construct, id: string, props: CrossAccountDelegationRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRole.Initializer.parameter.props">props</a></code> | <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRoleProps">CrossAccountDelegationRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kampus/cdk-constructs.CrossAccountDelegationRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kampus/cdk-constructs.CrossAccountDelegationRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kampus/cdk-constructs.CrossAccountDelegationRole.Initializer.parameter.props"></a>

- *Type:* <a href="#@kampus/cdk-constructs.CrossAccountDelegationRoleProps">CrossAccountDelegationRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@kampus/cdk-constructs.CrossAccountDelegationRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kampus/cdk-constructs.CrossAccountDelegationRole.isConstruct"></a>

```typescript
import { CrossAccountDelegationRole } from '@kampus/cdk-constructs'

CrossAccountDelegationRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kampus/cdk-constructs.CrossAccountDelegationRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRole.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRole.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@kampus/cdk-constructs.CrossAccountDelegationRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `role`<sup>Required</sup> <a name="role" id="@kampus/cdk-constructs.CrossAccountDelegationRole.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@kampus/cdk-constructs.CrossAccountDelegationRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---


### CrossAccountSubdomain <a name="CrossAccountSubdomain" id="@kampus/cdk-constructs.CrossAccountSubdomain"></a>

#### Initializers <a name="Initializers" id="@kampus/cdk-constructs.CrossAccountSubdomain.Initializer"></a>

```typescript
import { CrossAccountSubdomain } from '@kampus/cdk-constructs'

new CrossAccountSubdomain(scope: Construct, id: string, props: CrossAccountSubdomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomain.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomain.Initializer.parameter.props">props</a></code> | <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomainProps">CrossAccountSubdomainProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kampus/cdk-constructs.CrossAccountSubdomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kampus/cdk-constructs.CrossAccountSubdomain.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kampus/cdk-constructs.CrossAccountSubdomain.Initializer.parameter.props"></a>

- *Type:* <a href="#@kampus/cdk-constructs.CrossAccountSubdomainProps">CrossAccountSubdomainProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomain.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@kampus/cdk-constructs.CrossAccountSubdomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kampus/cdk-constructs.CrossAccountSubdomain.isConstruct"></a>

```typescript
import { CrossAccountSubdomain } from '@kampus/cdk-constructs'

CrossAccountSubdomain.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kampus/cdk-constructs.CrossAccountSubdomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomain.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomain.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.PublicHostedZone</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@kampus/cdk-constructs.CrossAccountSubdomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@kampus/cdk-constructs.CrossAccountSubdomain.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@kampus/cdk-constructs.CrossAccountSubdomain.property.hostedZone"></a>

```typescript
public readonly hostedZone: PublicHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.PublicHostedZone

---


## Structs <a name="Structs" id="Structs"></a>

### CrossAccountDelegationRoleProps <a name="CrossAccountDelegationRoleProps" id="@kampus/cdk-constructs.CrossAccountDelegationRoleProps"></a>

#### Initializer <a name="Initializer" id="@kampus/cdk-constructs.CrossAccountDelegationRoleProps.Initializer"></a>

```typescript
import { CrossAccountDelegationRoleProps } from '@kampus/cdk-constructs'

const crossAccountDelegationRoleProps: CrossAccountDelegationRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRoleProps.property.delegationResourceName">delegationResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountDelegationRoleProps.property.organizationAccountID">organizationAccountID</a></code> | <code>string</code> | *No description.* |

---

##### `delegationResourceName`<sup>Required</sup> <a name="delegationResourceName" id="@kampus/cdk-constructs.CrossAccountDelegationRoleProps.property.delegationResourceName"></a>

```typescript
public readonly delegationResourceName: string;
```

- *Type:* string

---

##### `organizationAccountID`<sup>Required</sup> <a name="organizationAccountID" id="@kampus/cdk-constructs.CrossAccountDelegationRoleProps.property.organizationAccountID"></a>

```typescript
public readonly organizationAccountID: string;
```

- *Type:* string

---

### CrossAccountSubdomainProps <a name="CrossAccountSubdomainProps" id="@kampus/cdk-constructs.CrossAccountSubdomainProps"></a>

#### Initializer <a name="Initializer" id="@kampus/cdk-constructs.CrossAccountSubdomainProps.Initializer"></a>

```typescript
import { CrossAccountSubdomainProps } from '@kampus/cdk-constructs'

const crossAccountSubdomainProps: CrossAccountSubdomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomainProps.property.delegationRole">delegationRole</a></code> | <code><a href="#@kampus/cdk-constructs.ICrossAccountDelegationRole">ICrossAccountDelegationRole</a></code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomainProps.property.rootDomain">rootDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomainProps.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kampus/cdk-constructs.CrossAccountSubdomainProps.property.certificateRegion">certificateRegion</a></code> | <code>string</code> | *No description.* |

---

##### `delegationRole`<sup>Required</sup> <a name="delegationRole" id="@kampus/cdk-constructs.CrossAccountSubdomainProps.property.delegationRole"></a>

```typescript
public readonly delegationRole: ICrossAccountDelegationRole;
```

- *Type:* <a href="#@kampus/cdk-constructs.ICrossAccountDelegationRole">ICrossAccountDelegationRole</a>

---

##### `rootDomain`<sup>Required</sup> <a name="rootDomain" id="@kampus/cdk-constructs.CrossAccountSubdomainProps.property.rootDomain"></a>

```typescript
public readonly rootDomain: string;
```

- *Type:* string

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@kampus/cdk-constructs.CrossAccountSubdomainProps.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---

##### `certificateRegion`<sup>Optional</sup> <a name="certificateRegion" id="@kampus/cdk-constructs.CrossAccountSubdomainProps.property.certificateRegion"></a>

```typescript
public readonly certificateRegion: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ICrossAccountDelegationRole <a name="ICrossAccountDelegationRole" id="@kampus/cdk-constructs.ICrossAccountDelegationRole"></a>

- *Implemented By:* <a href="#@kampus/cdk-constructs.ICrossAccountDelegationRole">ICrossAccountDelegationRole</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kampus/cdk-constructs.ICrossAccountDelegationRole.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `role`<sup>Required</sup> <a name="role" id="@kampus/cdk-constructs.ICrossAccountDelegationRole.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

