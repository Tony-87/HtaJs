var SP = avalon.define('softphone', function(vm) {
    vm.$skipArray = ["opts"];

    vm.call_toolbar_status = '离线';
    vm.call_toolbar_status_class = function () {
        if (SP.call_toolbar_status == '空闲') {
            return 'status-online';
        } else if (SP.call_toolbar_status == '离线') {
            return '';
        } else {
            return 'status-offline';
        }
    };

    // 持续时间
    vm.duringTime = '00:00:00';

    // 呼出号码
    vm.call_telnumber = '';

    // 处理/等待
    vm.call_status = 'online';

    // 锁定按钮
    vm.dis_pause = true;
    vm.dis_online = true;
    vm.dis_calling = true;
    vm.dis_canceled = true;
    vm.dis_investigation = true;

});

SP.$watch('getInfo', function(data){
    SP.call_telnumber = data.phoneNum;
})