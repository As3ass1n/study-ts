# 1.使用Decorators @connect报错
报错信息:
```
ERROR in D:\Private Project\study\ts\proj\src\containers\Counter\index.tsx
[tsl] ERROR in D:\Private Project\study\ts\proj\src\containers\Counter\index.tsx(16,1)
      TS1238: Unable to resolve signature of class decorator when called as an expression.
  Type 'ConnectedComponentClass<typeof Counter, Pick<IProps, never>>' is not assignable to type 'typeof Counter'.
    Type 'Component<Pick<IProps, never>, any, any>' is not assignable to type 'Counter'.
      Types of property 'render' are incompatible.
        Type '() => ReactNode' is not assignable to type '() => Element'.
          Type 'ReactNode' is not assignable to type 'Element'.
            Type 'string' is not assignable to type 'Element'.
```
重新处理下connect的类型声明 见 `utils/connect.ts`
tips: `@types/react-redux/index.d.ts`下第17行注释
