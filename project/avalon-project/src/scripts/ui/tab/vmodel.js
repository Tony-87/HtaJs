var data = [{
	key: 'baseInfo',
	text: '基本信息'
}, {
	key: 'rightInfo',
	text: '权限信息'
}, {
	key: 'contactLog',
	text: '通话日志'
}];

var vmodel = avalon.define({
	$id: 'tab',
	tabs: data,
	curIndex: 0,
	change: function(index) {
		vmodel.curIndex = index;
		vmodel.$fire('all!changeTab', {
			index: index,
			data: data[index]
		});
	}
});