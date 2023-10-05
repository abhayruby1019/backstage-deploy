## temporary-frontend

_Handles following journeys_

---

### 📍 Tech Stack

1. **React** : v18.2.0
2. **React** : v13
3. **Node/PNPM**: v20/v8
4. **Jest**
5. **RTL**

---

### 📍 Pre-requisites

1. **Node JS** : Check node version.

- Preferable use nvm to go to a specific node version
  ```
  nvm install v20 (first time only)
  nvm use v20
  ```

2. **PNPM** : This locks the version of the packages used so that version issues do not appear.

- Install Pnpm (if not present) `brew install pnpm`

---

### 📍 Local Development

_Install the dependencies and devDependencies and start the server._

1. `pnpm install`
2. `pnpm dev`

_Updating docker image_

1. `pnpm build:docker`
2. update docker image : `docker run -p 3001:3001 demo`

### 📍 Commit/Push Changes

- Run tests from command line with (at the root of project):

  ```
  pnpm test
  ```

- Monitor the `Poonawalla-Fincorp-Temporary-Repo-Frontend` action for a green build post pushing your changes

---

### 📍 Best practices
