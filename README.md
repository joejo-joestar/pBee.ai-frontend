# Veehive | PBee.ai Front-End
<p align="center">
  <b><em>⚠️ pBee.ai is no longer a product offered by Veehive ⚠️</em></b>
</p>

pBee.ai is a tool used to generate posters using the power of generative AI. It has a chat like interface where the user chats with a chatbot which in turn generates the poster to the desired specifications. The same chat is used to further change the poster to make all adjustments to fit the user’s needs.

This tool can also store different brand assets of a business, like their logos, product images, typefaces, tones, color palettes in “collections,” from which certain elements of the poster will be sourced from.

---

This repository is to store the static files for the PBee.ai website.

## Libraries and Such:
- [React](https://react.dev/learn)
- [Redux]()
- [Vite](https://vitejs.dev/guide/)
- [Typescript]()
- [Framer](https://www.framer.com/)
- [React Router Dom](https://reactrouter.com/en/main/start/tutorial#adding-a-router)
- [Tailwindcss](https://tailwindcss.com/docs/guides/vite)
- [Axios](https://github.com/axios/axios)
- [Firebase](https://firebase.google.com/docs/web/setup)
- [Framer Motion](https://www.framer.com/motion/)
- [Formik](https://formik.org/docs/overview)
- [yup](https://github.com/jquense/yup)
  [(in context with formik)](https://formik.org/docs/guides/validation)
- [React-Dropzone](https://react-dropzone.js.org/)
- [React-Icons](https://www.npmjs.com/package/react-icons)
- [Socket.IO](https://socket.io/docs/v4/client-installation/)

## Landing Page
###  Hero Page
⚠️(Remade in [Framer](https://organic-opportunities-016295.framer.app/))⚠️
- [x] Navbar
- [x] Home
- [x] Features
- [x] Testimonials
- [x] About Us
- [x] More About Us
- [x] FAQ
- [x] CTA
- [x] Footer

### Get Started Page
- [x] Login Page
  - [x] Credentials
  - [x] Sign In using Email (?)
- [x] Sign Up Page
- [x] Pricing

## App
- [x] Account Dashboard
- [x] Left Sidebar
  - [x] History
  - [x] Favorites
- [x] Poster Canvas (Design Page)
  - [x] Customize Modal (New Poster)
  - [ ] Menu Bar
- [x] Collections Page
  - [x] Upload Modal
  - [x] Progress Bar
  - [x] Assets Modal
- [ ] Exporting Modal
  <!-- - [ ] Share -->

## Using this repo

**Creating react project (only for creating project)**
```bash
npm create vite@latest

npm i
npm cd # [project name]
```

**Modules, Libraries and Dependencies**

☝️ **Note**: this command is only required when cloning this project

<img src="public/pixels.jpg" alt="☝️😺" width="125">

<br>

```bash
npm i
```

```bash
# React-Router
npm install react-router-dom

# React-Redux
npm install react-redux @reduxjs/toolkit

# Framer-Motion
npm install framer-motion

# Axios
npm install axios

# Formik & yup
npm install formik --save
npm install yup --save

# Firebase
npm install firebase

# react-icons
npm install react-icons --save

# Socket.IO
npm install socket.io-client

# Other Dependencies
npm install -D @types/node

# Tailwind Install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Running the Test Server**
```bash
npm run dev
```
