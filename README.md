# Fichua Online Store

Fichua is an ecommerce web app that connects vendors and customers. Customers get to browser and discover products from different categories and find their favorite vendors. Vendors get to fulfil their business' potential by reaching our many users.

## Setup project locally

Clone repository from https://github.com/Developer-Gitonga/fichua

- `cd fichua`

### Backend

-`python3 -m pip install --upgrade pip` Install or upgrade pip.

- `python3 -m venv --without-pip env` Create a virtual environment.

- `source env/bin/activate` Activate virtual environment.

- `curl https://bootstrap.pypa.io/get-pip.py | python3` Install pip in the virtual environment.

- `python3 -m pip install -r requirements.txt` to install the dependencies required to run the project.

- `touch .env` Create an env file in the root of the project, and use the `.env.sample` file to replace those credentials
  with valid ones.

- Feel free to change the database configuration to sqlite for local development.

### Frontend

- `node --version` and `npm --version`. Make sure you have **NodeJS** and **NPM** installed before proceeding.

- `cd frontend` Change directory into frontend.

- `npm install` Install all the dependencies required to run the project.

- `npm start` Start the frontend in the local server.

- `npm build` Build the frontend for the backend to receive the UI.

- **Frontend Link**: https://fichua.vercel.app
- **Django Endpoint**: https://fichuastore.herokuapp.com
