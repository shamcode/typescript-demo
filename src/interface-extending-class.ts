namespace InterfaceExtendingClass {
    class Control {
        private state: any;

        public click() {

        }
    }

    interface SelectableControl extends Control {
        select(): void;
    }

    class Button extends Control {
        select() { }
    }

    class TextBox extends Control {
        select() { }
    }

    class Image {
        select() { }
    }

    class Location {
        select() { }
    }
}