"use client";
import Link from "next/link";
import Image from "next/image";
function BlogUI1() {
  return (
    <div className="pt-[8rem] px-6 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="pt-16 mx-auto">
          <div className="bg-green-500 flex  rounded-full text-gray-50 px-2 py-1 w-fit  uppercase">
            <p className="inline">
              <svg
                className="w-3.5 h-3.5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                       00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                       1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                        0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </p>
            <p className="inline text-xs font-medium">New</p>
          </div>
          <a className="text-4xl font-bold lg:text-5xl xl:text-6xl">
            UIT CodeBird
          </a>
          <div className="pt-2">
            <p className="text-sm font-medium inline"></p>
            <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 ">
              @ImKKingshuk
            </a>
            <p className="inline text-sm text-gray-400 font-medium mt-0 mr-1 mb-0 ml-1">
              · 26th, May 2023 ·
            </p>
          </div>
        </div>
        <div className="p-4">
          <Image
            className=" rounded-lg h-60 w-80 mx-auto"
            src="/codebird.png"
            alt="Image of Developer"
            sizes="fill"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12 ">
          {
            <Link href="/Blog/posts?id=1">
              <div className="p-2  h-fit w-[18rem] rounded-2xl outline outline-gray-500 mx-auto hover:scale-110 duration-300">
                <div>
                  <Image
                    className=" w-[18rem] h-[10rem]   rounded-2xl "
                    src="/web3intro.png"
                    alt="Image of Developer"
                    sizes="fill"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="pt-3 mx-auto text-center">
                  <p className="text-lg">Introduction to Web3</p>

                  <div className=" flex justify-between  pt-3">
                    <p className="text-left text-md text-blue-500 flex flex-col">
                      <span>Read More →</span>
                      <span className="text-sm pt-2 font-medium text-gray-500 flex ">
                        <svg
                          className="w-5 h-5 pr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        349
                      </span>
                    </p>
                    <p className="flex flex-col text-right ">
                      <span className="text-3xl font-semibold ">28</span>
                      <span className=" uppercase">May</span>
                    </p>
                  </div>

                  <div className="flex flex-row ">
                    <Image
                      className=" w-8 h-8   rounded-full "
                      src="/codebird.png"
                      alt="Image of Developer"
                      sizes="fill"
                      width={10}
                      height={10}
                    />
                    <p className="pl-3 text-sm  my-auto ">@ImKKingshuk</p>
                  </div>
                </div>
              </div>
            </Link>
          }
          {
            <Link href="/Blog/posts?id=2">
              <div className="p-2  h-fit w-[18rem] rounded-2xl outline outline-gray-500 mx-auto hover:scale-110 duration-300">
                <div>
                  <Image
                    className=" w-[18rem] h-[10rem]   rounded-2xl "
                    src="/react.png"
                    alt="Image of Developer"
                    sizes="fill"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="pt-3 mx-auto text-center">
                  <p className="text-lg">Introduction to ReactJS</p>

                  <div className=" flex justify-between  pt-3">
                    <p className="text-left text-md text-blue-500 flex flex-col">
                      <span>Read More →</span>
                      <span className="text-sm pt-2 font-medium text-gray-500 flex ">
                        <svg
                          className="w-5 h-5 pr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        349
                      </span>
                    </p>
                    <p className="flex flex-col text-right ">
                      <span className="text-3xl font-semibold ">28</span>
                      <span className=" uppercase">May</span>
                    </p>
                  </div>
                  <div className="flex flex-row ">
                    <Image
                      className=" w-8 h-8   rounded-full "
                      src="/codebird.png"
                      alt="Image of Developer"
                      sizes="fill"
                      width={10}
                      height={10}
                    />
                    <p className="pl-3 text-sm  my-auto ">@ImKKingshuk</p>
                  </div>
                </div>
              </div>
            </Link>
          }
          {
            <Link href="/Blog/posts?id=3">
              <div className="p-2  h-fit w-[18rem] rounded-2xl outline outline-gray-500 mx-auto hover:scale-110 duration-300">
                <div>
                  <Image
                    className=" w-[18rem] h-[10rem]   rounded-2xl "
                    src="/codebird.png"
                    alt="Image of Developer"
                    sizes="fill"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="pt-3 mx-auto text-center">
                  <p className="text-lg">Introduction to The Code Bird</p>

                  <div className=" flex justify-between  pt-3">
                    <p className="text-left text-md text-blue-500 flex flex-col">
                      <span>Read More →</span>
                      <span className="text-sm pt-2 font-medium text-gray-500 flex ">
                        <svg
                          className="w-5 h-5 pr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        349
                      </span>
                    </p>
                    <p className="flex flex-col text-right ">
                      <span className="text-3xl font-semibold ">28</span>
                      <span className=" uppercase">May</span>
                    </p>
                  </div>
                  <div className="flex flex-row ">
                    <Image
                      className=" w-8 h-8   rounded-full "
                      src="/codebird.png"
                      alt="Image of Developer"
                      sizes="fill"
                      width={10}
                      height={10}
                    />
                    <p className="pl-3 text-sm  my-auto ">@ImKKingshuk</p>
                  </div>
                </div>
              </div>
            </Link>
          }
          {
            <Link href="/Blog/posts?id=4">
              <div className="p-2  h-fit w-[18rem] rounded-2xl outline outline-gray-500 mx-auto hover:scale-110 duration-300">
                <div>
                  <Image
                    className=" w-[18rem] h-[10rem]   rounded-2xl "
                    src="/unrealengine.png"
                    alt="Image of Developer"
                    sizes="fill"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="pt-3 mx-auto text-center">
                  <p className="text-lg">Introduction to Unreal Engine 5.1</p>

                  <div className=" flex justify-between  pt-3">
                    <p className="text-left text-md text-blue-500 flex flex-col">
                      <span>Read More →</span>
                      <span className="text-sm pt-2 font-medium text-gray-500 flex ">
                        <svg
                          className="w-5 h-5 pr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        349
                      </span>
                    </p>
                    <p className="flex flex-col text-right ">
                      <span className="text-3xl font-semibold ">28</span>
                      <span className=" uppercase">May</span>
                    </p>
                  </div>
                  <div className="flex flex-row ">
                    <Image
                      className=" w-8 h-8   rounded-full "
                      src="/codebird.png"
                      alt="Image of Developer"
                      sizes="fill"
                      width={10}
                      height={10}
                    />
                    <p className="pl-3 text-sm  my-auto ">@ImKKingshuk</p>
                  </div>
                </div>
              </div>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default BlogUI1;
