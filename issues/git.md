# 1. windows 的 powershell 中使用 git log 中文乱码

- 解决方法：

  1. 使用命令行设置环境变量
      1. `setx LESSCHARSET 'utf-8'`
      2. 手动给当前用户设置环境变量 名字是 LESSCHARSET 值是 utf-8

  2. 不使用less分页
      ```
      git config --global core.pager ''
      ```
- 原因：
  git log 默认使用 less 分页，所以需要对 less 命令进行 UTF-8 编码,或者不使用less分页 使用more
