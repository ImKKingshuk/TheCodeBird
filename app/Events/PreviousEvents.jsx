import Link from "next/link";
import Image from "next/image";
function PreviousEvents() {
  return (
    <div className="pt-[10rem]">
      <h1 className="text-4xl text-center font-semibold">Previous Events</h1>
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12">
          {
            <div className="w-[20rem] md:w-[24rem] h-fit p-3 outline outline-gray-400 rounded-2xl mx-auto">
              <Image
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="/codebird.png"
                alt="Image of Developer"
                sizes="fill"
                width={100}
                height={100}
              />
              <div className="space-y-2">
                <p className="bg-green-500 w-fit py-1 px-3  text-sm font-medium text-gray-50 rounded-full uppercase">
                  AI / ML / Data Science
                </p>
                <a className="text-lg pt-6 font-bold sm:text-xl md:text-2xl">
                  Introduction to AI, ML, Data Science
                </a>{" "}
                <br />
                <p className=" text-sm  ">
                  Event Details :- <br /> ➡️ Programme Date: Wednesday 28-6-2023{" "}
                  <br /> ➡️ Registration Deadline: Monday, 25-6-2023
                  <br /> ➡️ Mode : Offline at UIT, Room 201{" "}
                </p>
              </div>
              <div className="pt-4">
                <Link href="/">
                  <p className="w-fit mx-auto text-sm font-medium py-1 px-3  text-center rounded-full outline outline-gray-500 backdrop-blur hover:scale-110 duration-500">
                    Registration Closed
                  </p>
                </Link>
              </div>
            </div>
          }
          {
            <div className="w-[20rem] md:w-[24rem] h-fit p-3 outline outline-gray-400 rounded-2xl mx-auto">
              <Image
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="/codebird.png"
                alt="Image of Developer"
                sizes="fill"
                width={100}
                height={100}
              />
              <div className="space-y-2">
                <p className="bg-green-500 w-fit py-1 px-3  text-sm font-medium text-gray-50 rounded-full uppercase">
                  Game Development
                </p>
                <a className="text-lg pt-6 font-bold sm:text-xl md:text-2xl">
                  Introduction to Game Development
                </a>{" "}
                <br />
                <p className=" text-sm  ">
                  Event Details :- <br /> ➡️ Programme Date: Wednesday 28-6-2023{" "}
                  <br /> ➡️ Registration Deadline: Monday, 25-6-2023
                  <br /> ➡️ Mode : Offline at UIT, Room 201{" "}
                </p>
              </div>
              <div className="pt-4">
                <Link href="/">
                  <p className="w-fit mx-auto text-sm font-medium py-1 px-3  text-center rounded-full outline outline-gray-500 backdrop-blur hover:scale-110 duration-500">
                    Registration Closed
                  </p>
                </Link>
              </div>
            </div>
          }
          {
            <div className="w-[20rem] md:w-[24rem] h-fit p-3 outline outline-gray-400 rounded-2xl mx-auto">
              <Image
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="/codebird.png"
                alt="Image of Developer"
                sizes="fill"
                width={100}
                height={100}
              />
              <div className="space-y-2">
                <p className="bg-green-500 w-fit py-1 px-3  text-sm font-medium text-gray-50 rounded-full uppercase">
                  Android Development
                </p>
                <a className="text-lg pt-6 font-bold sm:text-xl md:text-2xl">
                  Introduction to Android, Java, Kotlin
                </a>{" "}
                <br />
                <p className=" text-sm  ">
                  Event Details :- <br /> ➡️ Programme Date: Wednesday 28-6-2023{" "}
                  <br /> ➡️ Registration Deadline: Monday, 25-6-2023
                  <br /> ➡️ Mode : Offline at UIT, Room 201{" "}
                </p>
              </div>
              <div className="pt-4">
                <Link href="/">
                  <p className="w-fit mx-auto text-sm font-medium py-1 px-3  text-center rounded-full outline outline-gray-500 backdrop-blur hover:scale-110 duration-500">
                    Registration Closed
                  </p>
                </Link>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default PreviousEvents;
