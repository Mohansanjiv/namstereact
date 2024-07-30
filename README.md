# lecture 1

## HTML

## Questions and answer

### What is Emmet?

-Emmet is a set of plug-ins for text editors that allows for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist. The project was started by Vadim Makeev in 2008 and continues to be actively developed by Sergey Chikuyonok and Emmet users.
And Emmet does fulfill what they promise, you can use short expressions to generate HTML markup, CSS.

- Series of expression:-
  1. Generating HTML Skeleton
  2. Elements with text content inside them div{This is a div}
  3. Nested elements ul>li\*3>a
  4. What about classes and Id:-div#main.container.responsive
  5. Custom attributes div[data-name=logo]
  6. Generating Siblings. (header+div+footer)
  - Let’s say you want to have a header tag, div tag, footer tag. What would you do?
  7. Grouping- div>(a>p>span+span)\*3
  8. Lorem Ipsum- lorem lorem\*5

## CSS

- Margin of 10 on all sides
  - m10–10–10–10
  - margin: 10px 10px 10px 10px;
- padding : padding: 10px 10px 10px 10px;

## Difference between a Library and Framework?

## Library vs Framework

| Aspect                | Library                                               | Framework                                                             |
| --------------------- | ----------------------------------------------------- | --------------------------------------------------------------------- |
| **Definition**        | Collection of functions or classes for specific tasks | Comprehensive set of tools and guidelines for application development |
| **Focus**             | Provides specific functionalities or operations       | Defines architecture and imposes structure                            |
| **Control Flow**      | You control the flow of your application              | Framework dictates the flow and calls your code                       |
| **Flexibility**       | More flexible, integrates with existing code          | More opinionated, follows specific conventions                        |
| **Extent of Code**    | Provides specific functionalities or tools            | Includes libraries and defines application structure                  |
| **Examples**          | `requests` for HTTP requests in Python                | Django for web development in Python                                  |
| **Usage**             | Use where specific functionalities are needed         | Use for structured application development                            |
| **Decision Criteria** | Flexibility, targeted functionalities                 | Structured development, enforce conventions                           |

### Summary

- **Libraries** are focused on providing specific functionalities and tools, offering flexibility and integration with existing code.
- **Frameworks** encompass a broader set of tools and guidelines, providing a structured approach with predefined conventions and architecture.

## ● What is CDN? Why do we use it?

- A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.
- They provide cached internet content from a network location closest to a user to speed up its deliver
- What is the need for CDN?
  - CDNs balance the load of network traffic, ensuring no one server gets overwhelmed. In the event that a single server stops working, a CDN can initiate a "failover" process that allows a backup server to take over.

## Why is React known as React?

- React is aptly named because: It "reacts" quickly to changes without reloading the whole page. It uses the virtual DOM to efficiently update parts of a webpage. It's built around components that "react" and update.

## What is crossorigin in script tag?

- 🔻Crossorigin attribute is used when a script on one domain is trying to fetch or interact with resources from another domain. 🔻Here we're are fetching CDN links of React. 🔻

## What is diference between React and ReactDOM?

- React provides the tools and concepts to define component-based user interfaces, ReactDOM handles the task of rendering those interfaces in a web environment.

## ● What is difference between react.development.js and react.production.js files via CDN?

- In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

## What is async and defer?

- async and defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible and in no particular order while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.



# lecture2

## What is `NPM`?

- it is a package manager who manages for other packages but it does not have any abbriviations. it manages for javascript libary and framework which run on the node packages.

## - What is `Parcel/Webpack`? Why do we need it?

- Parel/Webpack is a bundler for react applications which is taken care all everything about the development. it makes minification, https, hot reloading, dev build, file watching algorithm , image optimizations, image optimization,compress the file , consistent hashing, code spliting, diffrential building ,diagonistic , error handling, tree sparking to remove unused code, diffrential dev and production builds.

## What is `.parcel-cache`?

- it stores the informations about the projects when parcel builds it . so that it rebuilds , does not have re-parse and re-analyize from scratch . it is a key reson , why parcel can be so fast in development.

## What is `npx` ?
 - What is NPX? NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.

## What is difference between `dependencies` vs `devDependencies`?
 - A dependency is a library that a project needs to function effectively. DevDependencies are the packages a developer needs during development.
- The 'npm install' command should add all the dependencies and devDependencies automatically during installation. If you need to add specific devDependencies to your project, you can use this command- 'npm install --save-dev'.

##  What is Tree Shaking?
 - Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

- It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

- In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

## What is Hot Module Replacement?
 - Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?
 - HMR (Hot Module Replacement) parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 - File watcher algorithm - made with C++ Minification
 - Cleaning our code

## What is `.gitignore`? What should we add and not add into it?
 - A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected. 
## - What is the difference between `package.json` and `package-lock.json`
  ### The Role of package.json:
   1. Project Configuration
   2. Dependency Management
   3. Version Management

  ### The Role of package-lock.json
   1. Dependency Locking
   2. Version Consistency
   3. Improved Installation Speed

   ## difference between role of package.json and package-lock.json 

| **Aspect** | **package.json** | **package-lock.json** |
|------------|------------------|-----------------------|
| **Purpose** | Contains basic information about the project. | Describes the exact tree that was generated to allow subsequent installs to have the identical tree. |
| **Necessity** | Mandatory for every project. | Automatically generated for operations where npm modifies either node_modules tree or package.json. |
| **Metadata** | Records important metadata about the project. | Allows future developers to install the same dependencies in the project. |
| **Contents** | Contains information such as name, description, author, script, and dependencies. | Contains the name, dependencies, and locked versions of the project. |  
## dependencies

there are two type of dependency
1.dev dependency
2.normal dependency

# What is `node_modules` ? Is it a good idea to push that on git?
 - node_Modules is bundle of package which have large in size so it cannot be pushed that on git.

# - What is the `dist` folder?
 - A dist folder, or distribution folder, is a directory that can contain different types of files depending on the project.
 - The dist folder is where Webpack yields all of the generated chunks that are the result of the bundling process.
 -  Parcel is a zero configuration build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.
 - To be short answer to your question is, the dist folder is the build folder which contains all the files and folders which can be hosted in server.

 #  What is `browserlists`?
  - Browserslist is a configuration file that helps developers specify which browsers their web application can support.
  - It's a popular dependency for frontend libraries that allows them to share a list of target browsers and Node.js versions with other tools. Browserslist uses Can I Use data to find browsers and their support. 
 - browserslist is a configuration file that determines which browsers your project should support.  

 # Read about dif bundlers: vite, webpack, parcel?
  - When choosing a bundler for your project, it's essential to understand the key differences between Vite, Webpack, and Parcel. Below is a comparison to help you decide which bundler best suits your needs.

### Vite
- **Overview**: Vite is a modern build tool that leverages ES modules in the browser for a faster development experience and uses Rollup for production builds.
- **Key Features**:
  - Instant server start.
  - Fast hot module replacement (HMR).
  - Optimized build using Rollup.
  - Minimal configuration required.
  - Out-of-the-box support for TypeScript, JSX, and Vue.
- **Use Cases**: Ideal for modern JavaScript frameworks like Vue and React, especially for development environments requiring fast startup and HMR.

### Webpack
- **Overview**: Webpack is a highly configurable bundler that has been the industry standard for a long time. It bundles JavaScript files and other assets for the browser.
- **Key Features**:
  - Extensive plugin ecosystem.
  - Fine-grained control over the build process.
  - Support for code splitting and lazy loading.
  - Powerful and flexible configuration options.
- **Use Cases**: Suitable for large-scale applications that need detailed build customization and optimization.

### Parcel
- **Overview**: Parcel is a zero-configuration bundler that aims to provide a simple and straightforward development experience.
- **Key Features**:
  - Zero configuration required.
  - Built-in support for HTML, CSS, JavaScript, and more.
  - Fast bundle times with multicore processing.
  - Automatic code splitting.
  - Built-in development server with HMR.
- **Use Cases**: Great for small to medium-sized projects and developers who prefer convention over configuration.

### Summary
- **Vite**: Best for fast development with modern frameworks.
- **Webpack**: Best for highly customized builds and large projects.
- **Parcel**: Best for quick setup and simple builds.

# Read about: ^ - caret and ~ - tilda?

# What is JSX?
## Versioning Notations in `package.json`

When specifying dependencies in `package.json`, you can use different versioning notations to control which versions of a package are considered acceptable. The two most common notations are tilde (`~`) and caret (`^`).

### Tilde (`~`) Notation

- **Used for:** Approximately equivalent to the specified version.
- **Behavior:** Updates to all future patch versions without incrementing the minor version. For example, `~1.2.3` will allow updates from `1.2.3` up to, but not including, `1.3.0`.
- **Scope:** Provides bug fix releases.
- **Example:** `~1.2.3` will use releases from `1.2.3` to `<1.3.0`.
- **Updates:** Updates in decimal places (patch level).
- **Default:** Not the default notation used by NPM.

### Caret (`^`) Notation

- **Used for:** Compatible with the specified version.
- **Behavior:** Updates to all future minor and patch versions without incrementing the major version. For example, `^2.3.4` will allow updates from `2.3.4` up to, but not including, `3.0.0`.
- **Scope:** Provides backwards-compatible new functionality.
- **Example:** `^2.3.4` will use releases from `2.3.4` to `<3.0.0`.
- **Updates:** Updates to the latest version within the major version range.
- **Default:** Used by NPM as the default notation.
# What is JSX?
 - JSX, or JavaScript XML, is a syntax extension for JavaScript that lets you write HTML-like code in JavaScript files. 
 - It's based on ES6 and converts HTML tags into React elements. JSX is a concise way to define the structure and logic of user interfaces in React components. 

#  Role of type attribute in script tag? What options can I use there?
- The type attribute gives the language of the script or format of the data.
# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
- In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {< />} expression. <TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components.
# parcel:?
- Parcel is a zero configuration build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.

features of parcel:=
1.😍 Zero config
2.⚡️ Lightning fast 3. 🚀 Automatic production optimization
4.🎯 Ship for any target
5.🌍 Scalable

     keret:-to update minor update with package

     node_modules:-

# Parcel:- transitive dependency

   <ul>
       <li>-Dev Build</li>
       <li>-Local Server</li>
       <li>-HMR=HOT MODULE REPLACEMENT</li>
       <li>-file watching algoritham  -written in C++</li>
       <li> -Catching faster builds</li>
      <li> -image optimization </li>
      <li>-minifications of files in productions</li>
      <li> -bundles the files </li>
      <li> -compress the files </li>
      <li>consistent hasing</li>
      <li>code splitting</li>
      <li>Differential Bundling:-to support older browser</li>
      <li>Dignoistic</li>
      <li>Error Handling</li>
      <li>HTTPs</li>
      <li>Tree Shaking:-to remove unused code </li>
      <li>Different dev and prod bundles</li>

  </ul>


  // this is not html in javascript 
  - const jsxsyntex =`<h1 className="" >this looks like html/xml</h1>`
  -this is converted or transpile or compile by babel into react element 
  - if you give attribute in inside the jsx then it should be in camel case like =tabIndex

# lecture 4 -Talk Cheafp, Show Me the Code  -remainig to watch Remaining Time-1:08:37
 - config driven ui
# Is JSX mandatory for React?
 - JSX is the preferred way to write React components for most developers, it's not a strict requirement.

# Is ES6 mandatory for React?
 - ES6, or ECMAScript 6, is not mandatory for React, but it is highly recommended. ES6 is a standardization of JavaScript that makes code more readable and accessible. React uses many ES6 features, including classes, arrow functions, and variables like let and const. If you don't use ES6, you can use the create-react-class module instead. 

# How can I write comments in JSX?
 - JSX is a syntax extension for JavaScript that resembles HTML. While it might seem like you could use standard JavaScript comments (like // or /* */) directly within JSX, that's not the case.   

# What is <React.Fragment></React.Fragment> and <></> ?
 - In React, <React.Fragment> and <> </> are used to group multiple elements without adding an extra node to the DOM.

 # Why Use Virtual DOM?

Directly manipulating the real DOM (Document Object Model) can be slow and inefficient, especially when dealing with frequent updates in complex UIs. This is where Virtual DOM comes in – it offers a significant performance boost by optimizing these updates.


## How it Works:

1. **Create a Virtual DOM:** Each component maintains a virtual DOM, a JavaScript object mirroring the component's UI structure.
2. **Detect Changes:** When a component's state or props change, a new virtual DOM is created.
3. **Compare DOMs:** The library compares the old and new virtual DOMs to identify the minimal set of changes needed for the UI update.
4. **Update Real DOM:** Only the necessary changes are applied to the actual DOM, minimizing performance overhead.

## Benefits:

### Improved Performance
Virtual DOM acts as a lightweight in-memory representation of the UI. When changes occur, the library (like React) efficiently compares the old and new virtual DOMs, identifying the minimal set of changes required. This minimizes the actual DOM manipulations needed, leading to smoother and faster UI updates.

### Simplified Development
Virtual DOM abstracts away low-level DOM manipulation from developers. You can focus on building your UI components using a declarative style, describing the desired state, and letting the library handle the efficient updates.

### Cross-Platform Compatibility
The core concept of Virtual DOM can be implemented in libraries that target various platforms (web, mobile, desktop) using different rendering engines.


# ● What is Reconciliation in React? 

Reconciliation is the process by which React updates the DOM to match the virtual DOM. It is a key concept in React's performance optimization strategy.

## Key Points:

### 1. Virtual DOM Representation
React uses a virtual DOM to keep a lightweight representation of the UI. When a component's state or props change, React creates a new virtual DOM for that component.

### 2. Diffing Algorithm
React employs a diffing algorithm to compare the new virtual DOM with the previous virtual DOM. This algorithm efficiently determines which parts of the UI have changed and need to be updated.

### 3. Minimal Updates
Based on the results of the diffing algorithm, React calculates the minimal set of changes required to update the actual DOM. This minimizes the performance overhead associated with direct DOM manipulation.

### 4. Efficient Re-rendering
By applying only the necessary updates to the DOM, React ensures that UI changes are rendered quickly and efficiently, providing a smoother user experience.

## Summary
Reconciliation allows React to efficiently update the DOM by leveraging a virtual DOM and a diffing algorithm. This process helps in minimizing performance costs and ensures fast and responsive UI updates.

# What is React Fiber?
React Fiber is a complete rewrite of the React core algorithm. It was introduced to improve the performance and capabilities of React, especially for complex and interactive UIs.

## Key Points:

### 1. **Incremental Rendering**
React Fiber introduces incremental rendering, allowing React to break down rendering work into units of work. This enables React to prioritize updates and handle long-running tasks more efficiently, improving responsiveness.

### 2. **Priority-Based Updates**
With React Fiber, different updates can have different priorities. React can now pause and resume work based on the importance of the updates, ensuring that critical updates (like animations) are processed first.

### 3. **Error Handling**
React Fiber enhances error handling by allowing React to recover from errors in a more graceful manner. This means that errors in one part of the UI won't necessarily cause the entire application to crash.

### 4. **Flexible Scheduling**
Fiber provides a more flexible scheduling mechanism for rendering. This flexibility allows React to manage and optimize rendering tasks more effectively, leading to smoother user experiences.

## Summary
React Fiber is an advanced algorithm that enhances React's rendering performance and flexibility. It introduces incremental rendering, priority-based updates, improved error handling, and flexible scheduling, making React more efficient and responsive.


# Why We Need Keys in React

Keys are a crucial feature in React that helps maintain and optimize the rendering of lists of elements. They provide a way to uniquely identify elements in a list, which is essential for efficient updates and rendering.

## Why We Need Keys

### 1. **Efficient Reconciliation**
Keys help React identify which items have changed, been added, or removed from a list. By providing a unique key for each element, React can efficiently reconcile and update only the parts of the list that have actually changed, rather than re-rendering the entire list.

### 2. **Stable Identity**
Keys give elements a stable identity across renders. This stability allows React to correctly preserve and manage the state of elements as they are reordered or modified. Without keys, React might mistakenly re-use elements or lose track of their state.

### 3. **Performance Optimization**
Using keys improves the performance of list rendering by enabling React to skip unnecessary operations. With keys, React can quickly determine which items in the list are unchanged and avoid re-rendering them.

## When Do We Need Keys?

### 1. **Rendering Lists**
When rendering lists of elements using methods like `.map()`, each element in the list should have a unique key. This is crucial for maintaining the integrity of the list and optimizing rendering performance.

### 2. **Dynamic Content**
When the content or order of items in a list can change dynamically, such as in sortable lists or when items are added/removed, keys are essential to ensure that React can accurately manage and update the list.

### 3. **Component Identity**
In certain cases, keys are also useful when rendering multiple instances of the same component. Keys help React distinguish between different instances of the component and manage their states correctly.

## Summary
Keys in React are necessary for efficient reconciliation, stable identity, and performance optimization when rendering lists of elements. They should be used whenever rendering lists or dynamic content to ensure React can accurately manage and update the UI.

# Can we use index as keys in React?

Using indexes as keys in React is possible, but it's generally recommended to use unique and stable identifiers when possible. Here’s a detailed look at when and why you might use indexes as keys, along with the potential drawbacks.

## When You Can Use Indexes as Keys

### 1. **Static Lists**
If you have a static list where items do not change, are not reordered, and do not have dynamic content, using indexes as keys might be acceptable. For example, a list of static menu items could use indexes as keys without significant issues.

### 2. **Simple Scenarios**
In simple cases where the list items are always added in a predictable manner, and there is no complex interaction with the list, using indexes might be a straightforward solution.

## Potential Drawbacks

### 1. **Reordering Issues**
If the list items can be reordered, using indexes as keys can cause problems. React may incorrectly associate elements with their previous states, leading to unintended behavior or performance issues.

### 2. **Adding/Removing Items**
When items are added or removed from a list, using indexes as keys can lead to incorrect element associations. This might result in incorrect rendering or loss of component state.

### 3. **Performance Implications**
React's reconciliation algorithm might become less efficient with indexes as keys, as it may not accurately identify elements that have changed. This can impact rendering performance, especially with large lists.

## Best Practices

### 1. **Use Unique Identifiers**
Whenever possible, use unique and stable identifiers (such as IDs from a database) as keys. This ensures accurate and efficient updates, especially for dynamic lists.

### 2. **Avoid Indexes for Dynamic Lists**
For dynamic lists where items can change position or be added/removed, avoid using indexes as keys. Instead, use data that provides a unique and stable identity for each list item.

## Summary
While using indexes as keys in React is possible, it is generally advisable to use unique and stable identifiers to avoid issues with reordering, adding/removing items, and performance. Indexes can be used in static and simple lists, but care should be taken in more dynamic scenarios.

# What is Props in React?

In React, **props** (short for "properties") are a mechanism for passing data and event handlers from parent components to child components. Props enable component reusability and allow for dynamic rendering of content based on the data passed to components.

## Key Points About Props

### 1. **Immutable Data**
Props are read-only. They cannot be modified by the child component that receives them. This immutability ensures that data flows in a predictable manner from parent to child components.

### 2. **Data Flow**
Props facilitate one-way data flow in React. Data is passed down from parent components to child components, ensuring a clear and consistent flow of information throughout the application.

### 3. **Component Customization**
Props allow for customization of child components. By passing different values through props, you can render various states or configurations of a component.

## Ways to Use Props

### 1. **Passing Data**
You can pass data from a parent component to a child component via props. This data can be of any type, including strings, numbers, objects, or arrays.

```jsx
// 1 Parent Component
function Parent() {
  return <Child message="Hello, World!" />;
}

// Child Component
function Child(props) {
  return <p>{props.message}</p>;
}
// 2 Parent Component  2. Passing Event Handlers
function Parent() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <Child onClick={handleClick} />;
}

// 3. Default Props Child Component
function Child(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}

function Child(props) {
  return <p>{props.message}</p>;
}

Child.defaultProps = {
  message: 'Default message',
};
    

 // 4. Prop Types   
import PropTypes from 'prop-types';

function Child(props) {
  return <p>{props.message}</p>;
}

Child.propTypes = {
  message: PropTypes.string.isRequired,
};


What is a Config Driven UI ?

A Config-Driven UI (User Interface) is an approach where the structure, behavior, and appearance of a user interface are defined and controlled through configuration data rather than hard-coded code. This configuration is usually provided in the form of JSON, XML, or other data formats that describe how the UI should be constructed and behave.

Key Features of Config-Driven UI

1. **Separation of Concerns**
In a Config-Driven UI, the configuration data is separate from the application logic. This separation allows designers and developers to modify the UI without changing the underlying code, leading to cleaner and more maintainable codebases.

2. **Dynamic Rendering**
UI elements are rendered dynamically based on the configuration data. This means that the UI can adapt to different requirements or content without requiring code changes. For example, adding or removing form fields can be done by simply updating the configuration.

3. **Reusability**
Components and layouts defined in configuration data can be reused across different parts of the application. This promotes consistency and reduces redundancy, as the same configuration can be applied to multiple views or components.

 4. **Flexibility**
A Config-Driven UI provides flexibility in terms of UI design and behavior. Changes to the user interface can be made by updating the configuration data, which can be particularly useful for applications that require frequent updates or have complex user interfaces.

Benefits of a Config-Driven UI

1. **Reduced Development Time**
By separating the UI configuration from the code, developers can focus on implementing functionality without being bogged down by UI details. This can accelerate development and make it easier to implement complex interfaces.

2. **Easier Customization**
Non-developers, such as designers or product managers, can adjust the UI by modifying configuration files or settings without needing to write code. This democratizes the process of UI customization and allows for quicker adjustments.

3. **Consistency and Maintainability**
A single configuration source ensures that UI elements and behaviors are consistent across the application. This centralization simplifies maintenance and makes it easier to apply global changes.

Example of a Config-Driven UI

```json
{
  "type": "form",
  "fields": [
    {
      "type": "text",
      "label": "Username",
      "name": "username",
      "placeholder": "Enter your username"
    },
    {
      "type": "password",
      "label": "Password",
      "name": "password",
      "placeholder": "Enter your password"
    },
    {
      "type": "submit",
      "value": "Login"
    }
  ]
}

Routing:-
 there are tow type routing 
  -client side routing
  -server side routing

  -in react , client routing refers to interchanging the components in a single page.ddd
  