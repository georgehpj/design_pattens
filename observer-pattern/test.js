var Publisher = require('./Publisher');
var Subscriber = require('./Subscriber');

var newYorkTimes = new Publisher;
var CNN = new Publisher;
var ChinaDaily = new Publisher;
var me = new Subscriber('George');
var Judy = new Subscriber('Judy');
var Mary = new Subscriber('Mary');

me.subscribe(newYorkTimes);
Judy.subscribe(CNN).subscribe(ChinaDaily);
Mary.subscribe(newYorkTimes).subscribe(CNN);
newYorkTimes.deliver({paperName: 'NewYorkTimes', paperNews: "hello, this is New York Times"})
    .deliver({paperName: 'NewYorkTimes', paperNews: "hello, this is New York Times 2"});
ChinaDaily.deliver({paperName: 'ChinaDaily', paperNews: 'China Daily reporting... '})
    .deliver({paperName: 'ChinaDaily', paperNews: 'Go go Olympic'});
CNN.deliver({paperName: 'CNN', paperNews: 'CNN news'})
    .deliver({paperName: 'CNN', paperNews: 'CNN news 2'});