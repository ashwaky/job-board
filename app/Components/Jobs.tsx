import JobRow from "@/app/Components/JobRow";

export default function Job() {

return(
 
    <div className="bg-slate-200 p-6  rounded-xl ">
      <div className="container px-9 ">
        <h2 className="font-bold py-2 px-1">
          Recent jobs
        </h2>
        <div className="flex flex-col gap-5">
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
        </div>
      </div>
    </div>
  

  );
}
