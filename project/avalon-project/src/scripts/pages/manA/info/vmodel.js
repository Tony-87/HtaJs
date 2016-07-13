var vmodel = avalon.define({
	$id: 'info',

	tpl: 'baseInfo',

	name: '',
	phoneNum: '',
	rightLv: '',
	contactTimes: ''
});


vmodel.$watch('getInfo', function(data){
    vmodel.name = data.name
    vmodel.phoneNum = data.phoneNum
    vmodel.rightLv = data.rightLv
    vmodel.contactTimes = data.contactTimes
});

vmodel.$watch('changeTab', function(data){
    vmodel.tpl = data.data.key
});
