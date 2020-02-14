- [ ] Why would you use class component over function components (removing hooks from the question)?

I will use Class over function because I can manage my state in one single objects and don't have to define or write every state I'm managing or watching like I will do  with function.


- [ ] Name three lifecycle methods and their purposes.
<i> componentDidMount... This is when we can make call to API to get data, since the component already painted to the DOM. Now is the best time because there won't be any ASYNC affecting the component from rendering for the initial render.

<ii>
componentsDidUpdate this is for update state and setting state, this method allow the component to re render base on the status of state also known as setState which is the main purpose of React. It take two args prevProps and PreState.
- [ ] What is the purpose of a custom hook?
It allow us to hook into React and write our data which allow us to control the state of our component.

- [ ] Why is it important to test our apps?

To be able to debug and find bugs that may brake our apps after or during production. This allow us to give the user of our app a good user experience and not allowing our app to crash while they're using it. It also help us to refactor our code or for whoever is reading our code and other developers to be able to refactor or make changes.
