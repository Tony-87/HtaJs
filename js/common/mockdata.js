
require(['mock'], function(Mock) {

    //我的关注
    Mock.mock(GLOBAL.ajaxUrl+'/homepage/findIFollow',
    {
        'code': 200,
        'message':'操作失败！',
        "result":{
            "count":12,
            "list|5":[
                {
                    "company": "@county(true)",
                    "followId": 100,
                    "id": 100,
                    "impactnum": "123",
                    "isFollow|0-1": 0,
                    "isFriend": 0,
                    "userImg":Mock.Random.dataImage('36x36'),
                    "username": "@cname"
                }
           ]
        }
    });




});
