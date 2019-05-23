/**
 * 
 * https://www.linkedin.com/learning/javascript-and-ajax-integration-techniques/using-a-synchronous-xhr-request
 * 
 * How Browsers work?
 * 
 * - A browser requests a page
 * - Client requests info from the server
 * - Users sometimes request additional info
 * 
 * Without AJAX
 * 
 * - Make a request back to server
 * - Receive entire page again
 * - lots of info you don't need
 * 
 * With AJAX
 * 
 * - server doesn't send entire page
 * - Only sends piece you need
 * - updates the thumbnails
 * 
 * How AJAX works?
 * 
 * - Asynchronous JavaScript and XML
 * - Requests without reload
 * - JavaScript for heavy lifting
 * - Talks to server through XHR
 * 
 * What XHR isn't!
 * 
 * - Not XML
 * - AJAX request can be in any format
 *  - Text File
 *  - HTML
 *  - JSON Object
 */

let request = new XMLHttpRequest();

request.open('GET', 'data.txt', false);

request.send();

console.log(request);

