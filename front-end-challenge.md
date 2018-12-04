# Front-End Challenge

Hey, let's build simple Blog.

We will start with simple MVP. It will have Posts and Comments features.

You can pick **React**, **Angular 5** or **Vue** as a framework. JavaScript has to be ES 6/7 (Babel + Webpack) or TypeScript.

State layer should be handled with **Redux** (in case of Angular - **ngrx**) or similar solution you're experienced with.

Styling recommended to do in CSS in JS library you have experience with, usually, [styled-components](https://github.com/styled-components/styled-components) will be the best choice.

Use [React Router](https://github.com/ReactTraining/react-router) in case of React. Other frameworks going to have different routers out of the box.

### Pages and Features

Our blog going to have next pages:

- **Latest Posts /** -- List of all Posts, Post short description, author and publish date
- **View Post /posts/:postId** -- Post page

Features:

- View list of latest Posts
- View specific Post
- Create new comment under Post
- Create / Edit Post _* Optional_

### API

To persist data and work with real API, we're going to use simple [Node.js API created in few minutes (download, unarchive and run following readme)](https://drive.google.com/file/d/1L-ofA5W57kQE-TleXvxKxXqTjK7ir3ll/view?usp=sharing). Run API separate from your project the following readme. API endpoints described in [Postman collection](https://www.getpostman.com/collections/8fd9a38f54dfb97ed380).

### Structure and Code Style

- Split components to [Presentational and Container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- Redux action, reducers, and selectors should be separate from each other. To handle network you can use native browser [fetch](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) method and [redux-thunk middleware](https://github.com/gaearon/redux-thunk). As another option we prefer is [Axios](https://github.com/axios/axios) and [redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware).
- Check JS code style with [ESLint](https://eslint.org/docs/user-guide/getting-started)
- Use functional programming if you know how. [Ramda.js](http://ramdajs.com/) or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) is +100 to your score ;)
- ES 6/7 features are very welcome. If you want to use `async / await`, pipes etc. go ahead and do it.

### Design

The design is up to you. Simple, minimalistic and clean would be nice. As general example check [Ghost standard UI](https://blog.ghost.org/).

### Conditions

- Avoid use of jQuery and bootstrap. Native JS and flexbox nowadays solve all you need from these two.
- The code should be clean, passing ESLint checks and simple to understand.
- Task usually takes **from 2 to 4 hours**. If you need more time, you're good to take it and it's appreciated, but results should be sent **no later than 24 hours after the start**.
- Challenge code should be uploaded git repository to **GitHub or BitBucket**. Send us link to the repository right after that. Thanks!
- Challenge should have clean **README.md file with details how to run the project**.
- Skills to write great business logic evaluated higher than markup or styling.

If you have any questions about challenge details, ask for details, it's appreciated.

Have a good luck and looking forward to work with you!
