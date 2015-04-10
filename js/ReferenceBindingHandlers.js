// This is a refrence file for Knockout Binding Handlers
// 10 Knockout Binding Handlers I Don't Want To Live Without

// -------------------------------------------------------------------
// href and src attributes
// -------------------------------------------------------------
ko.bindingHandlers.href = {
    update: function (element, valueAccessor) {
        ko.bindingHandlers.attr.update(element, function () {
            return { href: valueAccessor()}
        });
    }
};

ko.bindingHandlers.src = {
    update: function (element, valueAccessor) {
        ko.bindingHandlers.attr.update(element, function () {
            return { src: valueAccessor()}
        });
    }
};

// -------------------------------------------------------------------
// href and src attributes end 
// -------------------------------------------------------------

// -------------------------------------------------------------------
// Hidden:
// -------------------------------------------------------------
ko.bindingHandlers.hidden = {
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        ko.bindingHandlers.visible.update(element, function () { return !value; });
        console.log('hai');
    }
};

// -------------------------------------------------------------------
// Hidden:
// -------------------------------------------------------------
ko.bindingHandlers.instantValue = {
    init: function (element, valueAccessor, allBindings) {
        var newAllBindings = function(){
            // for backwards compatibility w/ knockout  < 3.0
            return ko.utils.extend(allBindings(), { valueUpdate: 'afterkeydown' });
        };
        newAllBindings.get = function(a){
            return a === 'valueupdate' ? 'afterkeydown' : allBindings.get(a);
        };
        newAllBindings.has = function(a){
            return a === 'valueupdate' || allBindings.has(a);
        };
        ko.bindingHandlers.value.init(element, valueAccessor, newAllBindings);
    },
    update: ko.bindingHandlers.value.update
};

// -------------------------------------------------------------------
// toggle:
// -------------------------------------------------------------
ko.bindingHandlers.toggle = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        ko.applyBindingsToNode(element, {
            click: function () {
                value(!value());
            }
        });
    }
};

// -------------------------------------------------------------------
// timeAgo:
// -------------------------------------------------------------
function toTimeAgo (dt) {
    var secs = (((new Date()).getTime() - dt.getTime()) / 1000),
        days = Math.floor(secs / 86400);

    return days === 0 && (
        secs < 60 && "just now" ||
            secs < 120 && "a minute ago" ||
            secs < 3600 && Math.floor(secs / 60) + " minutes ago" ||
            secs < 7200 && "an hour ago" ||
            secs < 86400 && Math.floor(secs / 3600) + " hours ago") ||
        days === 1 && "yesterday" ||
        days < 31 && days + " days ago" ||
        days < 60 && "one month ago" ||
        days < 365 && Math.ceil(days / 30) + " months ago" ||
        days < 730 && "one year ago" ||
        Math.ceil(days / 365) + " years ago";
};

ko.bindingHandlers.timeAgo = {
    update: function (element, valueAccessor) {
        var val = unwrap(valueAccessor()),
            date = new Date(val), // WARNING: this is not compatibile with IE8
            timeAgo = toTimeAgo(date);
        return ko.bindingHandlers.html.update(element, function () {
            return '<time datetime="' + encodeURIComponent(val) + '">' + timeAgo + '</time>';
        });
    }
};

// -------------------------------------------------------------------
// currency: 
// It seems more often than not, the need to format currency arises. Why fight it? Although it might be overly simplistic for some use cases, the following binding has done the job reasonably well for me.

// -------------------------------------------------------------


ko.bindingHandlers.currency = {
    symbol: ko.observable('$'),
    update: function(element, valueAccessor, allBindingsAccessor){
        return ko.bindingHandlers.text.update(element,function(){
            var value = +(ko.utils.unwrapObservable(valueAccessor()) || 0),
                symbol = ko.utils.unwrapObservable(allBindingsAccessor().symbol === undefined
                            ? allBindingsAccessor().symbol
                            : ko.bindingHandlers.currency.symbol);
            return symbol + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        });
    }
};
// This allows you to globally change the "symbol" being used as currency, as well as replace it only locally.


// -------------------------------------------------------------------
// Markdown:
// Although this requires an external dependency, it's worth simply pointing out how simple it is to integrate an external library into knockout. Look how easy it is to pull in a markdown compiler:

// -------------------------------------------------------------

var converter = Markdown.getConverter();
ko.bindingHandlers.markdown = {
    update: function(element, valueAccessor) {
        return ko.bindingHandlers.html.update(element, function() {
            return converter.makeHtml(ko.utils.unwrapObservable(valueAccessor()));
        });
    }
};


// -------------------------------------------------------------------
// Stop Binding:
// I can't take credit for this incredibly simple but useful binding. Ryan Neimeyer originally introduced me to this concept.
// For large knockout applications, it is inevitable that you will want to bind specific subsections of HTML with a viewmodel that's isolated from everything else. It is important to make sure that that HTML subtree stays completely unbinded from anything else. Well here is a simple way to do it:
// -------------------------------------------------------------


ko.bindingHandlers.stopBinding = {
    init: function () {
        return { controlsDescendantBindings: true };
    }
};
ko.virtualElements.allowedBindings.stopBinding = true;


// -------------------------------------------------------------------
// toJSON
// There may be a use for this in an actual app, but I have mostly found it useful as a debugging tool.

// Knockout comes with a useful utility function, ko.toJSON. Although it has many other uses, you can use it to quickly bind entire viewmodels (which may have a bunch of observable properties) and quickly see what sort of changes are going on in your viewmodel. So simple:

// -------------------------------------------------------------


toJSON
There may be a use for this in an actual app, but I have mostly found it useful as a debugging tool.

Knockout comes with a useful utility function, ko.toJSON. Although it has many other uses, you can use it to quickly bind entire viewmodels (which may have a bunch of observable properties) and quickly see what sort of changes are going on in your viewmodel. So simple:

ko.bindingHandlers.toJSON = {
    update: function(element, valueAccessor){
        return ko.bindingHandlers.text.update(element,function(){
            return ko.toJSON(valueAccessor(), null, 2);
        });
    }
};
// -------------------------------------------------------------------
// timeAgo:
// -------------------------------------------------------------

// -------------------------------------------------------------------
// timeAgo:
// -------------------------------------------------------------