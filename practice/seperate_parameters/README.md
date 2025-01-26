# 建立堆栈
$ aws cloudformation create-stack --stack-name lesson32 --template-body file://template1.yml --parameters file://json1.json
# 删除堆栈
$ aws cloudformation delete-stack --stack-name lesson32