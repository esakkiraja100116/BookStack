{"is_source_file": true, "format": "JavaScript", "description": "This file defines an AutoSuggest component that provides suggestions based on user input and handles keyboard navigation and selection of suggestions.", "external_files": ["../services/util", "../services/dom", "./component", "../services/keyboard-navigation"], "external_methods": ["escapeHtml", "onChildEvent", "KeyboardNavigationHandler"], "published": ["AutoSuggest"], "classes": [{"name": "AutoSuggest", "description": "A component that suggests options based on user input and handles keyboard navigation for selecting those options."}], "methods": [{"name": "setup", "description": "Initializes the AutoSuggest component by setting up parameters and event listeners."}, {"name": "setupListeners", "description": "Sets up event listeners for keyboard navigation and user input events."}, {"name": "selectSuggestion", "description": "Handles the selection of a suggestion, updates the input value, and dispatches input events."}, {"name": "requestSuggestions", "description": "Requests suggestions from the server based on user input and filters them for display."}, {"name": "getNameFilterIfNeeded", "description": "Determines if a name filter is needed based on the type of input."}, {"name": "loadSuggestions", "description": "Loads suggestions from the server with the specified search and name filter, using an ajax cache to prevent redundant requests."}, {"name": "displaySuggestions", "description": "Displays the filtered suggestions to the user."}, {"name": "hideSuggestions", "description": "Hides the suggestions list."}, {"name": "hideSuggestionsIfFocusedLost", "description": "Hides the suggestions if the focus has moved outside the component."}], "calls": ["window.$http.get"], "search-terms": ["AutoSuggest", "suggestions", "keyboard navigation", "input filtering"], "state": 2, "ctags": [], "filename": "/app/data/T0005/17500/esakkiraja100116/BookStack/resources/js/components/auto-suggest.js", "hash": "2c5fba08b6f55a56e447f0dcdcd85163", "format-version": 3, "code-base-name": "b8388bl"}