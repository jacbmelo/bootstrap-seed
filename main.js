'use strict'

$(function() {

    // Include header and footer
    Main.include('header', 'header.html', Main.activateCurrentNavLink());
    Main.include('footer', 'footer.html');
});


/**
 * UMD Main module
 * (c) 2017 jacbmelo
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {

    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {

    // CommonJS
    module.exports = factory(require('jquery'));
  } else {

    // Browser globals (Note: root is window)
    root.Main = factory(root.$);
  }
} (this, function ($) {

  // Define Module
  var Main = {

    /**
     * Loads a HTML file into the selector
     * Ex.: Main.include('footer', 'footer.html');
     */
    include: function(selector, filename, callback) {
      console.log('Loading ' + filename + ' into ' + selector + '...');
      $(selector).load(filename, function() {
        callback;
      });
    },

    /*
     * Add class active to nav-link where document.location.pathname contains href
     */
    activateCurrentNavLink: function() {
      console.log('Finding current active nav link for ' + document.location.pathname + '...');
      $('a.nav-link').each(function() {
        var index = document.location.pathname.indexOf($(this));
        console.log('"' + document.location.pathname + '".indexOf("' + $(this).href + '") = ' + index);
        if (index !== -1)  {
          console.log('Current nav link is ' + $(this));
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    },

    /*
     * Loads data from a json file
     */
    loadData: function(filename) {
      $.ajax({
        type: 'GET',
        url: filename,
        async: false,
        dataType: 'json',
        beforeSend: function() {
          console.info('Loading ' + filename + '...')
        },
        success: function(data) {
            return data;
        }
      });
    }
  }

  // Expose object
  return Main;
}));
