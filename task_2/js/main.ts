interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }

  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }

  const createEmployee = (salary: number | string): Director | Teacher => {
    return typeof salary === "number" && salary < 500 ? new Teacher() : new Director();
  };

  const isDirector = (employee: Director | Teacher): employee is Director => {
    return employee instanceof Director;
  };

  const executeWork = (employee: Director | Teacher): void => {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  };

  executeWork(createEmployee(200));
  executeWork(createEmployee(1000));

  type Subjects = "Math" | "History";

  const teachClass = (todayClass: Subjects): string => {
    return todayClass === "Math" ? "Teaching Math" : "Teaching History";
  };

  console.log(teachClass("Math"));
  console.log(teachClass("History"));
  