
import { useState, useEffect } from "react";
import { Leftbar } from "../../components/sme/Leftbar";
import Status from "../../components/sme/dashboard/Status.jsx";
import ProfilePreview from "../../components/sme/dashboard/ProfilePreview";
import Subscription from "../../components/sme/dashboard/Subscription";
import RecentDoubts from "../../components/sme/dashboard/RecentDoubts";
import Contact from "../../components/sme/dashboard/Contact";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";


const Dashboard = ({ tutor, setTutor }) => {
  const router = useRouter();
  const [contact, setContact] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [ask, setAsk] = useState("hidden");
  console.log(tutor)
  useEffect(() => {
    console.log(tutor)
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("mysme")) {
        router.push("/sme/login");
        setIsLoading(false);
      } else {
        if (typeof window !== "undefined") {
          // const token = localStorage.getItem("token");
          const user = localStorage.getItem("mysme");
          const user1 = JSON.parse(user);
          // console.log(student)
          if (user1?.token && user1?.token != "undefined" && user1?.token != null) {
            console.log(user1?.token)
            fetch("/api/tutor/checkTut", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: user1?.token
              })
            }).then((res) => res.json())
              .then((res) => {
                if (res.success) {
                  // router.push("/sme");
                  setIsLoading(false)
                  console.log("success")
                } else {
                  router.push("/sme/login");
                  setIsLoading(false)
                }
              }
              ).catch((err) => {
                console.log(err);
              }
              )
          }


          // if(user?.email && user?.token && user?.token!="undefined"){
          //   Router.push("/user");
          // }

          // if(token && token!="undefined"){
          //   Router.push("/user");
          // }

        }
      }
    }

  }, [])




  return (
    <div className="bg-gray-50 flex ">
      {isLoading && <Loading />}

      <Leftbar />
      {/* <Askdoubt ask={ask} setAsk={setAsk} />
      <Sidebar ask={ask} setAsk={setAsk} />
      <Chatroom />
      <Rightbar /> */}
      <div className="w-full xl:w-4/5 mx-auto mt-10 ">
        <div className="text-3xl font-semibold m-6">
          Hey,
          <span className="text-blue-500 mx-1">{tutor?.user?.name}</span>
          <span className="tex">
            (sme)
          </span>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="">
            <ProfilePreview tutor={tutor} />

            <Subscription />


            <RecentDoubts />
          </div>
          <div className="flex flex-col">
            <Status />
            {contact ? (
              <Contact setContact={setContact} />
            ) : (
              <div className="flex">
                <div
                  className="
                w-3/5 border nr-2 m-5 p-4 rounded-lg bg-white  shadow-sm
                "
                >
                  <div className="flex flex-col gap-2 text-gray-700 text-sm ">
                    <div className="text-gray-500 text-sm my-3">
                      Start Solving
                    </div>
                  </div>
                  <div
                    className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-300 bg-gray-100 transition-colors duration-200 text-gray-700 cursor-pointer text-center justify-center text-sm mb-2 flex-shrink-0 border border-white/20 shadow-sm"
                    onClick={() => {
                      // setAsk("");
                      router.push("/sme/doubt")
                    }}
                  >

                    Click to Enter the world of solving                  </div>
                </div>

                <div className=" w-2/5 text-center bg-white rounded-lg   p-1 py-2 border border-red-100 shadow-sm ml-2 m-5 ">
                  <div className="flex flex-col gap-2 text-gray-700 text-sm ">
                    facing issue / have suggestion
                  </div>
                  <div>
                    <button
                      onClick={() => setContact(true)}
                      className="text-lg my-2 font-base  border p-1  rounded-lg duration-300 bg-gray-100 hover:bg-gray-200 "
                    >
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
