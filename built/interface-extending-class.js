var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var InterfaceExtendingClass;
(function (InterfaceExtendingClass) {
    var Control = (function () {
        function Control() {
        }
        Control.prototype.click = function () {
        };
        return Control;
    }());
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Button.prototype.select = function () { };
        return Button;
    }(Control));
    var TextBox = (function (_super) {
        __extends(TextBox, _super);
        function TextBox() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextBox.prototype.select = function () { };
        return TextBox;
    }(Control));
    var Image = (function () {
        function Image() {
        }
        Image.prototype.select = function () { };
        return Image;
    }());
    var Location = (function () {
        function Location() {
        }
        Location.prototype.select = function () { };
        return Location;
    }());
})(InterfaceExtendingClass || (InterfaceExtendingClass = {}));
