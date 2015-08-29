var EventListing = (function () {

    var DEFAULT_EVENTS_JSON = "https://gist.githubusercontent.com/yiwenluo/9d60c89c8e019151f2a3/raw/yiwenluo-events.json";
    
    /**
     * Initialize the page by loading the events from the default URL
     */
    function initialize() {
        console.log("Initialzie Page with Default URL");
        showEventsFromUrl(DEFAULT_EVENTS_JSON);
    }

    /**
     * Create a DOM element to show the details of a event. 
     * If this was done in a larger project, a more maintainable way could be
     * using templates like Handlebars or framework like React. 
     * @param {Object} an event object
     * @return {DOMElement} DOM Elements that represnet
     */
    function createEventElement(event) {
        // create a wrapping div
        var div = $('<div></div>');
        div.addClass('eventWrapper');
        
        // create the div eleemnt to show the name of the event
        var occasionDiv = $('<div></div>');
        occasionDiv.addClass("occasion");
        occasionDiv.text(event.occasion);

        // create the div element to show the invisted count
        var invitedDiv = $('<div></div>');
        invitedDiv.addClass('invited-count');
        invitedDiv.text("Invited: " + event.invited_count);

        // create the div element to show the date of the event
        var dateDiv = $('<div></div>');
        dateDiv.addClass('date');
        var date = new Date(event.year, event.month, event.day);
        dateDiv.text("Date: " + date.toLocaleDateString());

        // append childrens to the wrapping div
        div.append(occasionDiv)
            .append(invitedDiv)
            .append(dateDiv);
        return div;
    }

    /**
     * Render the list of events in DOM
     * @param {Array} List of events to render
     */
    function renderEvents(events) {
        // remove all children (existing events)
        $('#eventsPanel').empty();
        // append new children (new events)
        for (var i=0; i<events.length; i++) {
            var event = events[i];
            var eventElement = createEventElement(event);
            $('#eventsPanel').append(eventElement);
        }
        $('#eventsPanel').show();

        /**
         * NOTE: 
         * This is not the more efficient way to update events shown on the page.
         * Ideally, we should perform as less update on the DOM as possible. 
         * Using framework like React would help, or we can calculate the difference
         * between the events and udpate the DOM only with the difference.
         */
    }

    /**
     * Display error message on the screen with given verbiage
     * @param {String} text to display as error message
     */
    function showErrorMessage(verbiage) {
        $('#eventsPanel').hide();
        $("#error").text(verbiage).show();
    }

    /**
     * Get the events from the given URL and render on the screen. 
     * If there is any error display error message. 
     * @param {String} URL to the events JSON file
     */
    function showEventsFromUrl(url) {
        $.getJSON(url)
            .then(function (data) {
                var events = data.events;
                console.log("Loaded %s events from %s", events.length, url);

                if (events.length > 0) {  
                    $("#error").hide();
                    renderEvents(events);
                }
                else {
                    showErrorMessage("Error! There is no event to show from the provided URL \n" + url);
                }
            },
            function () {
                showErrorMessage("Error! Unable to load event from the provided URL \n" + url);
            })
    }

    // initialize the page when DOM is ready
    $(document).ready(initialize);

    return {
        /**
         * Public API that allow updating the event list from a new URL
         * See function defintion for more documentation
         */
        showEventsFromUrl: showEventsFromUrl
    };
})()