# @SkipSelf()
If you want a Component to have its own instance of a Service and at the same time to have an instance of its parent's service you have to take a look at `@SkipSelf()`

Consider the following code
```typescript
class Service {
    someProp = 'Default value';
}

@Component({
  providers : [Service] // Child's instance
})
class Child {
  constructor(
    @SkipSelf() parentSvc: Service, 
    svc: Service
    ) {
        console.log(pSvc.someProp); // Prints 'Parents instance'
        console.log(svc.someProp);  // Prints 'Default value'
    }
}

@Component({
  providers : [Service] // Parent's instance
})
class Parent {
  constructor(svc: Service) {
    svc.someProp = 'Parent instance';
  }
}
```
With `@SkipSelf()` we are telling the component to start the dependency resolution from the parent injector (the name SkipSelf says a lot, I guess).

You can read more about visibility in [Host and Visibility in Angular 2's Dependency Injection](https://blog.thoughtram.io/angular/2015/08/20/host-and-visibility-in-angular-2-dependency-injection.html).

# @Optional()
The `@Optional()` decorator is meant as an annotation for injecting services with the constructor. Those services are then marked as optional and no exception will be thrown if the service can't be resolved or no provider for it can be found in the hierarchy.


# ModuleWithProviders
returns the module plus providers that we need, but because the name of the method is `forRoot`, Angular will know how to use it: 
>it will create the module context and the services declared in providers.