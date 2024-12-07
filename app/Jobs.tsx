import JobRow from "@/app/Components/JobRow";

export default function Job() {

return(

  <div className="bg-gray-200 p-4 rounded-xl">
    <div className="container">
      <h2 className="font-bold mb-4">Recent Jobs</h2>
      <div className="flex flex-col gap-4">
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
