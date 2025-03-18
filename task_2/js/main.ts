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

  console.log(createEmployee(200) instanceof Teacher);
  console.log(createEmployee(1000) instanceof Director);
  console.log(createEmployee("$500") instanceof Director);

  const emp1 = createEmployee(200);
  console.log(emp1.workFromHome());
  console.log(emp1.getCoffeeBreak());

  if (emp1 instanceof Teacher) {
    console.log(emp1.workTeacherTasks());
  } else {
    console.log(emp1.workDirectorTasks());
  }
  
  const emp2 = createEmployee(1000);
  console.log(emp2.workFromHome());
  console.log(emp2.getCoffeeBreak());
  

  if (emp2 instanceof Director) {
    console.log(emp2.workDirectorTasks());
  } else {
    console.log(emp2.workTeacherTasks());
  }
  