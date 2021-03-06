require.register("templates/admin/design-elements-view", function(exports, require, module) {
var __templateData = function anonymous(locals
/**/) {
var buf = [];
var locals_ = (locals || {}),view = locals_.view;buf.push("<div class=\"well container-fluid\"><h1>Bootstrap CSS</h1><div class=\"row\"><div class=\"col-sm-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"tables\" href=\"#tables\" class=\"panel-title\">Tables</a></div><div class=\"panel-body\">");
var table_content_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr><tr><th>1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th>2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th>3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>");
};
buf.push("<h3>Basic</h3><table class=\"table\">");
table_content_mixin();
buf.push("</table><h3>Bordered</h3><table class=\"table table-bordered\">");
table_content_mixin();
buf.push("</table><h3>Striped</h3><table class=\"table table-striped\">");
table_content_mixin();
buf.push("</table></div></div></div><div class=\"col-sm-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"tables\" href=\"#tables\" class=\"panel-title\">Tables</a></div><div class=\"panel-body\"><h3>Hover</h3><table class=\"table table-hover\">");
table_content_mixin();
buf.push("</table><h3>Condensed</h3><table class=\"table table-condensed\">");
table_content_mixin();
buf.push("</table><h3>Context</h3><table class=\"table\"><tr class=\"active\"><td>Active</td></tr><tr class=\"success\"><td>Success</td></tr><tr class=\"info\"><td>Info</td></tr><tr class=\"warning\"><td>Warning</td></tr><tr class=\"danger\"><td>Danger</td></tr></table></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"headers\" href=\"#headers\" class=\"panel-title\">Headers</a></div><div class=\"panel-body\"><h1>Header 1<small class=\"spl\">secondary text</small></h1><h2>Header 2<small class=\"spl\">secondary text</small></h2><h3>Header 3<small class=\"spl\">secondary text</small></h3><h4>Header 4<small class=\"spl\">secondary text</small></h4><h5>Header 5<small class=\"spl\">secondary text</small></h5><h6>Header 6<small class=\"spl\">secondary text</small></h6></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"user-input\" href=\"#user-input\" class=\"panel-title\">User input</a></div><div class=\"panel-body\"><kbd>ctrl + ,</kbd></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"horizontal-rule\" href=\"#horizontal-rule\" class=\"panel-title\">Horizontal Rule</a></div><div class=\"panel-body\"><div>Text above</div><hr/><div>Text below</div></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"forms\" href=\"#forms\" class=\"panel-title\">Forms</a></div><div class=\"panel-body\"><h3>Default</h3><div class=\"form\"><div class=\"form-group\"><label class=\"control-label\">Input</label><input class=\"form-control\"/></div><div class=\"form-group\"><label class=\"control-label\">Textarea</label><textarea class=\"form-control\"></textarea><div class=\"help-block\">Help block</div></div><div class=\"form-group\"><label class=\"control-label\">Select</label><select class=\"form-control\"><option>Option 1</option><option>Option 2</option></select></div><div class=\"form-group\"><label>Disabled</label><input disabled=\"disabled\" class=\"form-control\"/></div><div class=\"form-group has-error\"><label class=\"control-label\">Validation error</label><input class=\"form-control\"/></div><div class=\"form-group\"><label>Large input</label><input class=\"form-control input-lg\"/></div><div class=\"form-group\"><label>Small input</label><input class=\"form-control input-sm\"/></div></div></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"buttons\" href=\"#buttons\" class=\"panel-title\">Buttons</a></div><div class=\"panel-body\"><div><button class=\"btn btn-default\">Default</button><span class=\"spr\"></span><button class=\"btn btn-primary\">Primary</button><span class=\"spr\"></span><button class=\"btn btn-success\">Success</button><span class=\"spr\"></span><button class=\"btn btn-info\">Info</button><span class=\"spr\"></span><button class=\"btn btn-warning\">Warning</button><span class=\"spr\"></span><button class=\"btn btn-danger\">Danger</button><span class=\"spr\"></span><button disabled=\"disabled\" class=\"btn btn-default\">Disabled</button></div><hr/><div><button class=\"btn btn-default btn-lg\">Large</button><span class=\"spr\"></span><button class=\"btn btn-default\">Default</button><span class=\"spr\"></span><button class=\"btn btn-default btn-sm\">Small</button><span class=\"spr\"></span><button class=\"btn btn-default btn-xs\">Extra small</button></div><hr/><div><button class=\"btn btn-default btn-illustrated\">Default illustrated</button><span class=\"spr\"></span><button class=\"btn btn-primary btn-illustrated\">Primary illustrated</button><span class=\"spr\"></span><button class=\"btn btn-success btn-illustrated\">Success illustrated</button><span class=\"spr\"></span><button class=\"btn btn-info btn-illustrated\">Info illustrated</button><span class=\"spr\"></span><button class=\"btn btn-warning btn-illustrated\">Warning illustrated</button><span class=\"spr\"></span><button class=\"btn btn-danger btn-illustrated\">Danger illustrated</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"contextual-text\" href=\"#contextual-text\" class=\"panel-title\">Contextual text</a></div><div class=\"panel-body\"><p class=\"text-muted\">Muted text</p><p class=\"text-primary\">Primary text</p><p class=\"text-success\">Success text</p><p class=\"text-info\">Info text</p><p class=\"text-warning\">Warning text</p><p class=\"text-danger\">Danger text</p></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"images\" href=\"#images\" class=\"panel-title\">Images</a></div><div class=\"panel-body\"><div>Rounded</div><img style=\"width: 140px\" src=\"/images/pages/contribute/tile_adventurer.png\" class=\"img-rounded\"/><div>Circle</div><img style=\"width: 140px\" src=\"/images/pages/contribute/tile_adventurer.png\" class=\"img-circle\"/><div>Thumbnail</div><img style=\"width: 140px\" src=\"/images/pages/contribute/tile_adventurer.png\" class=\"img-thumbnail\"/><div>Prize</div><img style=\"width: 140px\" src=\"/images/pages/contribute/adventurer.png\" class=\"img-prize\"/></div></div></div></div><h1>Bootstrap Components</h1><div class=\"row\"><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"dropdowns\" href=\"#dropdowns\" class=\"panel-title\">Dropdowns</a></div><div class=\"panel-body\"><div class=\"btn-group\"><button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\">Dropdown Button</button><ul class=\"dropdown-menu\"><li><a>Action</a></li><li><a>Another action</a></li></ul></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"navs\" href=\"#navs\" class=\"panel-title\">Navs</a></div><div class=\"panel-body\"><ul class=\"nav nav-tabs\"><li class=\"active\"> <a>Home</a></li><li> <a>Profile</a></li><li> <a>Message</a></li></ul><hr/><ul class=\"nav nav-pills\"><li class=\"active\"><a>Home</a></li><li><a>Profile</a></li><li><a>Message</a></li></ul></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"navbars\" href=\"#navbars\" class=\"panel-title\">Navbars</a></div><div class=\"panel-body\"><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button data-toggle=\"collapse\" data-target=\"#main-nav\" class=\"navbar-toggle collapsed\"><span class=\"glyphicon glyphicon-option-horizontal\"></span></button><a class=\"navbar-brand\">Brand</a></div><div id=\"main-nav\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a>Link</a></li><li><a>Link</a></li></ul></div></div></nav></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"breadcrumbs\" href=\"#breadcrumbs\" class=\"panel-title\">Breadcrumbs</a></div><div class=\"panel-body\"><ol class=\"breadcrumb\"><li>Home</li><li>Library</li><li class=\"active\">Data</li></ol></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"labels\" href=\"#labels\" class=\"panel-title\">Labels</a></div><div class=\"panel-body\"><span class=\"label label-default\">default</span><span class=\"spr\"></span><span class=\"label label-primary\">primary</span><span class=\"spr\"></span><span class=\"label label-success\">success</span><span class=\"spr\"></span><span class=\"label label-info\">info</span><span class=\"spr\"></span><span class=\"label label-warning\">warning</span><span class=\"spr\"></span><span class=\"label label-danger\">danger</span><span class=\"spr\"></span><span class=\"label label-banner\">banner</span></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"alerts\" href=\"#alerts\" class=\"panel-title\">Alerts</a></div><div class=\"panel-body\"><div class=\"alert alert-success\">Success</div><div class=\"alert alert-info\">Info</div><div class=\"alert alert-warning\">Warning</div><div class=\"alert alert-danger\">Danger</div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"progress-bars\" href=\"#progress-bars\" class=\"panel-title\">Progress Bars</a></div><div class=\"panel-body\"><strong>Default</strong><div class=\"progress\"><div style=\"width: 50%\" class=\"progress-bar\"></div></div><strong>Striped Active</strong><div class=\"progress progress-striped active\"><div style=\"width: 50%\" class=\"progress-bar\"></div></div><strong>Contextual</strong><div class=\"progress\"><div style=\"width: 25%\" class=\"progress-bar progress-bar-success\">Success</div><div style=\"width: 25%\" class=\"progress-bar progress-bar-info\">Info</div><div style=\"width: 25%\" class=\"progress-bar progress-bar-warning\">Warning</div><div style=\"width: 25%\" class=\"progress-bar progress-bar-danger\">Danger</div></div></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"list-groups\" href=\"#list-groups\" class=\"panel-title\">List Groups</a></div><div class=\"panel-body\"><ul class=\"list-group\"><li class=\"list-group-item\">List group item 1</li><li class=\"list-group-item\">List group item 2</li><li class=\"list-group-item\">List group item 3</li></ul></div></div><div class=\"panel panel-info\"><div class=\"panel-heading\"><div class=\"panel-title\">Info Panel w/Title</div></div><div class=\"panel-body\">And body</div><div class=\"panel-footer\">And footer</div></div><div class=\"panel panel-primary\"><div class=\"panel-heading\"><div class=\"panel-title\">Primary Panel w/Title</div></div><div class=\"panel-body\">And body</div><div class=\"panel-footer\">And footer</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\"><div class=\"panel-title\">Default Panel w/Title</div></div><div class=\"panel-body\">And body</div><div class=\"panel-footer\">And footer</div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-success\"><div class=\"panel-heading\"><div class=\"panel-title\">Success Panel w/Title</div></div><div class=\"panel-body\">And body</div><div class=\"panel-footer\">And footer</div></div><div class=\"panel panel-warning\"><div class=\"panel-heading\"><div class=\"panel-title\">warning Panel w/Title</div></div><div class=\"panel-body\">And body</div><div class=\"panel-footer\">And footer</div></div><div class=\"panel panel-danger\"><div class=\"panel-heading\"><div class=\"panel-title\">Danger Panel w/Title</div></div><div class=\"panel-body\">And body</div><div class=\"panel-footer\">And footer</div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"wells\" href=\"#wells\" class=\"panel-title\">Wells</a></div><div class=\"panel-body\"><div class=\"well\">Well!</div><div class=\"well well-lg\">Large well!</div><div class=\"well well-sm\">Small well!</div><div class=\"well well-parchment\">Parchment well</div></div></div></div></div><h1>Bootstrap JavaScript</h1><div class=\"row\"><div class=\"col-sm-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"modals\" href=\"#modals\" class=\"panel-title\">Default Modal</a></div><div style=\"background: lightgrey\" id=\"modal-1\" class=\"panel-body\"><div class=\"modal-dialog game\"><div class=\"background-wrapper\"><div class=\"modal-content\"><div class=\"modal-header\">");
if ( view.closeButton)
{
buf.push("<div type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"button close\">&times;</div>");
}
if ( view.options.headerContent)
{
buf.push("<h3>" + (null == (jade.interp = view.options.headerContent) ? "" : jade.interp) + "</h3>");
}
else
{
buf.push("<h3>man bites God</h3>");
}
buf.push("</div><div class=\"modal-body\">");
if ( view.options.bodyContent)
{
buf.push("<div>" + (null == (jade.interp = view.options.bodyContent) ? "" : jade.interp) + "</div>");
}
else
{
buf.push("<p>Man Bites God are the bad boys of the Melbourne live music and comedy scene. It is like being drowned in a bathtub of harmony.</p><img src=\"http://www.manbitesgod.com/images/picturecoupleb.jpg\"/><img src=\"http://www.manbitesgod.com/images/manrantb.jpg\"/>");
}
buf.push("</div><div class=\"modal-body wait secret\"><h3>Reticulating Splines...</h3><div class=\"progress progress-striped active\"><div class=\"progress-bar\"></div></div></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" data-i18n=\"modal.okay\" class=\"btn btn-primary\">Okay</button></div></div></div></div></div></div></div><div class=\"col-sm-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a class=\"panel-title\">Plain Modal</a></div><div style=\"background: lightgrey\" id=\"modal-2\" class=\"panel-body\"><div class=\"modal-dialog game\"><div class=\"background-wrapper\"><div class=\"modal-content\"><div class=\"modal-header\">");
if ( view.closeButton)
{
buf.push("<div type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"button close\">&times;</div>");
}
if ( view.options.headerContent)
{
buf.push("<h3>" + (null == (jade.interp = view.options.headerContent) ? "" : jade.interp) + "</h3>");
}
else
{
buf.push("<h3>man bites God</h3>");
}
buf.push("</div><div class=\"modal-body\">");
if ( view.options.bodyContent)
{
buf.push("<div>" + (null == (jade.interp = view.options.bodyContent) ? "" : jade.interp) + "</div>");
}
else
{
buf.push("<p>Man Bites God are the bad boys of the Melbourne live music and comedy scene. It is like being drowned in a bathtub of harmony.</p><img src=\"http://www.manbitesgod.com/images/picturecoupleb.jpg\"/><img src=\"http://www.manbitesgod.com/images/manrantb.jpg\"/>");
}
buf.push("</div><div class=\"modal-body wait secret\"><h3>Reticulating Splines...</h3><div class=\"progress progress-striped active\"><div class=\"progress-bar\"></div></div></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" data-i18n=\"modal.okay\" class=\"btn btn-primary\">Okay</button></div></div></div></div></div></div></div></div><div class=\"row\"><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"tooltips\" href=\"#tooltips\" class=\"panel-title\">Tooltips</a></div><div class=\"panel-body\"><button data-placement=\"right\" data-toggle=\"tooltip\" class=\"btn btn-default\">Button w/Tooltip</button></div><div class=\"panel-body style-flat text-right\"><button data-placement=\"right\" data-toggle=\"tooltip\" class=\"tooltip-btn btn btn-navy\">Flat Right Tooltip</button><br/><button data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltip-btn btn btn-navy\">Flat Top Tooltip</button><br/><button data-placement=\"bottom\" data-toggle=\"tooltip\" class=\"tooltip-btn btn btn-navy\">Flat Bottom Tooltip</button><br/><button data-placement=\"left\" data-toggle=\"tooltip\" class=\"tooltip-btn btn btn-navy\">Flat Left Tooltip</button></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"popovers\" href=\"#popovers\" class=\"panel-title\">Popovers</a></div><div class=\"panel-body\"><button id=\"popover\" title=\"Popover title\" data-content=\"Popover content\" data-trigger=\"click\" class=\"btn btn-default\">Button w/Popover</button></div></div></div></div><h1>jQuery UI</h1><div class=\"row\"><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"autocomplete\" href=\"#autocomplete\" class=\"panel-title\">Autocomplete</a></div><div class=\"panel-body\"><input id=\"tags\"/></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"slider\" href=\"#slider\" class=\"panel-title\">Slider</a></div><div class=\"panel-body\"><div id=\"slider-example\"></div></div></div></div></div><h1>Other</h1><div class=\"row\"><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"gems\" href=\"#gems\" class=\"panel-title\">Gems</a></div><div class=\"panel-body\"><div class=\"gem gem-20\"></div><div class=\"gem gem-25\"></div><div class=\"gem gem-30\"></div><div class=\"gem gem-40\"></div><div class=\"gem gem-60\"></div></div></div></div><div class=\"col-sm-3\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><a id=\"no-border-image\" href=\"#no-border-image\" class=\"panel-title\">No Border Image</a></div><div class=\"panel-body\"></div></div></div></div></div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/admin/DesignElementsView", function(exports, require, module) {
var DesignElementsView, RootView, template,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

RootView = require('views/core/RootView');

template = require('templates/admin/design-elements-view');

module.exports = DesignElementsView = (function(superClass) {
  extend(DesignElementsView, superClass);

  function DesignElementsView() {
    return DesignElementsView.__super__.constructor.apply(this, arguments);
  }

  DesignElementsView.prototype.id = 'design-elements-view';

  DesignElementsView.prototype.template = template;

  DesignElementsView.prototype.afterInsert = function() {
    var hash, tags;
    DesignElementsView.__super__.afterInsert.call(this);
    hash = document.location.hash;
    document.location.hash = '';
    setTimeout((function() {
      return document.location.hash = hash;
    }), 10);
    this.$('#modal-2').find('.background-wrapper').addClass('plain');
    this.$('[data-toggle="tooltip"]').tooltip({
      title: 'Lorem ipsum',
      trigger: 'click'
    });
    if (hash === '#tooltips') {
      setTimeout(((function(_this) {
        return function() {
          return _this.$('[data-toggle="tooltip"]').tooltip('show');
        };
      })(this)), 20);
    }
    if (hash === '#popovers') {
      setTimeout(((function(_this) {
        return function() {
          return _this.$('#popover').popover('show');
        };
      })(this)), 20);
    }
    tags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
    this.$('#tags').autocomplete({
      source: tags
    });
    if (hash === '#autocomplete') {
      setTimeout(((function(_this) {
        return function() {
          return _this.$('#tags').autocomplete("search", "t");
        };
      })(this)), 20);
    }
    return this.$('#slider-example').slider();
  };

  return DesignElementsView;

})(RootView);
});

;
//# sourceMappingURL=/javascripts/app/views/admin/DesignElementsView.js.map