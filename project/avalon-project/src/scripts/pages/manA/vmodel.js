avalon.vmodels.navigator.active = 'manA';

var vmodel = avalon.define({
    $id: 'workspace',
    content: ''
});

// 模拟 ajax 请求
setTimeout(function(){
    vmodel.$fire('all!getInfo', {
        name: '海景房',
        phoneNum: '13818818888',
        rightLv: '3',
        contactTimes: '12'
    });
}, 1000);