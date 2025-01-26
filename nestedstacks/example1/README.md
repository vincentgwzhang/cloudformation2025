
分别建立安全组和EC2模版

怎么使用呢？

1, 首先是新建立一个 S3 bucket, 例如名字叫 deeplearnaws-cf-tpl-20250126, 然后上存模板 lesson25sg.yml, 并得到一个 URL
2, 然后是利用 lesson25.yml 新建一个 CloudFormation stack. 只是这个 lesson25.yml 里面声明了一个新的 CloudFormation stack (所以就是嵌套)， 这个 stack 就是读取S3 的那个URL 作为yaml 文件。
3, 在 lesson25sg.yml 里面说明，首先建立 WebSecurityGroup, 并且输出 WebGroupId
4, 在 lesson25.yml 里面说明，然后把 lesson25sg.yml 所建立并且输出的 WebGroupId 插入新建立的EC2 那里
5, 由于是 lesson25.yml 调用 lesson25sg.yml 的，所以在调用的时候有传入参数 (AppName: !Ref AWS::StackName)