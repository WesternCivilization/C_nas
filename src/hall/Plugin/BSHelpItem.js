var BSHelpItem = ccui.Widget.extend({
    root: null,
    panel_root: null,
    ctor: function () {
        this._super();
        var node = util.LoadUI(GameHallJson.BSHelp).node;
        this.root = ccui.helper.seekWidgetByName(node, "panel_root").clone();
        this.addChild(this.root);
        this.setContentSize(this.root.getContentSize());
    },
});