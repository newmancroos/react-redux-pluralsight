# Starter Kit for [Building Applications in React and Redux](http://www.pluralsight.com/author/cory-house) on Pluralsight

## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)(https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
5. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

### Development Dependencies

| **Dependency**                  | **Use**                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| @babel/core                     | Transpiles modern JavaScript so it runs cross-browser            |
| babel-eslint                    | Lint modern JavaScript via ESLint                                |
| babel-loader                    | Add Babel support to Webpack                                     |
| babel-preset-react-app          | Babel preset for working in React. Used by create-react-app too. |
| css-loader                      | Read CSS files via Webpack                                       |
| cssnano                         | Minify CSS                                                       |
| enzyme                          | Simplified JavaScript Testing utilities for React                |
| enzyme-adapter-react-16         | Configure Enzyme to work with React 16                           |
| eslint                          | Lints JavaScript                                                 |
| eslint-loader                   | Run ESLint via Webpack                                           |
| eslint-plugin-import            | Advanced linting of ES6 imports                                  |
| eslint-plugin-react             | Adds additional React-related rules to ESLint                    |
| fetch-mock                      | Mock fetch calls                                                 |
| html-webpack-plugin             | Generate HTML file via webpack                                   |
| http-server                     | Lightweight HTTP server to serve the production build locally    |
| jest                            | Automated testing framework                                      |
| json-server                     | Quickly create mock API that simulates create, update, delete    |
| mini-css-extract-plugin         | Extract imported CSS to a separate file via Webpack              |
| node-fetch                      | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                     | Display results of multiple commands on single command line      |
| postcss-loader                  | Post-process CSS via Webpack                                     |
| react-test-renderer             | Render React components for testing                              |
| react-testing-library           | Test React components                                            |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                 |
| redux-mock-store                | Mock Redux store for testing                                     |
| rimraf                          | Delete files and folders                                         |
| style-loader                    | Insert imported CSS into app via Webpack                         |
| webpack                         | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer         | Generate report of what's in the app's production bundle         |
| webpack-cli                     | Run Webpack via the command line                                 |
| webpack-dev-server              | Serve app via Webpack                                            |

<p>
    <h2>An Introduction to Reducer in Javscript</h2><br>
    Reducer is a javascript function which takes two aruguments 
    <ul>
        <li>State</li>
        <li>Action</li>
    </ul>
    and return new state<br>
    ex.<br>
    <pre>
        function counterReducer(state, action)
        {
            return state + 1;
        }
    </pre>
    state may contains fields that use in the component<br>
    action contains 
    <ul>
        <li>Type of operation</li>
        <li>Payload</li>
    </ul>
    <br>
    ex.<br>
    <pre>
        function counterReducer(state, action)
        {
            switch(action.type){
                case "Increment":
                    return "Increment";
                case "Decreament":
                    return "Degrement";
                default:
                    return state;
            }
        }
        <br>
        counterReducer(0, {type : "Increment"}); //1
        counterReducer(1, {type : "degement"}); //0
    </pre>
    State may not be a simple premitive type but may be an object that contains many fields.<br>
    ex.<br>
    <pre>
        function counterReducer(state, action){
            switch(action.type){
                case "Increment":
                    return {...state, counter : state.counter + 1};
                case "Degrement":
                    return {...state, counter : state.counter - 1};
                default:
                    return state;
            }
        }
        var result = counterReducer({id:1, name:"Newman", counter:1}, {type : "Increment"});
    </pre>
    <br>ex.<br>
    <pre>
        function counterReducer(state, action){
            switch(action.type){
                case "ChangeName":
                    return {...state, name : action.payload.name};
                case "ChaneEmail":
                    return {...state, email : action.payload.email};
                default:
                    return state;
            }
        }
        var result = counterReducer({id:1, name:"Newman", email:"test@test.com"}, {type : "ChangeName", payload : {}name:"Newman Croos", email : "newmancroos@gmail.com"});
    </pre>
</p>
<p>
    React Context and Provider/consumer???????
</p>
<p>
    <h2>Redux Implementation</h2><br>
    <p>
        There are three method to handling state across components
        <ul>
        <li>
            Lift State - Passing state from parent to the child using props
        </li>
        <li>
            React Context  -  Using React context, provider and consumer
        </li>
        <li>
            Redux - Has a centerlized Store and component connected with store can get the updated data and using action any component update the date in the store.<br>
            <img src="./images/Redux.png" />
        </li>
        </ul>
    </p>
</p>
