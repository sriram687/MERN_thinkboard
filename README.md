# 📝 MERN ThinkBoard

A full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js) featuring rate limiting, responsive design, and seamless deployment.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)

## ✨ Features

- 📝 **Create, Read, Update, Delete** notes
- 🔒 **Rate Limiting** with Upstash Redis to prevent abuse
- 🎨 **Modern UI** with Tailwind CSS
- 📱 **Responsive Design** for mobile and desktop
- ⚡ **Fast Performance** with Vite
- 🚀 **Single Deployment** - Backend serves both API and frontend
- 🌐 **Production Ready** with environment-based configuration

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Upstash Redis** - Rate limiting
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
MERN_THINKBOARD/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── upstash.js         # Upstash Redis config
│   │   ├── controllers/
│   │   │   └── notesController.js # Note CRUD logic
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js            # Note schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js     # API routes
│   │   └── server.js              # Express server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   ├── NoteCard.jsx       # Individual note display
│   │   │   ├── NotesNotFound.jsx  # Empty state
│   │   │   └── RateLimitedUI.jsx  # Rate limit message
│   │   ├── pages/
│   │   │   ├── HomePage.jsx       # Notes list
│   │   │   ├── CreatePage.jsx     # Create/edit note
│   │   │   └── NoteDetailPage.jsx # View single note
│   │   ├── lib/
│   │   │   ├── axios.js           # Axios config
│   │   │   └── utils.js           # Utility functions
│   │   ├── App.jsx                # Main app component
│   │   └── main.jsx               # Entry point
│   └── package.json
└── package.json                    # Root package.json for deployment
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (Atlas account or local installation)
- **Upstash Redis** account (for rate limiting)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sriram687/MERN_thinkboard.git
cd MERN_THINKBOARD
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Set up environment variables**

Create a `.env` file in the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
NODE_ENV=development
```

### 🏃 Running Locally

**Development Mode** (Frontend and Backend separately):

1. **Start Backend** (from backend folder):
```bash
npm run server
# Runs on http://localhost:5001
```

2. **Start Frontend** (from frontend folder):
```bash
npm run dev
# Runs on http://localhost:5173
```

Visit `http://localhost:5173` to use the app.

## 📦 Deployment

This project is configured for single-deployment on platforms like **Render**, **Railway**, or **Heroku**.

### Deploy on Render

1. **Create a new Web Service** on [Render](https://render.com)

2. **Connect your GitHub repository**

3. **Configure settings**:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     ```
     NODE_ENV=production
     MONGO_URI=your_mongodb_atlas_uri
     UPSTASH_REDIS_REST_URL=your_upstash_url
     UPSTASH_REDIS_REST_TOKEN=your_upstash_token
     ```

4. **Deploy** - Render will build the frontend and serve it with the backend!

### How Deployment Works

The project uses a clever deployment strategy:

- **Build Step**: Builds React app into static files (`frontend/dist`)
- **Production Mode**: Express serves the built React app
- **Single URL**: One server handles both API (`/api/*`) and frontend (`/*`)

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Get all notes |
| `GET` | `/api/notes/:id` | Get note by ID |
| `POST` | `/api/notes` | Create a new note |
| `PUT` | `/api/notes/:id` | Update a note |
| `DELETE` | `/api/notes/:id` | Delete a note |

## 🔒 Rate Limiting

Protected by Upstash Redis rate limiter:
- **10 requests per 10 seconds** per IP address
- Returns `429` status when limit exceeded
- Helps prevent API abuse and spam

## 🎨 Features in Detail

### Create Notes
- Rich text input with title and content
- Auto-save functionality
- Responsive form design

### View Notes
- Card-based layout
- Newest notes first
- Empty state handling

### Edit & Delete
- In-place editing
- Confirmation before deletion
- Instant updates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sriram**
- GitHub: [@sriram687](https://github.com/sriram687)
- Project Link: [MERN_thinkboard](https://github.com/sriram687/MERN_thinkboard)

## 🙏 Acknowledgments

- MongoDB Atlas for cloud database
- Upstash for serverless Redis
- Render for deployment platform
- Tailwind CSS for styling

---

Made with ❤️ using the MERN Stack
