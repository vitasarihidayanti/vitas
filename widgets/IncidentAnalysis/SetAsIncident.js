// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","jimu/BaseFeatureAction","jimu/WidgetManager"],function(b,c,d){return b(c,{map:null,iconClass:"icon-set-as-incident",isFeatureSupported:function(a){return 1===a.features.length&&a.features[0].geometry&&a.features[0].attributes?!0:!1},onExecute:function(a){return d.getInstance().triggerWidgetOpen(this.widgetId).then(function(b){b._setEventLocation(a.features[0])})}})});