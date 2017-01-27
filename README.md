# national-parks

Firebase

Create a Firebase collection named forests
Create a Firebase collection named visitors
Create a Firebase collection named visitor_favorites
Use the basic Firebase email/password authentication to register users for your application.
You determine the structure of each object in the forests collection. At the very minimum, it should have a name and description property. Use the Firebase console, Postman, CURL, or whatever method you like to get data inserted for each of the collection.

The visitors collection is for storing information about the users that register for your application. When a user registers, their unique id should be stored in the visitors collection.

The structure of the visitor_favorites collection should be as follows.

"{firebase_unique_identifier}" :{
    "forest": "{the unique identifier of a forest",
    "visitor": "{the unique identifier of a visitor"
}
Application

Create an Angular application module.
Create 4 partials for views.
A registration view
A login view
A forest listing view
A forest detail view
Configure your application to support the following routes.
/register
/login
/forests
/forests/favorite
/forest/:id
Write a controller for each of the partials
Write a factory for getting forest related information that the controller for the list view, and the detail view, can both use. It should return an object with at least two functions on it - getForests() and getForest(id). There may be more functions needed. Remember to use the orderBy and equalTo parameters on the request to get single forest.
Write a factory that handles all authentication methods for your application. Both the registration controller and the logic controller should use it.
Forest Details

Display the name and description of the forest - and any other details you are storing - as well as an affordance for the user to favorite the forest, indicating that it will be visited in the future.

Favorites

When the user visits the /forests/favorite URL, the user should see all of the forests that were favorited. There should be a function returned from the forest factory that queries the visitor_favorites collection, and uses the orderBy and equalTo parameters to only return items created by the current user.
