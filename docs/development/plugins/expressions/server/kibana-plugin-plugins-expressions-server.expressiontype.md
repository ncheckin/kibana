<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-expressions-server](./kibana-plugin-plugins-expressions-server.md) &gt; [ExpressionType](./kibana-plugin-plugins-expressions-server.expressiontype.md)

## ExpressionType class

<b>Signature:</b>

```typescript
export declare class ExpressionType 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(definition)](./kibana-plugin-plugins-expressions-server.expressiontype._constructor_.md) |  | Constructs a new instance of the <code>ExpressionType</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [castsFrom](./kibana-plugin-plugins-expressions-server.expressiontype.castsfrom.md) |  | <code>(value: ExpressionValue) =&gt; boolean</code> |  |
|  [castsTo](./kibana-plugin-plugins-expressions-server.expressiontype.caststo.md) |  | <code>(value: ExpressionValue) =&gt; boolean</code> |  |
|  [create](./kibana-plugin-plugins-expressions-server.expressiontype.create.md) |  | <code>unknown</code> |  |
|  [deserialize](./kibana-plugin-plugins-expressions-server.expressiontype.deserialize.md) |  | <code>(serialized: any) =&gt; ExpressionValue</code> |  |
|  [from](./kibana-plugin-plugins-expressions-server.expressiontype.from.md) |  | <code>(value: ExpressionValue, types: Record&lt;string, ExpressionType&gt;) =&gt; any</code> |  |
|  [getFromFn](./kibana-plugin-plugins-expressions-server.expressiontype.getfromfn.md) |  | <code>(typeName: string) =&gt; undefined &#124; ExpressionValueConverter&lt;ExpressionValue, ExpressionValue&gt;</code> |  |
|  [getToFn](./kibana-plugin-plugins-expressions-server.expressiontype.gettofn.md) |  | <code>(typeName: string) =&gt; undefined &#124; ExpressionValueConverter&lt;ExpressionValue, ExpressionValue&gt;</code> |  |
|  [help](./kibana-plugin-plugins-expressions-server.expressiontype.help.md) |  | <code>string</code> | A short help text. |
|  [name](./kibana-plugin-plugins-expressions-server.expressiontype.name.md) |  | <code>string</code> |  |
|  [serialize](./kibana-plugin-plugins-expressions-server.expressiontype.serialize.md) |  | <code>(value: ExpressionValue) =&gt; any</code> | Optional serialization (used when passing context around client/server). |
|  [to](./kibana-plugin-plugins-expressions-server.expressiontype.to.md) |  | <code>(value: ExpressionValue, toTypeName: string, types: Record&lt;string, ExpressionType&gt;) =&gt; any</code> |  |
|  [validate](./kibana-plugin-plugins-expressions-server.expressiontype.validate.md) |  | <code>(type: any) =&gt; void &#124; Error</code> | Type validation, useful for checking function output. |

