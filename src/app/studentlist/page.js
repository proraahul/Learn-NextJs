import Link from "next/link";

const StudentList = () => {
    
  const URL_OBJ = [
    { name: "peter", link: "/studentlist/peter" },
    { name: "anil", link: "/studentlist/anil" },
    { name: "sam", link: "/studentlist/sam" },
    { name: "salman", link: "/studentlist/salman" },
    { name: "mukesh", link: "/studentlist/mukesh" },
  ];

  return (
    <div>
      <h1 className="text-3xl text-red-500">Student List</h1>
      <ul className="flex flex-col gap-y-10 ml-5 mt-5">
        {URL_OBJ.map((item) => {
          return (
            <li>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
