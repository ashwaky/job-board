import JobRow from "@/app/Components/JobRow";

export default function Job() {

return(
 
    <div className="bg-slate-200 p-6  rounded-xl ">
      <div className=" mx-auto ">
        <h2 className="font-bold py-3 px-2 container mx-auto">
          Recent jobs
        </h2>
        <div className="flex flex-col gap-5 container mx-auto">
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
