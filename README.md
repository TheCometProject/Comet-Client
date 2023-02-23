# Git / GitHub Contribution Guide:
1. Open up a console and change the current directory to wherever you want to clone the repository.
2. Clone the repository:
    ```sh
    git clone https://github.com/TheCometProject/Front-End.git
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
