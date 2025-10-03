## Setup Instructions

### 1. Install Required Software

- VS Code : https://youtu.be/3eCmc0t6aqA?si=TkV0bVEz_95FbMmi

- Node Js : https://youtu.be/uCgAuOYpJd0?si=2ICwr3Ih1P_ru9KA

- Git Bash : https://www.youtube.com/watch?v=t2-l3WvWvqg

### 2. Open the Project
1. Open the "boyfriend-day" folder in VS Code

2. Open terminal in VS Code (Terminal → New Terminal)

4. Type this command and press Enter:
   npm i

   after that, type this command: 

   npm run dev

   **If you get a script error on Windows, run this :**
 Set-ExecutionPolicy -Scope CurrentUser Unrestricted
  

   after that, try again the commands

5. You'll get a local view link
6. Ctrl + Click on the localhost link to view your website!

## How to get sharable link
watch : https://youtu.be/bFCnDsQwNvA

## 🎨 Customization Guide

### 📝 How to Change Main Content

Go to src folder. 
edit the text inside of textConfig.js file only!

## How to change Music 
Go to music folder. 
paste your new music there.
delete previous musics.
update your music names as music1.mp3, music2.mp3, music3.mp3

## How to change music name :
Go to app.tsx
go to line 359 and change music names according to you

## How to change music cover :
go to src folder. go to musiccover folder. 
delete previous images
paste your new images
update their names as music1.jpg, music2.jpg, music3.jpg

## 🆘 Common Issues & Solutions

### ❌ Images not loading
Solutions:
1. Make sure images are in `public/images/` folder
2. Check the import paths match your file names
3. Supported formats: `.jpg`, `.png`, `.gif`

### ❌ Music not playing
Solutions:
1. Check if `music.mp3` is in the `src/` folder
3. File size should be under 10MB

### ❌ Changes not showing
Solutions:
1. Save your files (Ctrl+S)
3. Hard refresh browser (Ctrl+Shift+R) or (CTRL + F5)