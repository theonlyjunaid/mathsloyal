import Image from "next/image";

const Rightbar = ({ Issue,tutor }) => {

  const AssignIssue=async(id)=>{
    const res = await fetch("/api/issue/assignIssue",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        issueId: Issue?._id,
        tutorId: tutor?.user?._id,
      }),
    }
    );
    const data = await res.json();
    console.log(data);
  }
  return (
    <div
      className={`hidden relative lg:flex w-[260px] bg-white shadow-2xl h-screen  right-0  top-0 p-2`}
    >
      <div className="w-full flex justify-center">
        <div className="mt-5 mx-auto ">
          <div className="flex gap-3 items-center">
            <div className="text-2xl font-semibold font-mono text-blue-500">
              Mathsloyal
            </div>
          </div>
          <div className="mt-10 mb-4 text-xs text-gray-600">
            Status of upcoming question
          </div>
     {Issue &&     <div w-full>
            <div className="text-6xl px-4 bg-vio bg-violet-600 rounded-full w-max mx-auto">
              J
            </div>
            <div>
              <Image
                src={Issue?.image}
                width={500}
                height={500}
                className="w-[260px] mt-2 object-contain bg-gray-100 border px-1 rounded-md mx-auto"
                alt="logo"
                priority
              />
              <p className="text-xs text-gray-500 mt-1">
                view in bigger size {">"}
              </p>
            </div>
            <div className="mt-3 flex justify-center mx-auto">
              <button className="px-2 bg-green-400 hover:bg-green-500 rounded-md  mx-2 text-xl "
              onClick={()=>{
                AssignIssue(tutor?.user?._id)
              }}
              >
                Accept
              </button>
              <button className="px-5 bg-red-400 hover:bg-red-500 rounded-md  mx-2 text-xl">
                Pass
              </button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
