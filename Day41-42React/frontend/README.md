
#Day 41

Basic React Challenge: Creating a Landing Page Interface for a Blog App
Set Up Your Project

Create a new directory for your project.

Open your terminal, navigate to your project directory, and run npm create vite@latest blog-landing-page -- --template react.

After the installation is complete, navigate to the newly created blog-landing-page directory by running cd blog-landing-page.

Start the development server by running npm run dev. Your browser should open a new tab displaying the React app template.

Create Basic Components

Header Component: Create a new file named Header.js in the src directory. This component will render the title of your blog and a navigation bar.

Footer Component: Create a Footer.js file. This component will display copyright information and a simple message.

MainContent Component: Create a MainContent.js file. This component will act as the body of your landing page, including a welcome message and a brief description of what the blog is about.

Build Your Components

In each component file (Header.js, Footer.js, and MainContent.js), import React at the top. Then, define a functional component that returns JSX for that section of the page.

Use basic HTML elements to structure your content (e.g., div, h1, p, nav, ul, li) and apply styles via the className attribute linking to your App.css file.

Assemble the App

Open App.js. Import your components at the top of the file.

Inside the App component's return statement, structure your components in the order they should appear on the page: <Header />, <MainContent />, and <Footer />.

Styling Your App

Use App.css to add styles to your app. Focus on layout styles (such as margins, paddings, and flexbox for layout) and basic aesthetics (like font sizes, colors, and background colors).

Ensure your landing page is responsive and looks good on both desktop and mobile devices.

Run and Review Your App

Ensure your development server is running (npm start if it's not).

Visit the local server address provided by the create-react-app command (usually http://localhost:5173) in your browser to view your landing page.

Review your application's layout and design to ensure everything is rendered correctly.


#Day42

Extended React Challenge: Incorporating Conditional Rendering and Props
Objective

Building upon the basic challenge of creating a landing page for a blog application, this extended challenge introduces the concepts of conditional rendering and using props in React. You will enhance your blog landing page with dynamic content based on props and conditions.

Challenge Steps

Introducing Props to Components

Modify the Header Component: Add props to the Header component to accept a blog title and links for the navigation bar dynamically. Use these props within the component to render the title and navigation links.

Enhance the MainContent Component: Update the MainContent component to accept a prop named posts that contains an array of blog post summaries (e.g., title and a short description). Use this prop to dynamically render a list of posts.

Implementing Conditional Rendering

Conditional Rendering in MainContent: Modify the MainContent component to display a message such as "No posts available" when the posts array is empty. This introduces conditional rendering based on the length of the posts array.

Create a Login Button: In the Header component, add a button for logging in. This button will not perform an actual login but will demonstrate conditional rendering. Use a prop to manage the login state (isLoggedIn), and conditionally render the button text to show "Login" or "Logout" based on the isLoggedIn prop's value.

Adding Dynamic Styles with Props

Styling Based on Props: In any component of your choice, implement dynamic styling based on props. For example, you could change the background color of the header based on a prop. This demonstrates how props can not only control content but also styles dynamically.

Assemble and Pass Props in the App Component

In index.js, prepare sample data for your props (e.g., a blog title, navigation links, and an array of post summaries).

Pass these props to your components in the App component's return statement.

Implement conditional rendering logic in your components based on the passed props.

Test Your Application

Test different scenarios by modifying the props in index.js, such as changing the blog title, adding/removing posts, and toggling the login state.

Ensure your conditional rendering logic correctly displays content based on these props.
