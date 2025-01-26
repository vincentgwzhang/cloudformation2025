Cloudformation 里面的 yaml 是分好几个大的部分的，包括 mappings, output, parameters, resources 等等
但是当然是已围绕resource 为准的






如何进行 cloudformation 的保护呢？（防止删除）
1, 在创建 cloudformation 的时候有一个 (Stack creation options - optional ===> Termination protection 点击 activate)
2, 或者选择已经存在的stack, 也可以激活终止保护的功能的






直接用命令生成stack
aws cloudformation create-stack --stack-name lesson31 --template-body file://lesson31.yml
aws cloudformation delete-stack --stack-name lesson31