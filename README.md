# PotterSpells

Is a WebApp that allows you to visualize many of the spells, curses, enchantments and charms of Harry Potter´s saga. 

You can quickly know about name, effect and classification of spell with a image can be identified category.


## How I built this application
The sprint planning avalaible [here](https://trello.com/b/ShiZeT6Y/prueba-t%C3%A9cnica-runahr)

!

This project was very challenging in many aspects, when I received the challenge and read the goals, the first thing I identified was choosing the "theme".

The first steps were:

1. Review the available APIs and make requests with Postman to observe the data and how "encapsulated" it was.

    I chose an API that required a key to use and with the data that I like the most.

2. The creation of the project with React and the installation of the dependencies required just like REDUX and the AirBnB style guide.

The "create-react-app" command was used, so it worked on the folder structure it offers, such as build, public, package.json, etc.

3. For the architecture, I investigate the use of Redux and React Hooks, then I discovered that according with RunaHR-test, it was necessary to emulate a FLUX architecture.

4. Routing was created at the entry point of the application, so the routes direct to the views, in a VIEWS folder.

5. The "store" and the "reducer", were written in a REDUX folder.

6. The data was consumed without a library and so that it could be used when loading the page I created my own "useFetch" hook inside a functional component, in a DATA folder.

7. The necessary components for the home view were created as a "Navbar" and a "Card" which receives as "props" the information from the apiData component. Each component is saved in its own folder with the corresponding style file, in a COMPONENTS folder.

8. All images used in the application are in an ASSETS folder.

## Next steps

According to the goals below, my next steps would be to fix the use of redux and create a middleware to better used of the store, add a "favorite" button to the data card to send to another component in the one that could delete an item, the hooks were already used so... this action depends on the use of a reduce to control the state in another view.

I want to keep learning about Redux.

- [x]   Set up a green field project using react and redux

- [x] Get information from an open api

- [x] Use redux to store and control your information.

- [ ] Use the redux state to build a list of items

- [ ] Allow us to load more items and delete items from the list using hooks.

- [x] Make it pretty

- [ ] Write unit tests. Writing tests is required for senior positions.

- [x] Deploy this project to a public url, this is to insure we can test your app and how it works.

### Thanks!
 



