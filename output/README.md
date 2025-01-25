在这个例子里面。 v1.yaml 是输出资源，得到的是 Name: !Sub "${AWS::StackName}-SSHSG" 里面的值，也就是 "lesson18-SSHSG"
然后 v2.yaml 里面你可以 import resource 
    !ImportValue "lesson18-SSHSG"