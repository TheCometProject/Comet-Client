# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Git / GitHub Contribution Guide:
1. Open up a console and change the current directory to wherever you want to clone the repository.
2. Clone the repository:
    ```sh
    git clone https://github.com/TheCometProject/Comet-Client.git
    ```
    - You might be asked to enter your GitHub username and password (or PAT).
3. Create your personal branch: (check Notes on naming conventions)
    ```sh
    git checkout -b yourBranchName
    ```
3. Make your modifications and commit your changes.
4. Push your changes to the remote repository *in your personal branch*: 
    ```sh
    git push origin yourBranchName
    ```
5. Make a Pull Request to the `main` branch to pull your changes.
6. Once your PR is merged, switch back to the `main` branch, delete your old branch (both on GitHub and locally) and pull the new changes to your local `main` branch:
    ```sh
    git branch main
    git branch -d yourBranchName
    git pull origin main
    ```
7. If you want to make more changes, repeat from step 3.


## Notes
- ***NEVER PUSH TO THE `main` BRANCH.***
- When you make a PR, **you have to wait for other people to review your changes before merging to the `main` branch.**
- You don't reuse branches that have already been merged, that's why you delete them after your PR is merged.
- Your branch name should be like this: 
    - `YourName/feature_XYZ`
    - `YourName/bugfix-34`
- You must create a branch for every feature or bug fix you create.