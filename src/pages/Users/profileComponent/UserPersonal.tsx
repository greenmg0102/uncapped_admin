import { Link } from 'react-router-dom';

export default function UserPersonal({ userInfo }: any) {

    return (
        <div className="panel">
            <div className="flex items-center justify-between mb-5">
                <h5 className="font-semibold text-lg dark:text-white-light">Profile</h5>
                <Link to="/users/user-account-settings" className="ltr:ml-auto rtl:mr-auto btn btn-primary p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path opacity="0.5" d="M4 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path
                            d="M14.6296 2.92142L13.8881 3.66293L7.07106 10.4799C6.60933 10.9416 6.37846 11.1725 6.17992 11.4271C5.94571 11.7273 5.74491 12.0522 5.58107 12.396C5.44219 12.6874 5.33894 12.9972 5.13245 13.6167L4.25745 16.2417L4.04356 16.8833C3.94194 17.1882 4.02128 17.5243 4.2485 17.7515C4.47573 17.9787 4.81182 18.0581 5.11667 17.9564L5.75834 17.7426L8.38334 16.8675L8.3834 16.8675C9.00284 16.6611 9.31256 16.5578 9.60398 16.4189C9.94775 16.2551 10.2727 16.0543 10.5729 15.8201C10.8275 15.6215 11.0583 15.3907 11.5201 14.929L11.5201 14.9289L18.3371 8.11195L19.0786 7.37044C20.3071 6.14188 20.3071 4.14999 19.0786 2.92142C17.85 1.69286 15.8581 1.69286 14.6296 2.92142Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path
                            opacity="0.5"
                            d="M13.8879 3.66406C13.8879 3.66406 13.9806 5.23976 15.3709 6.63008C16.7613 8.0204 18.337 8.11308 18.337 8.11308M5.75821 17.7437L4.25732 16.2428"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                    </svg>
                </Link>
            </div>
            <div className="mb-5">
                <div className="flex flex-col justify-center items-center">
                    <img src={userInfo.socialAvatar} alt="img" className="w-24 h-24 rounded-full object-cover  mb-5" />
                    <p className="font-semibold text-primary text-xl">
                        {userInfo.displayName !== null ? userInfo.displayName : userInfo.firstName + " " + userInfo.lastName}
                    </p>
                </div>
                <ul className="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                    <li className="flex items-center gap-2">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <path d="M6.62468572,8.14320304 L6.70775746,8.20293774 L11.6963633,12.0911527 C11.7823968,12.0792753 11.8691226,12.073005 11.955983,12.0723823 C12.7772671,12.0722179 13.5134228,12.57511 13.8061295,13.3363412 C14.0988361,14.0975725 13.8872951,14.959026 13.2744576,15.5014556 C12.6616201,16.0438852 11.77478,16.1546218 11.0455383,15.7797729 C10.3649126,15.4299138 9.95352194,14.7248812 9.97762075,13.974326 L9.98951103,13.8129089 L9.98827984,13.8115017 L6.13680825,8.75590897 C5.70660681,8.19119026 6.07901302,7.78381747 6.62468572,8.14320304 Z M21.1635963,14.1579185 C21.6255293,14.1579185 22,14.5293741 22,14.9875877 C22,15.4458014 21.6255293,15.817257 21.1635963,15.817257 C20.7016633,15.817257 20.3271927,15.4458014 20.3271927,14.9875877 C20.3271927,14.5293741 20.7016633,14.1579185 21.1635963,14.1579185 Z M4.8415736,9.21481561 L5.80492327,10.5381978 C4.69188967,11.8457891 3.93051933,13.4114981 3.5917055,15.0895375 C3.53742062,15.3719458 3.33392036,15.6034174 3.05925013,15.6951795 C2.78457989,15.7869417 2.48137353,15.7247511 2.26591523,15.5324589 C2.05045693,15.3401667 1.95618977,15.0476202 2.01926661,14.7670152 C2.43515928,12.6966876 3.41072797,10.7774946 4.8415736,9.21481561 Z M20.0661812,11.1451174 C20.5281142,11.1451174 20.9025849,11.516573 20.9025849,11.9747866 C20.9025849,12.4330003 20.5281142,12.8044559 20.0661812,12.8044559 C19.6042482,12.8044559 19.2297775,12.4330003 19.2297775,11.9747866 C19.2297775,11.516573 19.6042482,11.1451174 20.0661812,11.1451174 Z M18.102573,8.5706206 C18.564506,8.5706206 18.9389767,8.94207616 18.9389767,9.40028983 C18.9389767,9.85850349 18.564506,10.2299591 18.102573,10.2299591 C17.6406401,10.2299591 17.2661694,9.85850349 17.2661694,9.40028983 C17.2661694,8.94207616 17.6406401,8.5706206 18.102573,8.5706206 Z M15.3765127,6.7491714 C15.8384457,6.7491714 16.2129164,7.12062697 16.2129164,7.57884063 C16.2129164,8.0370543 15.8384457,8.40850987 15.3765127,8.40850987 C14.9145797,8.40850987 14.540109,8.0370543 14.540109,7.57884063 C14.540109,7.12062697 14.9145797,6.7491714 15.3765127,6.7491714 Z M9.09941694,6.54699761 C9.56134993,6.54699761 9.9358206,6.91845317 9.9358206,7.37666684 C9.9358206,7.8348805 9.56134993,8.20633607 9.09941694,8.20633607 C8.63748395,8.20633607 8.26301327,7.8348805 8.26301327,7.37666684 C8.26301327,6.91845317 8.63748395,6.54699761 9.09941694,6.54699761 Z M12.2526989,6 C12.7146319,6 13.0891026,6.37145557 13.0891026,6.82966923 C13.0891026,7.28788289 12.7146319,7.65933846 12.2526989,7.65933846 C11.7907659,7.65933846 11.4162952,7.28788289 11.4162952,6.82966923 C11.4162952,6.37145557 11.7907659,6 12.2526989,6 Z" fill="#4285F4" fillRule="nonzero" />
                            </g>
                        </svg>{' '}
                        Premium
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0">
                            <path
                                d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path opacity="0.5" d="M7 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path opacity="0.5" d="M17 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path opacity="0.5" d="M2 9H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Jan 20, 1989
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0">
                            <path
                                opacity="0.5"
                                d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M20.9605 15.5C21.6259 16.1025 22 16.7816 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 16.7816 2.37412 16.1025 3.03947 15.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                        New York, USA
                    </li>
                    <li>
                        <button className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                <path
                                    opacity="0.5"
                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="text-primary truncate">{userInfo.user.email}</span>
                        </button>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                opacity="0.5"
                                d="M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        </svg>
                        <span className="whitespace-nowrap" dir="ltr">
                            +1 (530) 555-12121
                        </span>
                    </li>
                </ul>
                <ul className="mt-7 flex items-center justify-center gap-2">
                    <li>
                        <button className="btn btn-info flex items-center justify-center rounded-full w-10 h-10 p-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-danger flex items-center justify-center rounded-full w-10 h-10 p-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path
                                    d="M3.33946 16.9997C6.10089 21.7826 12.2168 23.4214 16.9997 20.66C18.9493 19.5344 20.3765 17.8514 21.1962 15.9286C22.3875 13.1341 22.2958 9.83304 20.66 6.99972C19.0242 4.1664 16.2112 2.43642 13.1955 2.07088C11.1204 1.81935 8.94932 2.21386 6.99972 3.33946C2.21679 6.10089 0.578039 12.2168 3.33946 16.9997Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    opacity="0.5"
                                    d="M16.9497 20.5732C16.9497 20.5732 16.0107 13.9821 14.0004 10.5001C11.99 7.01803 7.05018 3.42681 7.05018 3.42681M7.57711 20.8175C9.05874 16.3477 16.4525 11.3931 21.8635 12.5801M16.4139 3.20898C14.926 7.63004 7.67424 12.5123 2.28857 11.4516"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-dark flex items-center justify-center rounded-full w-10 h-10 p-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}