# Bookmark App

## Introduction

Welcome to the Bookmark App repository! This project is designed to revolutionize how you manage and organize your favorite websites with simplicity and efficiency. Just like CRUDS, it empowers you with essential functionalities, but with a focus on bookmarks. Let's dive into its fantastic features and the powerful validation system that sets it apart.

## Key Features

1. **Bookmark Storage**
   - Easily store website names and URLs within the app to access your favorite online destinations quickly.

2. **Bookmark Preview**
   - All your bookmarks are neatly displayed on a table, providing a clear overview of your collection.

3. **View & Delete**
   - Each bookmark comes with two intuitive buttons: View to open the website and Delete to remove it from your list.

4. **Powerful URL Validation**
   - To ensure top-notch security and user experience, the app implements rigorous URL validation. You can only add URLs that pass the regular expression test, including variations such as 'example.com', 'www.example.com', 'https://example.com', or 'https://www.example.com'. Not only that, but the app also automatically concatenates `https://` to your URL if you forget to include it for a secure connection.

5. **User-Friendly URL Name Validation**
   - For an organized collection, the app has cleverly implemented URL name validation. No more confusing or duplicated names! The app checks the URL name against regular expressions to ensure it matches the required format.

## Technologies Used

With the combination of the following technologies, the Bookmark App delivers a seamless and intuitive experience:

- **HTML5**: Provides the structure of the web page.
- **CSS3**: Styles the app for a visually appealing design.
- **Bootstrap**: Ensures a responsive and user-friendly layout.
- **SweetAlert library**: Enhances user interaction and feedback.
- **Vanilla JavaScript**: Adds functionality and interactivity to the app.
