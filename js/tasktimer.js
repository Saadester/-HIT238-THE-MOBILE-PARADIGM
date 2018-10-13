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
