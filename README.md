# Relay Session

This is an example app that implements a (partial) clone of GitHub's issue feature. The purpose is to build any feature you'd like on top of this app.

Some examples might include:

- Paginating over the list of issues for the given repo.
- Paginating over the list of comments for a given issue.
- Ability to open/close an issue.
- Ability to add a comment to an issue.
- Ability to edit a comment.


## Setup

1. First, clone the app:

        git clone git@github.com:jstejada/relay-session.git

2. Change into the app's directory:

        cd relay-session

3. Install the app's dependencies:

        # npm users:
        npm install

        # yarn users:
        yarn

4. Get your GitHub authentication token in order to let the app query GitHub's public GraphQL API:
   1. Open https://github.com/settings/tokens.
   2. Ensure that at least the `repo` scope is selected.
   3. Generate the token
   4. Create a file `./relay-session/.env.local` and add the following contents (substitute `<TOKEN>` for your authentication token):

          # issue-tracker/.env.local
          REACT_APP_GITHUB_AUTH_TOKEN=<TOKEN>

Now you're ready to run the app!

## Running The App

You can run the app by navigating to `relay-examples/issue-tracker/` and then running the start command:

        # npm users:
        npm start

        # yarn users:
        yarn start

This will start the development server (including Relay Compiler) and open a browser to [localhost:3000](http://localhost:3000).

## Available Scripts

The available scripts are primarily those defined by Create React App. In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
