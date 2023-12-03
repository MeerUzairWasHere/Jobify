<br/>
<p align="center">
  <a href="https://github.com/MeerUzairWasHere/Jobify">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">"Jobify" - Your ultimate job application tracker.</h3>

  <p align="center">
    Jobify: Elevate Your Career, Simplify Your Search!
    <br/>
    <br/>
    <a href="https://github.com/MeerUzairWasHere/Jobify"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/MeerUzairWasHere/Jobify">View Demo</a>
    .
    <a href="https://github.com/MeerUzairWasHere/Jobify/issues">Report Bug</a>
    .
    <a href="https://github.com/MeerUzairWasHere/Jobify/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/MeerUzairWasHere/Jobify/total) ![Contributors](https://img.shields.io/github/contributors/MeerUzairWasHere/Jobify?color=dark-green) ![Forks](https://img.shields.io/github/forks/MeerUzairWasHere/Jobify?style=social) ![Stargazers](https://img.shields.io/github/stars/MeerUzairWasHere/Jobify?style=social) ![Issues](https://img.shields.io/github/issues/MeerUzairWasHere/Jobify) ![License](https://img.shields.io/github/license/MeerUzairWasHere/Jobify) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](images/screenshot.png)

**Introducing Jobify: Your Premier Job Application Management Solution**

In the fast-paced world of job hunting, staying organized and efficient is key to securing your dream career. Enter Jobify, the cutting-edge job application tracker designed to revolutionize your job search experience effortlessly.

**Effortless Application Tracking:**
Jobify takes the hassle out of job application management. Effortlessly keep tabs on every application you submit, from the initial submission to the final decision. With a sleek and intuitive interface, tracking your progress has never been more seamless.

**Seamless Status Management:**
Say goodbye to the chaos of scattered application statuses. Jobify allows you to seamlessly manage the status of each application, providing clear insights into your job search journey. Receive timely reminders for follow-ups, interviews, and important deadlines, ensuring you never miss a beat.

**User-Friendly Interface:**
Navigating your job search has never been more user-friendly. Jobify boasts an intuitive interface that simplifies the entire process. Easily access key information, update application statuses, and organize your job hunt with just a few clicks. Your job search, your way.

**Advanced Features, Powered by MERN Stack:**
Jobify leverages cutting-edge MERN (MongoDB, Express.js, React.js, Node.js) Stack technologies to deliver advanced features that elevate your job search experience. Benefit from a robust and secure platform that combines the best in database management, server-side scripting, and front-end development for a seamless user experience.

**Tailor-Made for Your Success:**
Jobify is not just a job application tracker; it's a personalized tool crafted to enhance your chances of success in the competitive job market. Customize job profiles, access analytics to refine your strategy, and leverage the power of a platform designed to align with your unique career goals.

In a world where every opportunity matters, Jobify is your partner in success. Stay organized, stay informed, and stay ahead with Jobify – because your dream job deserves a tool as dynamic as your aspirations. Elevate your job search game; embrace Jobify today.

## Built With

Absolutely! Integrating React Query and Styled Components into Jobify enhances the application with efficient data management and a sleek, styled UI. Here's an updated list of technologies used in Jobify, now including React Query and Styled Components:

1. **MongoDB (M):**
   - A NoSQL database that provides scalability and flexibility. MongoDB efficiently stores and manages data related to job applications, profiles, and user information.

2. **Express.js (E):**
   - A web application framework for Node.js that simplifies the process of building scalable and robust server-side applications. Express.js is the backbone of Jobify's server architecture, handling routes and business logic.

3. **React.js (R):**
   - A powerful JavaScript library for building user interfaces. React.js is used to create the dynamic and responsive front-end of Jobify, ensuring a smooth and engaging user experience for job seekers.

4. **React Router:**
   - A library for adding navigation and routing functionality to React applications. React Router is integrated into Jobify to enable seamless navigation between different views, such as the dashboard, application profiles, and analytics.

5. **React Query:**
   - A library for managing and caching asynchronous data fetching in React applications. React Query optimizes data fetching and state management, providing a more efficient way to handle data throughout Jobify.

6. **Styled Components:**
   - A library for styling React components with scoped and reusable styles. Styled Components allow for the creation of a consistent and visually appealing UI in Jobify, enhancing the overall user experience.

7. **Node.js (N):**
   - A JavaScript runtime that allows server-side execution. Node.js powers the server in Jobify, facilitating fast and efficient communication between the front-end and the database.

8. **Additional Technologies:**
   - Various additional technologies and libraries complement the MERN Stack, React Router, React Query, and Styled Components. These may include libraries for authentication, data validation, and other features critical to a comprehensive job application tracking system.

With the integration of React Query, Jobify ensures optimal data management, making the application more responsive and improving the overall user experience. Styled Components contribute to a sleek and visually consistent design, enhancing the aesthetics and usability of the application. This combination of technologies makes Jobify a powerful and modern job application tracking solution.

## Getting Started

Certainly! Here's an example guide on how to set up the Jobify project locally:

### Setting Up Jobify Locally

Follow these simple steps to get a local copy of Jobify up and running on your machine:

#### Prerequisites:

Before you begin, make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB

#### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/jobify.git
```

Replace `your-username` with your GitHub username.

#### Step 2: Navigate to the Project Directory

```bash
cd jobify
```

#### Step 3: Install Dependencies

```bash
npm install
```

#### Step 4: Set Up MongoDB

Make sure MongoDB is running on your machine. You may need to start the MongoDB server using:

```bash
mongod
```

#### Step 5: Set Up Environment Variables

Create a `.env` file in the root of the project and configure the following variables:

```env
# MongoDB connection URI
MONGODB_URI=your_mongodb_uri

# Other environment variables if applicable
```

Replace `your_mongodb_uri` with the URI for your MongoDB database.

#### Step 6: Run the Application

```bash
npm start
```

This command will start both the server and the React application. The application should be accessible at `http://localhost:3000/`.

#### Step 7: Access Jobify

Open your web browser and navigate to [http://localhost:3000/](http://localhost:3000/) to access the Jobify application locally.

### Congratulations!

You've successfully set up Jobify locally. Feel free to explore the features and customize it according to your preferences. If you encounter any issues, refer to the project's documentation or seek help from the community. Happy job tracking!

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)

2. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter your API in `config.js`

```JS
const API_KEY = 'ENTER YOUR API';
```

## Usage

Certainly! Below is a step-by-step guide on how a user can perform various actions on Jobify, including creating an account, adding a job, editing/deleting, changing their profile, and tracking job statistics through the stats page.

### 1. Create an Account:

- Navigate to the Jobify website.
- Click on the "Sign Up" or "Create Account" button.
- Fill in the required information such as username, email, and password.
- Click "Sign Up" to create your account.



### 2. Log In:

- After creating your account, log in using your credentials.
- You will be redirected to the Jobify dashboard.

### 3. Add a Job:

- On the dashboard, find the "Add Job" button.
- Fill in details for the new job, including job title, company, application date, and other relevant information.
- Click "Submit" or "Save" to add the job to your list.



### 4. Edit or Delete a Job:

- From the dashboard, click on the job you want to edit.
- Update the necessary information.
- Click "Save" to apply changes.
- To delete a job, click on the "Delete" or "Remove" button associated with the job.

### 5. Change Your Profile:

- Navigate to the profile section, often found in the user menu.
- Update your profile details, including skills, experience, and education.
- Click "Save" to apply changes.



### 6. Track Job Statistics:

- Access the "Stats" or "Analytics" page from the dashboard.
- Explore insights such as the number of applications submitted, interview success rates, and other relevant statistics.



### 7. Log Out:

- When you're done, log out of your Jobify account to secure your information.

### Additional Tips:

- Explore other features such as the interview scheduler, document repository, and networking tools for a comprehensive job search experience.
- Refer to the documentation for detailed information on all features and customization options.

By following these steps, users can efficiently manage their job search using Jobify, from creating an account to tracking statistics for a well-organized and successful job hunting experience.

## Roadmap

See the [open issues](https://github.com/MeerUzairWasHere/Jobify/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/MeerUzairWasHere/Jobify/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/MeerUzairWasHere/Jobify/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/MeerUzairWasHere/Jobify/blob/main/LICENSE.md) for more information.

## Authors

* **Mir Uzair** - *Crafting immersive user experiences through clean and elegant code* - [Mir Uzair](https://github.com/MeerUzairWasHere)
