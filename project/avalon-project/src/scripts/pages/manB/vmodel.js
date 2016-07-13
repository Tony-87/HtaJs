avalon.vmodels.navigator.active = 'manB'

var vmodel = avalon.define({
    $id: 'workspace',
    content: ''
});

// 模拟 ajax 请求
setTimeout(function(){
    vmodel.$fire('all!getInfo', {
        name: '阳光房',
        phoneNum: '13616616666',
        rightLv: '9',
        contactTimes: '36'
    });
}, 1000);