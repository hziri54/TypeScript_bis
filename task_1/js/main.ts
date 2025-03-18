interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

  const teacher3: Teacher = {
    firstName: "Maxence",
    lastName: "Potier",
    fullTimeEmployee: false,
    location: "Reims",
    contract: false,
  };
  
  console.log("Teacher:", teacher3);

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  const director1: Directors = {
    firstName: "Baptiste",
    lastName: "Rousseau",
    location: "Bordeaux",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log("Director:", director1);

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  console.log(printTeacher("John", "Doe"));
  console.log(printTeacher("Maxence", "Potier"));
  console.log(printTeacher("Baptiste", "Rousseau"));

  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }

  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }

  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }

  const student = new StudentClass({ firstName: "Maxence", lastName: "Potier" });
  
  console.log(student.displayName());
  console.log(student.workOnHomework());
  