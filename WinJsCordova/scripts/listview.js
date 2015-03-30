var itemArray = [
        { title: "Consultant 001", text: "lily", picture: "images/1.png" },
        { title: "Consultant 002", text: "robert", picture: "images/2.png" },
        { title: "Consultant 003", text: "jacky", picture: "images/3.png" },
        { title: "Consultant 004", text: "andy", picture: "images/4.png" },
        { title: "Consultant 005", text: "kevin", picture: "images/5.png" },
        { title: "Consultant 006", text: "tim", picture: "images/6.png" },
        { title: "Consultant 007", text: "james", picture: "images/7.png" },
        { title: "Consultant 008", text: "jerry", picture: "images/7.png" }
];

var items = [];

// Generate 16 items
for (var i = 0; i < 2; i++) {
    itemArray.forEach(function (item) {
        items.push(item);
    });
}


WinJS.Namespace.define("Sample.ListView", {
    modes: {
        tab1: {
            name: 'tab1',
            selectionMode: WinJS.UI.SelectionMode.none,
            tapBehavior: WinJS.UI.TapBehavior.none
        },
        tab2: {
            name: 'tab2',
            selectionMode: WinJS.UI.SelectionMode.single,
            tapBehavior: WinJS.UI.TapBehavior.directSelect
        },
        tab3: {
            name: 'tab3',
            selectionMode: WinJS.UI.SelectionMode.multi,
            tapBehavior: WinJS.UI.TapBehavior.directSelect
        },
        tab4: {
            name: 'tab4',
            selectionMode: WinJS.UI.SelectionMode.multi,
            tapBehavior: WinJS.UI.TapBehavior.toggleSelect
        }
    },
    listView: null,
    changeSelectionMode: WinJS.UI.eventHandler(function (ev) {
        var listView = Sample.ListView.listView;
        if (listView) {
            var command = ev.target;
            if (command.textContent) {
                var mode = command.textContent.toLowerCase();
                listView.selection.clear();

                Sample.ListView.context.currentMode = Sample.ListView.modes[mode];

                listView.selectionMode = Sample.ListView.context.currentMode.selectionMode;
                listView.tapBehavior = Sample.ListView.context.currentMode.tapBehavior;
            }
        }
    }),
    data: new WinJS.Binding.List(items),
    context: {
    }
});

Sample.ListView.context = WinJS.Binding.as({ currentMode: Sample.ListView.modes.readonly });
var header = document.querySelector('.headerFooterPlaceholder');
WinJS.Binding.processAll(header, Sample.ListView).then(function () {
    return WinJS.UI.processAll();
}).then(function () {
    Sample.ListView.listView = document.querySelector('.listView').winControl;
});

