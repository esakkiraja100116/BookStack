{"is_source_file": true, "format": "JavaScript", "description": "This file contains the implementation of a TinyMCE plugin for handling custom code blocks in a WYSIWYG editor, including methods for displaying popups, defining a custom HTML element for code blocks, and registering commands and UI elements with the editor.", "external_files": [], "external_methods": ["window.$components.first", "window.importVersioned"], "published": ["getPlugin"], "classes": [{"name": "CodeBlockElement", "description": "Defines a custom HTML element representing a code block, allowing for interaction and management of code content."}], "methods": [{"name": "showPopup", "description": "Displays a popup to edit code content, invoking a callback with new code and language when content changes."}, {"name": "showPopupForCodeBlock", "description": "Displays the code editing popup specifically for a pre-defined code block element."}, {"name": "defineCodeBlockCustomElement", "description": "Defines the custom 'code-block' HTML element embedded in the editor, managing internal code and editor state."}, {"name": "register", "description": "Registers various UI components and command actions to the TinyMCE editor instance, including buttons for editing code blocks."}], "calls": ["editor.selection.getNode", "editor.selection.getContent", "editor.insertContent", "editor.ui.registry.addIcon", "editor.ui.registry.addButton", "editor.execCommand"], "search-terms": ["TinyMCE", "code blocks", "WYSIWYG editor", "plugin"], "state": 2, "ctags": [], "filename": "/app/data/T0005/17500/esakkiraja100116/BookStack/resources/js/wysiwyg/plugin-codeeditor.js", "hash": "0cc5ecb1662ed7901992cfbe14a31b54", "format-version": 3, "code-base-name": "b8388bl"}