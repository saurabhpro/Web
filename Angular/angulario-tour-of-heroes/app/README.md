# {{ }}
The double curly braces are Angular's interpolation binding syntax. These interpolation bindings present the component's title and hero property values, as strings, inside the HTML header tags.

# You don't call new to create an instance of the AppComponent class. Angular is creating an instance for you. How?

When you bootstrap with the AppComponent class (in main.ts), 
Angular looks for a <my-app> in the index.html, finds it, 
instantiates an instance of AppComponent, and renders it inside the <my-app> tag.

# Template inline or template file?

You can store your component's template in one of two places. You can define it inline using the template property, or you can define the template in a separate HTML file and link to it in the component metadata using the @Component decorator's templateUrl property.

The choice between inline and separate HTML is a matter of taste;