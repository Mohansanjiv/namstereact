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

# What is async and defer?

## What is `NPM`?

- it is a package manager who manages for other packages but it does not have any abbriviations. it manages for javascript libary and framework which run on the node packages.

## - What is `Parcel/Webpack`? Why do we need it?

- Parel/Webpack is a bundler for react applications which is taken care all everything about the development. it makes minification, https, hot reloading, dev build, file watching algorithm , image optimizations, image optimization,compress the file , consistent hashing, code spliting, diffrential building ,diagonistic , error handling, tree sparking to remove unused code, diffrential dev and production builds.

## What is `.parcel-cache`?

- it stores the informations about the projects when parcel builds it . so that it rebuilds , does not have re-parse and re-analyize from scratch . it is a key reson , why parcel can be so fast in development.

# lecture2

## dependencies

there are two type of dependency
1.dev dependency
2.normal dependency

parcel:-Parcel is a zero configuration build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.

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

# lecture 3 -remainig to watch Remaining Time-1:08:37
## Laying the foundation 
  // this is not html in javascript 
  - const jsxsyntex =`<h1 className="" >this looks like html/xml</h1>`
  -this is converted or transpile or compile by babel into react element 
  - if you give attribute in inside the jsx then it should be in camel case like =tabIndex

# lecture 4 -Talk Cheafp, Show Me the Code  -remainig to watch Remaining Time-1:08:37