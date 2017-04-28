The switchMap operator maps the id in the Observable route parameters to a new Observable, the result of the HeroService.getHero() method.

If a user re-navigates to this component while a getHero request is still processing, switchMap cancels the old request and then calls HeroService.getHero() again.

The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.




To navigate somewhere else, users can click one of the two links in the AppComponent or click the browser's back button. Now add a third option, a goBack() method that navigates backward one step in the browser's history stack using the Location service you injected previously.


Do you need to unsubscribe?
As described in the ActivatedRoute: the one-stop-shop for route information section of the Routing & Navigation page, the Router manages the observables it provides and localizes the subscriptions. The subscriptions are cleaned up when the component is destroyed, protecting against memory leaks, so you don't need to unsubscribe from the route params Observable.