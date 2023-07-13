## RESTAURANT INVENTORY MANAGEMENT SYSTEM
![image](images/doc2.png)
A restaurant management system is a type of point-of-sale (POS) software specifically designed for restaurants, bars, food trucks and others in the foodservice industry.

You can manage almost every pertinent aspect of your restaurant, depending on which type of RMS you choose. With an end-to-end system, you will have complete access to these functions and features: 

- Employee schedules, including daily, vacation and sick time
- Financial statements
- Inventory
- Reporting and analytics
- CRM
- Menu

### Techology used
The project is done using React in the frontend part. And thanks to all the libraries that react has, we dicided to work with `syncfusion` library. With this tool, we are able to designe scheduale, make calendar, kanban, charts and much more. with this library, we are able to done the 97% of forntend. The other libraries like `react-icons` and `three js` are the sumplementary of the whole frontend part.

And second of all, we have the `tailwindcss` libraray that we are using to mnake css more compilable and dynamic using classes. You can check its documentation at its official website [here]('tailwindcss.com')

We also decided to use `Vite` in order to quickly run this project along side with `npm`. Vite is one of the latest solution used by react for node management.
We are not going to talk much about it in this documentation. But if you want to learn more about vite, you can vite, you can check thier documentation.
![Image](images/doc1.png)

Here on top, is the presentation on how we run the local project using vite.

### How to run the project ?
In order to run this project you need to follow the following steps.
#### First step
- Clone this project in your local repository;
- Open your terminal, (Git Bash is preferable);
- Enter in the __frontend__ directory by using `cd frontend` in your terminal
- Install npm by running `npm install` in your terminal

#### Second step
- Configure the tailwindcss runs with react using vite; use [this link to know more](https://tailwindcss.com/docs/installation)
- Run the following command in your terminal, `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`

Remember here, i used _index.css_ instead of _input.css_  because that's how i set my tailwindcss reference base. After doing all the rest of the following above, then
- Then run `npm run dev`

Then vite will open up a suggestion of the localhost and the port that opens the the app.
it is usally __http://127.0.0.1:5173__

![Image](images/doc1.png)