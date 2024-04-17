import React from 'react'

const Login = () => {
  return (
    <main className=" ">
      <div className="bg-[#F3F4F8]">
        <div className="flex justify-center h-screen">
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/4">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <svg
                    width="294"
                    height="56"
                    viewBox="0 0 294 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0469 0.229492H54.248C57.4608 0.229492 59.9278 0.917944 61.7063 2.35222C63.4848 3.7865 64.3454 5.565 64.3454 7.80248C64.3454 10.4415 63.1406 12.4495 60.7884 13.7691C62.4521 14.4575 63.7143 15.4328 64.6322 16.7524C65.4928 18.0719 65.9518 19.5062 65.9518 21.1699C65.9518 22.8337 65.4928 24.3254 64.6322 25.5875C63.7717 26.8497 62.5095 27.8824 60.8457 28.6282C59.182 29.374 57.174 29.7182 54.8791 29.7182H18.1616L18.0469 0.229492ZM24.7593 11.7037H53.5022C54.8218 11.7037 55.7971 11.4169 56.4855 10.8431C57.174 10.2694 57.5182 9.52361 57.5182 8.60567C57.5182 7.63036 57.174 6.88454 56.4855 6.31082C55.7971 5.73711 54.7644 5.50763 53.5022 5.50763H24.7593V11.7037ZM24.7593 24.4975H54.1333C55.6823 24.4975 56.8871 24.1532 57.6903 23.4648C58.5509 22.7763 58.9525 21.8584 58.9525 20.711C58.9525 19.5636 58.5509 18.703 57.6903 17.9572C56.8298 17.2687 55.6823 16.9245 54.1333 16.9245H24.7593V24.4975Z"
                      fill="#377DFF"
                    />
                    <path
                      d="M71.1157 9.06464C71.9189 7.22876 73.1237 5.67974 74.6727 4.30283C76.2217 2.92593 78.0002 1.89325 80.1229 1.14742C82.2457 0.401598 84.5979 0 87.1796 0H109.095C111.677 0 114.029 0.401598 116.152 1.14742C118.275 1.89325 120.111 2.9833 121.602 4.30283C123.094 5.62237 124.299 7.22876 125.159 9.06464C126.02 10.9005 126.421 12.8511 126.421 14.9739C126.421 17.0966 126.02 19.0472 125.159 20.8831C124.356 22.719 123.151 24.268 121.602 25.6449C120.053 27.0218 118.275 28.0545 116.152 28.8003C114.029 29.5461 111.677 29.9477 109.095 29.9477H87.1796C84.5979 29.9477 82.2457 29.5461 80.1229 28.8003C78.0002 28.0545 76.1643 26.9644 74.6727 25.6449C73.181 24.3253 71.9762 22.719 71.1157 20.8831C70.2551 19.0472 69.8535 17.0966 69.8535 14.9739C69.8535 12.8511 70.2551 10.9005 71.1157 9.06464ZM78.0576 19.793C78.9181 21.2273 80.1229 22.3174 81.7293 23.1206C83.3357 23.9238 85.1716 24.3254 87.3517 24.3254H108.866C111.046 24.3254 112.939 23.9238 114.488 23.1206C116.095 22.3174 117.299 21.2273 118.16 19.793C119.021 18.3588 119.48 16.8097 119.48 14.9739C119.48 13.138 119.021 11.589 118.16 10.1547C117.299 8.72041 116.037 7.63036 114.488 6.82717C112.882 6.02397 111.046 5.62237 108.866 5.62237H87.3517C85.1716 5.62237 83.2783 6.02397 81.7293 6.82717C80.1229 7.63036 78.9181 8.72041 78.0576 10.1547C77.197 11.589 76.738 13.138 76.738 14.9739C76.738 16.8097 77.197 18.3588 78.0576 19.793Z"
                      fill="#377DFF"
                    />
                    <path
                      d="M131.756 9.06464C132.559 7.22876 133.764 5.67974 135.313 4.30283C136.862 2.92593 138.641 1.89325 140.764 1.14742C142.886 0.401598 145.238 0 147.82 0H169.736C172.318 0 174.67 0.401598 176.793 1.14742C178.915 1.89325 180.751 2.9833 182.243 4.30283C183.735 5.62237 184.939 7.22876 185.8 9.06464C186.66 10.9005 187.062 12.8511 187.062 14.9739C187.062 17.0966 186.66 19.0472 185.8 20.8831C184.997 22.719 183.792 24.268 182.243 25.6449C180.694 27.0218 178.915 28.0545 176.793 28.8003C174.67 29.5461 172.318 29.9477 169.736 29.9477H147.82C145.238 29.9477 142.886 29.5461 140.764 28.8003C138.641 28.0545 136.805 26.9644 135.313 25.6449C133.822 24.3253 132.617 22.719 131.756 20.8831C130.896 19.0472 130.494 17.0966 130.494 14.9739C130.552 12.8511 130.953 10.9005 131.756 9.06464ZM138.756 19.793C139.616 21.2273 140.878 22.3174 142.427 23.1206C144.034 23.9238 145.87 24.3254 148.05 24.3254H169.564C171.744 24.3254 173.637 23.9238 175.186 23.1206C176.793 22.3174 177.997 21.2273 178.858 19.793C179.719 18.3588 180.178 16.8097 180.178 14.9739C180.178 13.138 179.719 11.589 178.858 10.1547C177.997 8.72041 176.735 7.63036 175.186 6.82717C173.58 6.02397 171.744 5.62237 169.564 5.62237H148.05C145.87 5.62237 143.976 6.02397 142.427 6.82717C140.821 7.63036 139.616 8.72041 138.756 10.1547C137.895 11.589 137.436 13.138 137.436 14.9739C137.436 16.8097 137.895 18.3588 138.756 19.793Z"
                      fill="#377DFF"
                    />
                    <path
                      d="M195.038 20.7683C196.472 23.1779 198.997 24.3827 202.554 24.3827H229.174C230.665 24.3827 231.813 24.0385 232.616 23.35C233.419 22.6616 233.763 21.801 233.763 20.7683C233.763 18.4161 232.157 17.2113 229.002 17.2113H202.095C200.029 17.2113 198.193 16.8671 196.644 16.1787C195.095 15.4902 193.891 14.4575 193.03 13.1954C192.169 11.9332 191.768 10.3842 191.768 8.66305C191.768 6.99928 192.169 5.50764 193.03 4.24547C193.891 2.92594 195.095 1.95063 196.759 1.2048C198.423 0.458978 200.373 0.114746 202.726 0.114746H229.059C231.411 0.114746 233.477 0.458974 235.198 1.14743C236.919 1.83588 238.468 2.92593 239.845 4.47495L235.485 8.54831C234.853 7.573 234.05 6.82717 232.96 6.31083C231.87 5.79449 230.436 5.50764 228.657 5.50764H202.668C201.234 5.50764 200.201 5.79449 199.513 6.3682C198.824 6.94191 198.423 7.74511 198.423 8.66305C198.423 10.7858 199.914 11.8185 202.898 11.8185H229.92C232.042 11.8185 233.936 12.2201 235.542 12.9659C237.148 13.7117 238.353 14.8018 239.214 16.1213C240.074 17.4982 240.533 19.0472 240.533 20.9405C240.533 22.719 240.074 24.268 239.214 25.6449C238.353 27.0218 237.034 28.1119 235.312 28.8577C233.591 29.6609 231.526 30.0051 229.059 30.0051H202.554C199.742 30.0051 197.333 29.6035 195.382 28.8577C193.432 28.1119 191.71 26.8497 190.219 25.1286L195.038 20.7683Z"
                      fill="#377DFF"
                    />
                    <path
                      d="M271.914 29.7182H265.202V5.79449H243.057V0.229492H294.002V5.79449H271.914V29.7182Z"
                      fill="#377DFF"
                    />
                    <path
                      d="M149.429 35.5128H154.822L166.009 50.2571H161.821L159.411 46.987H144.724L142.315 50.2571H138.299L149.429 35.5128ZM157.461 44.4053L152.986 38.2666H151.15L146.618 44.4053H157.461Z"
                      fill="black"
                    />
                    <path
                      d="M188.097 48.9375C188.097 50.3145 187.811 51.4619 187.237 52.3798C186.663 53.2978 185.86 53.9862 184.827 54.3878C183.795 54.8468 182.647 55.0763 181.328 55.0763H173.353C171.976 55.0763 170.829 54.9041 169.911 54.5599C168.993 54.2157 168.19 53.642 167.559 52.8961L169.853 50.8308C170.255 51.4045 170.714 51.8061 171.288 52.093C171.861 52.3798 172.55 52.4946 173.468 52.4946H181.156C182.36 52.4946 183.278 52.2077 183.909 51.634C184.54 51.0603 184.885 50.3145 184.885 49.3392V48.7654C184.426 49.2244 183.909 49.626 183.278 49.9129C182.647 50.1997 181.959 50.3145 181.098 50.3145H173.64C172.32 50.3145 171.173 50.085 170.198 49.5686C169.222 49.1097 168.476 48.4212 167.903 47.618C167.329 46.8148 167.1 45.8395 167.1 44.8642C167.1 43.8315 167.386 42.971 167.903 42.1104C168.419 41.3072 169.222 40.6761 170.198 40.1598C171.173 39.6434 172.32 39.4139 173.64 39.4139H181.098C181.901 39.4139 182.647 39.5287 183.278 39.8155C183.909 40.1024 184.426 40.4466 184.885 40.963V39.5287H188.097V48.9375ZM170.427 44.8068C170.427 45.61 170.714 46.2985 171.288 46.8148C171.861 47.3885 172.665 47.618 173.755 47.618H181.557C182.59 47.618 183.45 47.3311 183.967 46.8148C184.54 46.2985 184.827 45.61 184.827 44.8068C184.827 44.0036 184.54 43.3152 183.967 42.7988C183.393 42.2825 182.59 41.9956 181.557 41.9956H173.755C172.722 41.9956 171.861 42.2825 171.288 42.7988C170.714 43.3725 170.427 44.0036 170.427 44.8068Z"
                      fill="black"
                    />
                    <path
                      d="M190.965 47.6754C190.449 46.8148 190.162 45.8969 190.162 44.9216C190.162 43.8889 190.449 42.971 190.965 42.1104C191.482 41.3072 192.285 40.6187 193.26 40.1598C194.235 39.7008 195.383 39.4139 196.702 39.4139H204.562C205.824 39.4139 206.972 39.6434 207.89 40.1024C208.808 40.5614 209.554 41.2498 210.012 42.053C210.529 42.8562 210.758 43.7741 210.758 44.8068V45.5527H193.318C193.432 46.2411 193.834 46.8722 194.408 47.2738C194.981 47.7328 195.784 47.9049 196.817 47.9049H205.079C205.997 47.9049 206.685 47.7901 207.201 47.5606C207.718 47.3312 208.119 46.9869 208.406 46.4706L210.414 48.2491C209.783 48.9949 209.037 49.5113 208.177 49.8555C207.316 50.1997 206.169 50.3718 204.792 50.3718H196.645C195.326 50.3718 194.178 50.1423 193.203 49.626C192.285 49.167 191.482 48.5359 190.965 47.6754ZM193.49 43.4873H207.603C207.373 42.9136 207.029 42.512 206.455 42.1678C205.882 41.8235 205.079 41.6514 204.103 41.6514H197.047C196.071 41.6514 195.326 41.8235 194.752 42.1678C194.121 42.512 193.719 42.9136 193.49 43.4873Z"
                      fill="black"
                    />
                    <path
                      d="M212.71 39.5287H215.865V40.9056C216.267 40.4466 216.783 40.045 217.414 39.8155C218.045 39.5861 218.791 39.4139 219.652 39.4139H226.823C228.315 39.4139 229.405 39.7582 230.151 40.504C230.896 41.2498 231.298 42.2251 231.298 43.5447V50.2571H228.143V44.1184C228.143 43.4299 227.97 42.9136 227.569 42.512C227.167 42.1104 226.536 41.9383 225.618 41.9383H218.676C217.758 41.9383 217.07 42.1678 216.554 42.5694C216.037 42.9709 215.808 43.602 215.808 44.3479V50.1997H212.652L212.71 39.5287Z"
                      fill="black"
                    />
                    <path
                      d="M234.051 42.1104C234.568 41.3072 235.371 40.6187 236.346 40.1598C237.321 39.7008 238.469 39.4139 239.788 39.4139H247.361C248.623 39.4139 249.714 39.5861 250.517 39.9303C251.377 40.2745 252.066 40.7909 252.639 41.5367L250.459 43.4873C250.173 42.971 249.771 42.6267 249.255 42.3972C248.738 42.1678 248.107 42.053 247.247 42.053H239.788C238.756 42.053 237.895 42.3399 237.321 42.8562C236.748 43.4299 236.461 44.1184 236.461 44.9216C236.461 45.7248 236.748 46.4132 237.321 46.9869C237.895 47.5606 238.698 47.8475 239.788 47.8475H247.247C248.107 47.8475 248.738 47.7328 249.255 47.5033C249.771 47.2738 250.173 46.8722 250.459 46.4132L252.639 48.3638C252.066 49.1097 251.377 49.626 250.517 49.9702C249.656 50.3144 248.623 50.4866 247.361 50.4866H239.788C238.469 50.4866 237.321 50.2571 236.346 49.7407C235.371 49.2244 234.625 48.5933 234.051 47.7901C233.478 46.9869 233.248 46.0116 233.248 44.9789C233.248 43.8889 233.535 42.971 234.051 42.1104Z"
                      fill="black"
                    />
                    <path
                      d="M263.54 54.7894H259.926L263.426 50.2571H261.532L253.615 39.5287H257.459L263.368 47.7901H265.147L270.999 39.5287H274.785L263.54 54.7894Z"
                      fill="black"
                    />
                    <path
                      d="M13.0844 24.544L3.79015 28.3323L3.78189 26.9629L11.6436 23.8412L11.6466 24.3379L3.74764 21.2843L3.73947 19.9284L13.0789 23.6311L13.0844 24.544ZM8.98765 17.5275L7.9271 17.5339L7.91188 15.0101C7.90859 14.4642 7.76733 14.0444 7.48811 13.7507C7.20888 13.457 6.8321 13.3116 6.35776 13.3145C5.91027 13.3172 5.53975 13.4671 5.24619 13.7642C4.95257 14.0524 4.80741 14.4694 4.8107 15.0154L4.826 17.5526L3.72518 17.5593L3.70964 14.9817C3.70607 14.3911 3.81932 13.8757 4.04937 13.4358C4.27047 12.9959 4.57721 12.6584 4.9696 12.4234C5.36193 12.1793 5.81317 12.0558 6.3233 12.0527C6.85134 12.0495 7.31298 12.1676 7.70823 12.4068C8.10342 12.6372 8.41421 12.9709 8.6406 13.4081C8.85804 13.8454 8.96854 14.3593 8.97211 14.95L8.98765 17.5275ZM13.047 18.3488L3.73028 18.405L3.72267 17.1431L13.0394 17.0869L13.047 18.3488ZM13.0146 12.979L8.85995 16.3872L8.43658 15.1949L13.005 11.3814L13.0146 12.979Z"
                      fill="#377DFF"
                    />
                  </svg>
                </div>

                <h1 className="mt-3 text-gray-500 dark:text-gray-300">
                  OPTIMISEZ VOTRE GESTION IMMOBILIÈRE AVEC DES OUTILS CONÇUS
                  POUR LES PROS
                </h1>
              </div>
              <p>Conçue pour la performance, au service de la gestion.</p>
            </div>
          </div>
          <div
            className="hidden bg-cover lg:block lg:w-2/4"
            style={{
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/c519/57e0/0e5daa7f08f22d74efcc201708f60c6b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lyryP5nVLvlkdTRiXhuLO2NRXCXyUgNiwRYCt3xUkQ8SyHFWzj8xZm1iIN~OK914gBbHN0oF104fU1bweUu0JqjwThPM11GkLnpJf2H87CW-Pm3fOC31dxIVVI-TGn~aZC-K4SJNfv3~MDcAv8IyYrhX1w1jCVt4zUx3yK2Qfv35Qxwk57N98ea05UxCbMqwXr0v7oObDxKSNmGO7W7Cy72nsydI-W1OU~KAwebKJXw6U22HT8Tz9nxc3NHrzGECQgAHtvwSZ3JeXyDTxp4jyLH16OZblHFGEWwBUJkfbk4n2omBE9kFNhqGmvE1s6bHngcs5TRztDHrl~oyYaMv8Q__')"
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div className="flex-1 bg-white p-5">
                <div>
                  <div className="">
                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      Se Connecter
                    </p>
                  </div>
                  <div className="mt-8">
                    <form>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="example@example.com"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mt-6">
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="password"
                            className="text-sm text-gray-600 dark:text-gray-200"
                          >
                            Password
                          </label>
                          <a
                            href="#"
                            className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                          >
                            Oublié？
                          </a>
                        </div>

                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Your Password"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                          Créer un compte
                        </button>
                      </div>
                      <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                          Continuer avec Google
                        </button>
                      </div>
                      <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                          Continuer avec Google
                        </button>
                      </div>
                    </form>

                    <p className="mt-6 text-sm text-center text-gray-400">
                      Vous avez déjà un compte ?
                      <a
                        href="#"
                        className="text-blue-500 focus:outline-none focus:underline hover:underline"
                      >
                        Se connecter
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
