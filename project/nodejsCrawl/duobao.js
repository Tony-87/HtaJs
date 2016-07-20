/**
 * Created by wxb on 2016/7/20.
 */


var http = require('http');
var fs = require('fs');

var url = 'http://1.163.com/record/getDuobaoRecord.do';
url+='?gid=510&period=307202877';
url+='&totalCnt=16000&pageSize=100&pageNum=';

// 要抓取的网页地址
//var url = 'http://www.imooc.com/learn/348'

var data_list=[];
var totalPage=2;
for(var i=1;i<totalPage;i++)
{
    url+=i;


    http.get(url, function(res) {
        var html = ''
        res.on('data', function(data) {
            html += data;
        })
        res.on('end', function() {
            console.log(html);
            //var json=JSON.parse(html);
            //console.log(json.code);
           // data_list= data_list.concat(json.result.list);
            
            console.log(data_list.length);
            // 将抓取的内容保存到本地文件中
        /*    fs.writeFile('index.html', html, function(err) {
                if (err) {
                    console.log('出现错误!')
                }
                console.log('已输出至index.html中')
            })*/
        })
    }).on('error', function(err) {
        console.log('错误信息：' + err)
    })
    
    
}
