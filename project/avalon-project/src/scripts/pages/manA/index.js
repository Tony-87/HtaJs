// 引入 vmodel
require('./vmodel.js');

// 引入公用模块
require('../../ui/softphone');
require('../../ui/tab');

// 引入子模块
require('./info');

// 引入 view
avalon.templateCache['template'] = require('./view.string');
avalon.vmodels.workspace.content = "template";