/// <reference path="../logger/logger.js" />
/* global require */
// simple xhr client

require("../logger/logger.js");

(function (ns) {

  ns.modules.XHRClient = function (serviceUrl) {
    var me = this;

    me.Debug = false; // only send messages to console if debug is true

    me.getClient = function () { //function to create an instace of remote client

      var client = null; // variable to hold new instace of XHR/CORS instance

      if (typeof XMLHttpRequest != "undefined") { //if XMLHttpRequest is supported
        // ReSharper disable once InconsistentNaming
        client = new XMLHttpRequest(); // create instance
      } else if (typeof ActiveXObject != "undefined") { // if ActiveXObject is supported
        client = new ActiveXObject("Microsoft.XMLHTTP"); // use ActiveX implementation
      } else {
        throw new Error("XMLHttpRequest not supported"); // Report that can't connect to remote datasource
      }

      if ("withCredentials" in client) { // if object supports withCredentials => CORS

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.

      } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        client = new XDomainRequest(); // create an instance of XDomainRequest

      }

      return client; // return new instance

    }

    me.gotGetResponse = function (/*e*/) {
    } // empty function to handle Server Get Responses, inherited by subclasses

    me.gotPostResponse = function (/*e*/) {
    } // empty function to handle Server POST Responses, inherited by subclasses

    me.Log = function (msg) { // function to log application events

      if (me.Debug && typeof (console) != "undefined") // if console is defined
        console.log(msg); // send message to console

    }

    me.OnStatusChange = function (sender, args, action) { // function to handle status changes of xhr

      var client = args.currentTarget; // reference to xhr

      if (args.readyState === 4 || client.readyState === 4) { // check status of operation

        this.handleReadyStatus(sender, client); // call infrastructure operations

        if (action === "POST") { // if post
          sender.gotPostResponse(args); // handle post response
        } else if (action === "GET") // if get
          sender.gotGetResponse(args); // handle get response
      }
    }

    me.handleReadyStatus = function (sender, client) { // function to perform log and update visual cue

      sender.Log(`Response: ${client.statusText}`); // log message

    }

    me.makeRequest =
      function (url, action, request, responseType) { // function to perform a request and set up handlers

        this.Log(`Request: ${url} ${action} ${request}`); // report request

        var client = this.getClient(); // create instance of XHR/CORS client

        client.open(action, url, true); // open client

        if (responseType)
          client.responseType = responseType;

        if (action === "POST") { // if POST request
          if ("contentType" in client) { // if CORS request
            //                client.contentType = "application/json";
            //                client.contentType = "text/plain"; // CORS specification requires messages to be plain text
          } else
            client.setRequestHeader("Content-Type", "application/json"); // set content type header

        }

        client.onreadystatechange = function (/*e*/) { //function to handle ready state change event

          me.Log(`onreadystatechange - Status: ${client.statusText} State: ${client.readyState}`); // report action

        };

        // Response handlers.
        client.onload = function (e) { // function to handle load event

          me.Log("onload"); // report action

          // depending on this being a regular xhr request or a cors request
          // the value of currentTarget will be null or not
          const args = { currentTarget: client, readyState: 4 }; // argument

          me.OnStatusChange(me, args, action); // call internal function to bubble up event to consumers

        };

        client.onsuccess = function () { //function to handle the success event

          me.Log("Success"); // report action
        };

        client.onerror = function (/*e*/) { // function to handle error events

          me.Log("Error"); // report action

        };

        client.onprogress = function () { // function to handle progress change events

          me.Log("onprogress"); // report action

        };

        client.send(request); // send request

      }

    me.getUrl = function (url) { // function to perform a GET request

      this.makeRequest(this.ServiceUrl + url, "GET", null); // call internal implementation
    }

    me.postUrl = function (url, request, responseType) { // function to performa a POST request

      this.makeRequest(this.ServiceUrl + url, "POST", request, responseType); // call internal implementation
    }

    me.ServiceUrl = serviceUrl;

  };
})(spexplorerjs);
