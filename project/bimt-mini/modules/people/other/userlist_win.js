define(["avalon", "text!./userlist_win.html", "jquery", 'base', '../../homepage/user_recommend'],
    function (avalon, userlist_win) {
        avalon.templateCache.userlist_win = userlist_win
 
    })

function createUserListWin(vmID) {

    vmID = vmID + "_userlist_win";
    console.log("1--"+avalon.templateCache.userlist_win);
    avalon.templateCache[vmID] = avalon.templateCache.userlist_win.replace(/userlist_win/g, vmID);
    console.log("1--"+avalon.templateCache[vmID]);
    
    var model = avalon.define({
        $id: vmID,
        result: {},
        data_list: [],
        curPage: 1,
        followUser: function (el) {
            if (followUser_API()) {
                el.follow = 1;
                //alert("关注用户");
            }
        },
        unfollowUser: function ($remove, el) {
            layer.confirm('确定要取消关注该用户吗?', {icon: 3, title: '提示'},
                function (index) {
                    unfollowUser_API($remove, el)
                    layer.close(index);
                });
        },
        getMoreData: function () {
        }
    })
    return vmID;
}
