{"is_source_file": true, "format": "JavaScript", "description": "A React component that manages a list of file attachments and modifies the links based on key events to add or remove a query parameter.", "external_files": ["./component"], "external_methods": ["Component"], "published": ["AttachmentsList"], "classes": [{"name": "AttachmentsList", "description": "A component that handles adding and removing a query parameter to attachment links based on whether the control or meta key is pressed."}], "methods": [{"name": "setup", "description": "Initializes the component and sets up event listeners."}, {"name": "setupListeners", "description": "Sets up keydown and keyup listeners to handle the addition and removal of the 'open=true' query parameter."}, {"name": "addOpenQueryToLinks", "description": "Adds '?open=true' to all links with the class 'attachment-file' when the control or meta key is pressed."}, {"name": "removeOpenQueryFromLinks", "description": "Removes the '?open=true' query parameter from all links with the class 'attachment-file' when the control or meta key is released."}], "calls": ["window.addEventListener", "this.container.querySelectorAll"], "search-terms": ["AttachmentsList", "addOpenQueryToLinks", "removeOpenQueryFromLinks"], "state": 2, "ctags": [], "filename": "/app/data/T0005/17500/esakkiraja100116/BookStack/resources/js/components/attachments-list.js", "hash": "001cabadb284521b24516bc3ac866d5d", "format-version": 3, "code-base-name": "b8388bl"}