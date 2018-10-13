const dataController = (function() {

    class Project {
        constructor(id, title) {
            this.id = id;
            this.title = title;
        }
    }

    const projects = {
        allProjects: []
    };

    return {

        addProject: function(title) {

            let ID;
            if (projects.allProjects.length > 0) {
                ID = projects.allProjects[projects.allProjects.length - 1].id + 1;
            } else {
                ID = 0;
            }

            const newProject = new Project(ID, title);
                // Add the project to the project data
            projects.allProjects.push(newProject);

            return newProject;

        },
                // Update project title in data structure
                updateTitle: function(newTitle, ID) {

                    const projectToUpdate = projects.allProjects.find(project => project.id === ID);

                    projectToUpdate.title = newTitle;

                },

                // Delete a project from data structure
                deleteData: function(ID) {

                    const currentProject = projects.allProjects.map(current => current.id);
                    const index = currentProject.indexOf(ID);
                    if (index !== -1) {
                        projects.allProjects.splice(index, 1);
                    }

                },
                // Testing
                 testing: function() {
                     console.log(projects);
                 }

             };

         })();
         // UI controller constant for timer
         const UIController = (function() {

             let intervalID;

             const DOMstrings = {
                 projectForm: '.project-form',
                 inputValue: 'input[type="text"]',
                 projectList: '.projects',
                 hoursSpan: '.hours',
                 minutesSpan: '.minutes',
                 secondsSpan: '.seconds'
             };

             // Create variables from DOMstrings
             const {projectForm, inputValue, projectList, hoursSpan, minutesSpan, secondsSpan} = DOMstrings;

             return {

               // Get input value
                getInput: function() {
                    return document.querySelector(inputValue);
                },

                addProjectToUI: function(obj) {

                    // Create markup
                    const html = `
                    <li id="project-${obj.id}">
                        <h2>${obj.title}</h2>
                        <div class="timer">
                            <p class="timer-label">Total Time Spent</p>
                            <p class="timer-text"><span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span></p>
                        </div>
                        <button class="btn start">Start</button>
                        <button class="delete-btn"><i class="fa fa-times"></i></button>
                    </li>
                    `;

                    // Insert the HTML into the DOM
                    document.querySelector(projectList).insertAdjacentHTML('beforeend', html);

                },

                clearField: function() {
                    const input = document.querySelector(inputValue);
                    input.value = '';
                },
                // Start the timer
                startTimer: function(event) {

                    const target = event.target.previousElementSibling.lastElementChild;
                    const seconds = target.querySelector(secondsSpan);
                    const minutes = target.querySelector(minutesSpan);
                    const hours = target.querySelector(hoursSpan);

                    let sec = 0;
                    intervalID = setInterval(function() {
                        sec++;
                        seconds.textContent = (`0${sec % 60}`).substr(-2);
                        minutes.textContent = (`0${(parseInt(sec / 60)) % 60}`).substr(-2);
                        hours.textContent = (`0${parseInt(sec / 3600)}`).substr(-2);
                    }, 1000);

                    target.setAttribute('timer-id', intervalID);

                },
                
