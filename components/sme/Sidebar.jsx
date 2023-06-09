import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const Sidebar = ({ setChat, chat, Questions, setQuestion, Question,tutor }) => {
  const router = useRouter();
console.log(Questions)

  return (
    <div className="hidden sm:flex h-screen bg-white shadow-2xl w-[180px] xl:w-[260px] ">
      <div className="flex h-full min-h-0 flex-col ">
        <div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
          <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
            <div className="text-2xl font-semibold mt-3">
              Hey, <span className="text-blue-500">{tutor?.user?.name}</span>{" "}
              <span>(sme)</span>
            </div>

            <div className="flex-col flex-1 overflow-y-auto border-b border-white/20 py-4">
              <div className="flex flex-col gap-2 text-gray-700 text-sm mt-4 ">
                <div className="text-gray-500 text-sm ">
                  previously Answered Questions
                </div>
               { 
                Questions?.map((question) => (
                  <div className="flex py-3 px-3 items-center gap-3 hover:bg-gray-500/10  relative rounded-md  cursor-pointer break-all  group"
                  onClick={() => {
                    // setQuestion(question);
router.push(`/sme/doubt?question=${question._id}`);
setQuestion(
  Questions?.filter((q) => q._id === question._id)[0]
);

                  }}
                  key={question.id}
                  //   setChat([
                  //     {
                  //       name: "Junaid",
                  //       role: "user",
                  //       message: "https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/b63c2df59f616465c9cec1546539ffb3c574dd2e_2_690x211.JPG",
                  //       time: "12:00",
                  //     },
                  //     {
                  //       name: "Junaid",
                  //       role: "user",
                  //       message: "I am not able to solve this question",
                  //       time: "12:00",
                  //     },
                  //     {
                  //       name: "tariq",
                  //       role: "sme",
                  //       message: "https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/870290aafeac5605fa96ceecac6fdac27101bd44_2_375x500.jpg",
                  //       time: "12:00",
                  //     }
                  //   ])
                  // }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <div className="flex-1  max-h-5 overflow-hidden relative">
{question?.message}
                    </div>
                  </div>
                )).reverse()
               }
              </div>
            </div>

            {/* <div className="flex py-3 px-3 items-center gap-3 rounded-md border-t hover:bg-gray-500/10 transition-colors duration-200 text-gray-[700] cursor-pointer text-sm">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              Dark mode
            </div>

            <Link
              href=""
              target="_blank"
              className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-gray-[700] cursor-pointer text-sm"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1={10} y1={14} x2={21} y2={3} />
              </svg>
              Updates &amp; FAQ
            </Link>
            <div className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-gray-[700] cursor-pointer text-sm">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1={21} y1={12} x2={9} y2={12} />
              </svg>
              Log out
            </div> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
