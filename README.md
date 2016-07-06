# Express Resources Reteach


## Postman
One tool that you can use to test APIs is Postman. Postman gives you a GUI access to the power of ``curl``. It's often a bit 
overkill for GET requests but it provides a nice interface for POST and PUT requests.

### Installation
You can download a native Mac version of [here](https://www.getpostman.com/app/postman-osx?utm_source=site&utm_medium=homepage&utm_campaign=macapp).

To install just click the downloaded file to unzip it, click the file to open it and agree to install it.

### Using Postman
There are two main sections that you need to update in Postman, the headers section, and body section. 

The header represents the additional information that your request is sending. The main header we will need is ``Content-Type``. This tells the server what type of data we're sending. The main values we'll use in this class is ``application/json``. 

The body is the actual data your sending. I recommend using the raw option so that you completely understand what your sending. In 
the raw section you can type in your JSON directly. You can also use the form option if your JSON doesn't include objects or arrays.

### Collections
Another major advantage of Postman is that you can store groups of requests into collections. A collection can be imported using the import button at the top of the screen. Once you import the collection you can make the requests in the collection just by clicking a button.

## REST
REST is based around the concept of a Resource. A resource is just an object and a standardized set of URL routes for accessing 
information around those objects. Here are the RESTful routes:

Name	| Format				| Meaning
-----------------------------------------------------------------------------------
Index	| GET resource/			| Return multiple, often all instances of the resource
Show	| GET resource/:id		| Return a single resource with :id 
Create	| POST resource/		| Create a resource
Update	| PUT resource/:id		| Update resource with :id 
Delete	| DELETE resource/:id	| Delete resource with :id
Edit	| GET resource/:id/edit	| Typically HTML only, form or information to update resource with :id
New		| GET resource/:id/new	| Typically HTML only, form of information to create resource 

To say that an API is RESTful means that if the API implements functional that corresponds to a RESTful action it uses the RESTful 
route. A RESTful API may not use all of the routes but if a functionality is present then it is accessed with the RESTful route. 
There may be additional query parameters that help control the information that is returned.  REST APIs may have additional routes that are more specific to the resource if needed.

### Candies Resource
Our basic resource for this lab is the candy object. 

```javascript
{
	id: 1,
	name: "chewing gum,
	color: "red"
}
```

## Requirements
The goal for the lab is to write enough code so that all of the requests in [this collection]() are implemented.

A basic starter code version has been included in this repo.

### Bonus
1. How can you help guard against candies being created that don't meet all the requirements(id, name, color)? 
2. Can you add better error handling to the API 
	1. Return status code 404 if there 
	2. Return status code 422 if there is not enough information to create or 
3. Refactor the routes in a controller file.


