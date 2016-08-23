#观察者模式

以订阅报纸为例，定义了报纸出版方Publisher和报纸订阅方Subscriber。
出版方负责将信息发送给自己的订阅方。
订阅方可以对指定报纸出版方订阅信息，或者取消订阅。

##Publisher
实现deliver(data)方法，将信息发送给所有自己的订阅方subscribers。

##Subscriber
实现subscribe(publisher)方法，订阅指定的报纸出版方。
实现unSubscribe(publisher)方法，取消订阅指定的报纸出版方。