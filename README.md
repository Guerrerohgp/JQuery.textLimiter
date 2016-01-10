# Jquery.textLimiter
Simple text field limiter on Jquery
Created to limit input fields and text areas using JQuery.

Is as simple as:

$('.your-input').textLimiter({limit:50, showLabel:true});

The limit parameter is the amount of chars it should allow, the second parameter is to let the plugin add a simple label.
Limit default is "250" chars, and show label default is set to false.

To enable the label is better to put the input or text area inside a container (div, label, etc), so it can be placed correctly.
