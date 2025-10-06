# Taskly - Task Management System

## Technologies Used

- **Frontend**: React.js, Tailwind
- **Backend**: Node.js, Express.js, REST
- **Database**: Postgres, Prisma
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

To get started with Taskly locally, follow these steps:

1. Clone this repository `git clone https://github.com/morshedul-antor/taskly.git`

### 3. Backend

At first run:
`openssl rand -hex 32` copy the generated value and paste it into the
`JWT_SECRET=` field within the `.env` file located at `taskly/backend/`

### .env

```
DATABASE_URL= [prisma postgres url, or production db url from email]
PORT=8000
ENV="dev"

ALGORITHM="HS256"
JWT_SECRET=
```

Then, run this steps at `taskly/backend`:

```
npm install
npx prisma generate
npm run dev
```

Access the `Express` server at `http://localhost:8000`

### 4. Frontend

Create .env file at `taskly/frontend`:

### .env

```
VITE_API_URL= [http://localhost:8000/api or production api url from email]
```

Then, run this steps at `taskly/frontend`:

```
npm install
npm run dev
```

Access the application in your browser at `http://localhost:5173`
