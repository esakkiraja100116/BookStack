{"is_source_file": true, "format": "JavaScript", "description": "This file defines a GlobalSearch class that manages a global search box interface in a web application, handling user input, displaying suggestions, and integrating with an HTTP service to fetch search results.", "external_files": ["../services/dom", "../services/util", "../services/keyboard-navigation", "./component"], "external_methods": ["debounce"], "published": ["GlobalSearch"], "classes": [{"name": "GlobalSearch", "description": "A class that handles the functionality of a global search box, enabling live suggestions based on user input."}], "methods": [{"name": "setup", "description": "Initializes references to DOM elements and sets up event listeners."}, {"name": "setupListeners", "description": "Sets up event listeners for input changes and double-click actions to manage search suggestions."}, {"name": "updateSuggestions", "description": "Fetches search suggestions from the server and updates the suggestion DOM."}, {"name": "showSuggestions", "description": "Displays the suggestions area with an animation."}, {"name": "hideSuggestions", "description": "Hides the suggestions area and clears the results."}], "calls": ["window.$http.get", "htmlToDom"], "search-terms": ["GlobalSearch", "setup", "updateSuggestions", "debounce", "KeyboardNavigationHandler"], "state": 2, "ctags": [], "filename": "/app/data/T0005/17500/esakkiraja100116/BookStack/resources/js/components/global-search.js", "hash": "183b6ae57165c85b5d52a00fb9387ad5", "format-version": 3, "code-base-name": "b8388bl"}