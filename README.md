
## TodoList-ReactJS-Demo



### Introduction

In this project I will show how to finish a TodoList by React.js in an even process, which from simple to complicated one including redux, antd, axios, redux-thunk, redux-saga and react-redux. I also introduce the 'react-transition-group' plugin in one animation project called 'ToggleAndAdd'.

### Preparation

#### 1. Create react app by 'create-react-app' scaffold

`npm i -g create-react-app` used to install the global create-react-app.
`create-react-app app-name` used to create new react app.
`cd app-name` and then `npm start` or `yarn start` to run the app-name.

#### 2. Know about the directory of react app
 
'README.md': write the markdown file by ourselves.
'package.json': show the project introduction and dependency package, the define the react-scripts to run, build and test the project, and other browsers version limitation.
'gitignore': ignore the selected files when upload the project to git online.
'node_modules': the stored dependency packages.
'public': 
'favicon.ico': the icon in the navigation bar.
'index.html': the homepage template in the project.
'manifest.json': config the shorcut of the PWA mobile app.
'src': the project source code.
'index.js': the entry file the whole project.

Note: 
` import * as serviceWorker from './serviceWorker' ` means PWA, progressive web application, write the page code to create mobile app supported by https protocol server, and the app can be connect once the offline.
'App.test.js': automation test file.

#### 3. Components in react.js

'index.js' is the entry file of the whole project, and it used for connecting 'index.html' and react components. 
In 'index.js' file, 
`ReactDOM.render((<App />, document.getElementById('root')); ` used to mount the component of 'App' on the 'id=root' node in 'index.html'.
In 'App.js' file, `render() {return (....)}` used to realise the true page structure. `class App extends Component {...}` used to define App class as React Component by inheriting React.Component. All file must import 'React' to execute jsx syntax.

#### 4. Responsive Design and Event Bundle

`this.state = {}` is the state of components. Parent components transfer data to Children components by 'props'. Children components transfer data to parent components by method. The parent components only can transfer data to children component, but the children cannot modify the data. It is Single-direction data flow.

#### 5. The vDOM principle:

1. State data
2. JSX template
3. Data + template to produce virtual DOM
4. The virtual DOM produces true DOM
5. State changes
6. Data + template to produce the new virtual DOM
7. Compare the new virtual DOM with old vDOM
8. Get the difference: Diff algorithm.
9. Directly execute the true DOM
10. JSX -> createElement -> JS OBJECT (VIRTUAL DOM) -> THE TRUE DOM
11. The vDOM can produce true DOM in webpage, and vDOM can produce the component in original app (iOS or android).
12. setState is asynchronous func, which means many setState only lead to one time virtual DOM comparision.
13. Comparing difference follows the rules: compare the same level DOM. When find the top level DOM is different, their children level DOM will be discarded.

#### 6. Life cycle function

1.Initialisation: setup props and state, constructor()
Mounting: componentWillMount (this component will be mounted on the page, and only executed once. But remember that the child firstly mount on the page will not execute.), render (mount component on page), componentDidMount (component did mount on page, and only executed once)
2.updating: props: componentWillReceiveProp (when the component receive props from its parents component, and the parent component render func executes.), shouldComponentUpdate (return true or false ), (return true to) componentWillUpdate, render, componentDidUpdate.
3.Updating: state:
shouldComponentUpdate (return true or false), (return true to) componentWillUpdate, render, componentDidUpdate.
4.Unmounting: componentWillUnmount,and will exist on child component.
5. Parent component 'render' lead to child component 'render'.

### 7. React performance optimisation：

1.put `this.handle.. = this.handle...bind(this)` in 'constructor' functions, so only executes once.
2. setState executing many times only leads to one time vDOM comparison.
3. Same level DOM comparison
4. Set `shouldComponentUpdate` to avoid render many times.
5. Ajax request put in 'componentDidMount' function.

#### 8. Redux

1. Store is the solo one, which means that here have only one store in the whole project.
2. Only store can change its 'content' --- state, but not the reducer.
3. Reducer must be the pure function, which means that it has the 'fixed' output on the 'fixed' input, and not the 'bad' output.

The Redux Apis:
createStore, store.dispatch, store.getState, store.subscribe


### Project Steps

#### 1. First edition: 'TodoList1'

##### The core ideas of React.js:

1. State decides component;
2. data stores in 'this.state', and JSX objects stores in template created by 'render' method;
3. component can bind with event which copies the previous state and then modifies and updates the state;
4. the new states will reflect in the components and modify the component;
5. in one word, state decides component.

Here I only use react.js to complete TodoList project, in which I click button to add list item and click item to delete itself.

##### Some key points:

1. Need to konow that one file is one component, and 'this' points to this sole component in one file. So that's why we use '{this.event}' in the component, and event.bind(this)'.
2. ref={(el) => {this.el = el}} is used for get component in React.js, but not commended.
3. setState(() => {}, () => {this.ul.querySelectorAll('li').length}) method can execute asynchronous one.
4. dangerouslySetInnerHTML={{__html: item}} can input styled tag, such as title in h1 tag.


#### 2. Second Edition: 'TodoList2' and 'TodoItem2'

##### The core ideas of React.js
1. The parent component transfer state to its children component by 'props';
2. the children component transfer state to its parent component by call the parent component methods;
3. we can set props by 'prop-types' in child component;
4. when child component receive the props from parent one, we can set props type and also set default value;
5. understanding lifecycle functions execution sequence.

In this edition, I decompose the 'TodoList1' component to parent component 'TodoList2' and child component 'TodoItem2'. In the child component we set prop type and set default value. In the end, we excute some lifecycle functions both in parent component and child one, in order to understand the lifecycle funcs execution sequence.

##### Some key points:

1. lifecycle funcs includes:
    constructor, render, componentWillMount, componentDidMount, componentWillUpdate, componentDidUpdate, componentWillReceiveProps, shouldComponentUpdate, componentWillUnmount;
2. 'constructor', 'componentWillMount' and 'componentDidMount' execute on page loads first time;
3. 'componentWillUpdate', 'componentDidUpdate' execute when page component update;
4. 'render' executes when page load first time or page components update;
5. 'shouldComponentUpdate' return true or false to define whether the component update;
6. 'componentWillReceiveProps' executes when the component update or load second time;
7. 'componentWillUnmount' executes when component unloads;
8. the parent 'render' method trigger child component 'render' method;
9. the normal sequence of lifecycle funcs is that, 
    load page first time: 
    constructor - componentWillMount - render - componentDidMount
    page component update:
    componentWillUpdate - render - componentDidUpdate
    page component unload:
    componentWillUnmount;
10. notice 'shouldComponentUpdate(nextProps, nextState)' parameters;
11. ajax getting data from server normally executes in 'componentDidMount'.

#### 3. Third Edition: 'App3'

##### The core ideas of React.js
React component can set style by className={...}, and import style.css file to srealize the different style. It also can import {CSSTransition, TransitionGroup} from 'react-transition-group' plugin to add styled component.

In this stage, I will talk about how to use original css or import CSSTransition and TransitionGroup components to control style.

##### Some key points:

CSSTransition has some parameters and TransitionGroup should use with CSSTransition.

#### 4. Fourth Edition: 'TodoList4' and 'store'

##### The core ideas of React.js
In order to goven the state among different React components in the complicated project, Redux is created to control the whole data in store. It will the following principles: 
1. Store all state in the 'store';
2. component provides methods (action) to modify the state by 'dispatich(store)';
3. 'store' receive the state and check the action type to deal with these states in 'reducer.js';
4. react component get the modified state and change its outline by 'describe(action)'.

In this project, I will use Ant design plugin to rewrite the TodoList project, and import 'redux' to store the state, all the state will be modified through 'store.dispatch' and 'store.subscribe' method.

##### Some key points:
1. we cannot change the previous state,but copy the previous one to the new state, and modify the new state and return it as well;
2. normally, the 'store' folder contains four files: 'index.js', 'reducer.js', 'actionTypes.js' and 'actionCreators.js';
3. component dispatch action created in 'actionCreators.js' to 'index.js'; 'index.js' get the new state and action, and transfer to 'reducer.js'; 
4. 'reducer.js' will get these action by types created in 'actionTypes.js' and deal with these action and return the new state to store;
5.  if store get the new state, the component will get the new ones by subscribe method;
6.  action is one object including 'type' and maybe 'value';

#### 5. Fifth Edition: 'TodoListContainer5', 'TodoListUI5' and 'store'

##### The core ideas of React.js
Normally, loading the data from server by 'axios' in 'componentDidMount' method, because this method only executes once when load page. One component only with 'render' function is called stateless component, so this component can be written in function but not class. 

In this stage, I decompose the previous todolist component to container and UI, and load data in 'componentDidMount'. I also load the data from server by 'charles' app in 'componentDidMount' method.

##### Some key points:
1. When decompose to container and UI components, UI get state by 'props';
2. in code `<List.Item onClick={() => {handleItemDel(index)}} >{item}</List.Item>)}`, when click List.Item, it will trigger the function `() => {handleItemDel(index)}`, which means call the function but NOT get the function result. This function will transfer to Container component, and in 'TodoListContainer5.js', 'handleItemDel' will be executed here, which is similar as 'handleItemDel' in  2nd edition;
3. stateless component `class TodoListUI5 extends Component {}` is one Class (object), while `const TodoListUI5 = (props) => {}` is one function, the latter is more optimatized than the ealier one;
4. the function can add parameter of 'props' to get props from its parent component;
5. familiar with `axios.get().then((res) => {}).catch()` method which is an asynchronous function;
6. here 'res' is the result from server.

#### 6. Sixth Edition: 'TodoListThunk6', 'TodoListUI5' and 'store'

##### The core ideas of React.js
The 'redux-thunk' is a middleware that applied between 'actionCreator' and 'store', which lets 'action' can return function. The 'thunk' can let action execute some asynchronous function such as ajax method.

In this stage, I import 'redux-thunk' and create the new action in 'actionCreators.js'.

##### Some key points:
 1. The new method 'getThunkListAction' can return the function, who execute ajax method;
 2. it includes parameter 'dispatch', which means 'store.dispatch'.

#### 7. Seventh Edition: 'TodoListSaga7', 'TodoListUI5' and 'store'

##### The core ideas of React.js
Same as 'redux-thunk', 'redux-saga' is also the middleware applied between actionCreator and store. The 'redux-thunk' only let action return function which can be executed in 'actionCreators.js', but 'redux-saga' will create a file named 'sagas.js', and this file is similar as 'reducer.js', in which can deal with the action and get result to return to component.

I import 'redux-saga' and create 'sagas.js', put the axios method in 'sagas.js'.

##### Some key points:
1. Remember that 'redux-thunk' and 'redux-saga' are both middlewares applied between actionCreators and store;
2. redux-saga create one new file named 'sagas.js', which is similar as 'reducer.js';
3. the action 'getSagaListAction' created in 'actionCreators.js' and dispatch to 'sagas.js' and 'reducer.js';
4. in 'sagas.js' it confirms the action by 'action type' and executes the asynchronous method by generator function;
5. note that the difference between 'thunk' and 'saga';
6. for 'thunk', axios method applied in 'actionCreators.js';
7. for 'saga', axios method applied in 'sagas.js' with generator function.


#### 8. Eighth Edition: 'TodoListReactRedux8', 'TodoListUI5' and 'storeReactRedux'

##### The core ideas of React.js
'react-redux' is a plugin to be compatible to deal with state and props.
`connect(mapStateToProps, mapDispatchToProps)(component)` will connect the propss with component.

On the 8th stage, I will use 'react-redux' to deal with react component and its state, and then I repeat the 'redux-thunk' and 'redux-saga' to deal with axios method.

##### Some key points:
1. 'mapStateToProps' means that transfer the 'states' created in 'reducer.js' to component props;
2. 'mapDispatchToProps' means that transfer the 'methods' bind with 'component' to component props;
3. {Provider} is gotten from 'react-redux', it will wrapp the real component, and bind 'store' props, which means that the whole components in 'Provider' can use these 'states' and 'methods' as props.

### Talk More About Todo-Project

The previous project only focus on the data-source in '["", ""]' type, here I will use data-source in '[{}, {}]' type, and add some buttons to filter the list.

#### Step One

Realize the basic todo project, put all 'App, AddTodo, TodoList, Footer' components in 'components' directory, and 'App' is the entry file.




























