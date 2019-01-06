### 1. Create react app by 'create-react-app' scaffold

`npm i -g create-react-app` used to install the global create-react-app.

`create-react-app app-name` used to create new react app.

`cd app-name` and then `npm start` or `yarn start` to run the app-name.


### 2. Know about the directory of react app

'Yarn.lock': show and lock the dependency package version number. 

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
Here `import './index.css' `, means 'all in js' in react.js, css file can be import in js.

`import App from './App' `, means import App.js file.

` import * as serviceWorker from './serviceWorker' ` means PWA, progressive web application, write the page code to create mobile app supported by https protocol server, and the app can be connect once the offline.

'App.test.js': automation test file.


### 3. Components in react.js

'index.js' is the entry file of the whole project, and it used for connecting 'index.html' and react components. 

In 'index.js' file, 
`ReactDOM.render((<App />, document.getElementById('root')); ` used to mount the component of 'App' on the 'id=root' node in 'index.html'.

In 'App.js' file,
`render() {return (....)}` used to realise the true page structure. `class App extends Component {...}` used to define App class as React Component by inheriting React.Component.

All file must import 'React' to execute jsx syntax.


### 4. JSX syntax

Write html tag in .js file,

### 5. Responsive Design and Event Bundle

`this.state = {}` is the state of components.

Parent components transfer data to Children components by 'props'.

Children components transfer data to parent components by method.

The parent components only can transfer data to children component, but the children cannot modify the data.

Single-direction data flow.

### 6. The principle:

1.state data
2. JSX template
3. Data + template to produce the true DOM.
4. Once state data changes
5. Will data + template to produce the new true DOM.

The Fault:
in the first time, it produces the true completed DOM,
In the second time, it produces the true completed DOM again,
It will cost performance too much.

So :

1. State data
2. JSX template
3. Data + template to produce true DOM,
4. State changes
5. Data + template to produce the new true DOM again,
6. But not replace the old DOM,
7. The new DOM will compare with the old one,
8. Get the difference,
9. Then only replace the difference with old one.

But the cost performance still little much.

In the end, it will:

1. State data,
2. JSX template
3. Data + template to produce the true DOM
4. Produce the virtual DOM (vDOM is the JS object, used to express the true DOM), such as ['div', {id: 'abc'}, ['span', {}, 'hello world'] ]
5. State changes
6. Produces the new virtual DOM, such as  ['div', {id: 'abc'}, ['span', {}, 'good luck'] ]
7. Compare the new virtual DOM with the old vDOM, get the difference
8. Execute true DOM to change to the new true DOM.


But in fact:

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

### 7. Life cycle function

The function executed on the time slot,

1.Initialisation: setup props and state, constructor()
Mounting: componentWillMount (this component will be mounted on the page, and only executed once. But remember that the child firstly mount on the page will not execute.), render (mount component on page), componentDidMount (component did mount on page, and only executed once)

2.updating: props: componentWillReceiveProp (when the component receive props from its parents component, and the parent component render func executes.), shouldComponentUpdate (return true or false ), (return true to) componentWillUpdate, render, componentDidUpdate.

3.Updating: state:
shouldComponentUpdate (return true or false), (return true to) componentWillUpdate, render, componentDidUpdate.

4.Unmounting: componentWillUnmount,and will exist on child component.

Note:
Render must exist, parent render leads to child render.

### 8. React performance optimisation：
1.put `this.handle.. = this.handle...bind(this)` in 'constructor' functions, so only executes once.
2. setState executing many times only leads to one time vDOM comparison.
3. Same level DOM comparison
4. Set `shouldComponentUpdate` to avoid render many times.
5. Ajax request put in 'componentDidMount' function.

### 9. Redux
1. Store is the solo one, which means that here have only one store in the whole project,
2. Only store can change its 'content' --- state, but not the reducer,
3. Reducer must be the pure function, which means that it has the 'fixed' output on the 'fixed' input, and not the 'bad' output.

The Redux Apis:
createStore, store.dispatch, store.getState, store.subscribe

UI component, Container Component, Stateless component: only has render function,



















 