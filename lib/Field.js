// Generated by CoffeeScript 1.6.2
(function() {
  var Component, Composed, Field, _,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ = require('underscore');

  Composed = require('./Composed');

  Component = require('./Component');

  Field = (function(_super) {
    __extends(Field, _super);

    function Field(raw, control) {
      this.raw = raw;
      this.control = control;
      this.length = this.raw.length;
      this.assign(Component);
      this.delimiter = this.control.components;
      return;
    }

    Field.prototype.getComponent = function(index) {
      return this.getPart(index);
    };

    Field.prototype.setVal = function(values) {
      return this.raw = _.map(values, function(value) {
        return [value];
      });
    };

    return Field;

  })(Composed);

  module.exports = Field;

}).call(this);
