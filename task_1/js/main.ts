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
  
  console.log(printTeacher("Pierre Loup", "Martin"));
  console.log(printTeacher("Maxence", "Potier"));
  console.log(printTeacher("Baptiste", "Rousseau"));
  