define(["avalon", "text!./header.html"], function(avalon, header) {
    avalon.templateCache.header = header
    var model = avalon.define({
        $id: "header",
        moduleTitle:"我是页头"
    })

})
