{"is_source_file": true, "format": "JavaScript", "description": "This file defines an AjaxForm component that handles form submissions via AJAX, supporting both real HTML forms and fake forms. It manages events related to form submission and processes input data to send it asynchronously to a specified server endpoint.", "external_files": ["../services/dom", "./component"], "external_methods": ["onEnterPress", "onSelect"], "published": ["AjaxForm"], "classes": [{"name": "AjaxForm", "description": "A component that manages AJAX form submissions, handling button clicks and enter key events to submit data and process responses."}], "methods": [{"name": "setup", "description": "Initializes the component by configuring the container, response areas, and setting up listeners for events."}, {"name": "setupListeners", "description": "Sets up event listeners for form submission and button clicks, distinguishing between real form elements and fake form functionality."}, {"name": "submitFakeForm", "description": "Handles submissions from fake forms by collecting input data and calling the submit method."}, {"name": "submitRealForm", "description": "Prevents the default form submission behavior and collects form data for AJAX submission."}, {"name": "submit", "description": "Submits the form data via AJAX to the specified endpoint and processes the server response, updating the UI accordingly."}], "calls": ["window.$http[this.method.toLowerCase()]", "window.$emit", "window.$events.emit", "window.$components.init"], "search-terms": ["AjaxForm", "AJAX submission", "form handling"], "state": 2, "ctags": [], "filename": "/app/data/T0005/17500/esakkiraja100116/BookStack/resources/js/components/ajax-form.js", "hash": "6916cbb39b6e0104be8d60c636490c65", "format-version": 3, "code-base-name": "b8388bl"}