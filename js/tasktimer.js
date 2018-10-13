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
